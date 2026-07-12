# Lincoln University College Website

React + Vite university website built for the internship project requirements.

## Features

- Responsive red-themed university UI
- Home, About, Programs, Program Details, Contact, and 404 pages
- Program search, category filters, and level filters
- Featured programs and program detail pages
- Contact form with validation and Google Maps embed
- FAQ section and local AI FAQ helper
- Local rule-based AI chatbot
- AI-style program recommendation and smart search
- Loading skeletons for program results
- Reusable components, data-driven program content, and FontAwesome icons

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS utility classes
- Bootstrap grid utilities
- Framer Motion
- FontAwesome
- Oxlint

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  components/
  components/layout/
  data/
  pages/
  utils/
  assets/
```

## AI Features

The project uses local rule-based AI logic in `src/utils/ai.js`:

- Smart program search
- Program recommendation
- AI chatbot answers
- AI FAQ answer generation

This keeps the demo functional without requiring an external API key.

## Deployment

Build the production app with:

```bash
npm run build
```

The generated `dist/` folder can be deployed to Vercel, Netlify, or any static hosting provider.
