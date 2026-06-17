import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalSpotlight from './components/GlobalSpotlight';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vihanga | Portfolio | Full Stack Developer',
  description: 'Professional software engineering portfolio showcasing StayMate, DevGuardian, and full-stack capabilities in Next.js, Spring Boot, and cloud architecture.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'Next.js Developer', 'Spring Boot Developer', 'Vihanga', 'Portfolio'],
  authors: [{ name: 'Vihanga' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Vihanga | Portfolio | Full Stack Developer',
    description: 'Professional software engineering portfolio showcasing StayMate, DevGuardian, and full-stack capabilities in Next.js, Spring Boot, and cloud architecture.',
    url: 'https://vihanga.dev',
    type: 'website',
    siteName: 'Vihanga Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300 hype-grid">
        <ThemeProvider>
          {/* Global Ambient Mouse Spotlight */}
          <GlobalSpotlight />

          {/* Top Page Progress Indicator */}
          <ScrollProgress />
          
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Sticky Navigation Header */}
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          
          {/* Global Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
