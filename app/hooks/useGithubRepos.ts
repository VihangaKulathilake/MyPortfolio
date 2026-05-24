'use client';

import { useState, useEffect } from 'react';

export interface RepoDetails {
  owner: string;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
}

interface ProjectKey {
  owner: string;
  repoName: string;
}

export function useGithubRepos(projectsList: ProjectKey[]) {
  const [repos, setRepos] = useState<Record<string, RepoDetails>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const listFingerprint = projectsList.map(p => `${p.owner}/${p.repoName}`).sort().join(',');

  useEffect(() => {
    const cacheKey = `github-repos-cache-${listFingerprint}`;

    const fetchRepos = async () => {
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          setRepos(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const repoMap: Record<string, RepoDetails> = {};
        
        // Fetch details for each repo in parallel
        const fetchPromises = projectsList.map(async (p) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${p.owner}/${p.repoName}`);
            if (res.ok) {
              const data = await res.json();
              const key = `${p.owner}/${p.repoName}`.toLowerCase();
              repoMap[key] = {
                owner: p.owner,
                name: p.repoName,
                html_url: data.html_url,
                stargazers_count: data.stargazers_count,
                forks_count: data.forks_count,
                description: data.description,
              };
            }
          } catch (e) {
            console.error(`Error fetching repo ${p.owner}/${p.repoName}:`, e);
          }
        });

        await Promise.all(fetchPromises);

        sessionStorage.setItem(cacheKey, JSON.stringify(repoMap));
        setRepos(repoMap);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (projectsList.length > 0) {
      fetchRepos();
    }
  }, [listFingerprint]);

  const getRepoDetails = (owner: string, repoName: string, fallbackUrl: string): { url: string; stars?: number; forks?: number } => {
    const key = `${owner}/${repoName}`.toLowerCase();
    const details = repos[key];
    if (details) {
      return {
        url: details.html_url,
        stars: details.stargazers_count,
        forks: details.forks_count
      };
    }
    return { url: fallbackUrl };
  };

  return { repos, loading, error, getRepoDetails };
}
