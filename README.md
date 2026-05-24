# Portfolio

A modern, interactive portfolio website showcasing projects, skills, and experience. Built with Next.js, React, and Tailwind CSS for a responsive and performant user experience.

## Features

- **Hero Section** - Eye-catching introduction with custom cursor effects
- **About Section** - Professional background and summary
- **Skills Section** - Technical skills and expertise display
- **Projects Section** - Showcase of projects with descriptions
- **Contact Section** - Get in touch information and links
- **Smooth Animations** - Framer Motion for fluid transitions
- **Responsive Design** - Optimized for all device sizes
- **Theme Support** - Dark/light mode toggle
- **Scroll Progress Indicator** - Visual feedback while scrolling

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org) - Type-safe development
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- **Animations:** [Framer Motion](https://www.framer.com/motion) - Declarative animations
- **Icons:** [React Icons](https://react-icons.github.io/react-icons) - Icon library
- **Linting:** [ESLint](https://eslint.org) - Code quality

## Getting Started

### Prerequisites
- Node.js 18+ or compatible runtime

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
app/
├── components/       # React components
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About section
│   ├── Skills.tsx    # Skills section
│   ├── Projects.tsx  # Projects showcase
│   ├── Contact.tsx   # Contact section
│   ├── Navbar.tsx    # Navigation bar
│   ├── Footer.tsx    # Footer
│   ├── ThemeContext.tsx    # Theme provider
│   ├── CustomCursor.tsx    # Custom cursor effect
│   └── ScrollProgress.tsx  # Scroll indicator
├── hooks/            # Custom React hooks
│   └── useGithubRepos.ts # GitHub repos integration
├── data.ts          # Static data and configuration
├── projects.ts      # Project data
├── layout.tsx       # Root layout
├── page.tsx         # Home page
└── globals.css      # Global styles
public/
└── projects/        # Project assets
```

## Customization

### Update Personal Info
Edit [app/data.ts](app/data.ts) to update your personal information, skills, and experience.

### Modify Projects
Update [app/projects.ts](app/projects.ts) to showcase your own projects.

### Styling
- Global styles: [app/globals.css](app/globals.css)
- Tailwind config: `tailwind.config.ts`

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live at a Vercel URL

For other deployment options, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the MIT License.
