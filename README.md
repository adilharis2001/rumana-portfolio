# Rumana Rashid - Portfolio Website

A modern, interactive portfolio website showcasing the work of Rumana (Ru) Rashid, MD/PhD candidate with expertise in clinical medicine, AI research, and biotech venture capital.

## Features

- 🎨 **Modern Design**: Clean, minimal interface with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **High Performance**: Built with Next.js 14 for optimal speed
- 🎭 **Interactive Elements**: Scroll-triggered animations and hover effects
- 📊 **Data Visualization**: Interactive charts and metrics
- 🔍 **SEO Optimized**: Comprehensive metadata and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rumana-portfolio/
├── app/
│   ├── components/
│   │   ├── sections/     # Main section components
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Data files (publications, etc.)
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── robots.ts        # Robots.txt generation
│   └── sitemap.ts       # Sitemap generation
├── public/
│   ├── images/          # Image assets
│   └── pdfs/            # PDF files (CV, etc.)
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Sections

1. **Hero Section**: Introduction with animated taglines and interactive Venn diagram
2. **Narrative Intro**: Scrollytelling section explaining her unique background
3. **Impact Dashboard**: Animated metrics showcasing clinical, research, investment, and innovation impact
4. **Publications**: Filterable library of 15+ publications with search functionality
5. **Contact**: Multiple contact methods and downloadable CV

## Customization

### Adding a Profile Photo

Replace `/public/images/profile.svg` with your actual photo (`.jpg` or `.png`)

### Updating Content

- **Publications**: Edit `/app/data/publications.ts`
- **Contact Info**: Update in `/app/components/sections/HeroSection.tsx` and `/app/components/sections/ContactSection.tsx`
- **Colors**: Modify theme in `/tailwind.config.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables required for basic functionality.

## Performance

Target metrics:
- First Contentful Paint (FCP): < 1.0s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Lighthouse Score: 95+

## License

All rights reserved © 2024 Rumana Rashid

## Contact

- Email: rumanarashid001@gmail.com
- LinkedIn: [rurashid001](https://www.linkedin.com/in/rurashid001/)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=PjPMy1gAAAAJ)
