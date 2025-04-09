# Chokhi Clone

A pixel-perfect clone of the [Chokhi by SWASTIK](https://chokhi.co.in/) website, built with Next.js and Shadcn UI.

## Features

- Responsive design that works on all devices
- Product display with sale badges
- Clean, modern UI that matches the original website
- Server-side rendering for optimal performance
- Image optimization

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Static type-checking

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- Bun or npm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chokhi-clone.git
cd chokhi-clone
```

2. Install dependencies
```bash
bun install
# or
npm install
```

3. Run the development server
```bash
bun run dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

```bash
bun run build
# or
npm run build
```

## Deployment

The site is configured for easy deployment on platforms like Vercel, Netlify, or GitHub Pages. The `next.config.js` is already set up for static export with:

```js
output: 'export',
distDir: 'out',
```

## License

This project is for educational purposes only. All design and assets belong to their respective owners.
