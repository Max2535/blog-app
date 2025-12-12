# Blog App

A small React + TypeScript demo blog app. This repository contains two frontends:

- A Create React App demo app (React entry) under `src/`.
- An optional Next.js `pages/` demo used for routing examples.

## Features

- Search posts by title (case-insensitive substring match)
- Sort posts by date, likes, or comments (ascending / descending)
- Simulated API loading with skeleton placeholders
- Responsive layouts for mobile, tablet and desktop

## Quick Start

Install dependencies and start the CRA dev server:

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

Run the Next.js demo server (optional):

```bash
npm install
npm run dev:next
```

The Next.js dev server runs at http://localhost:3001 by default.

## Controls

- Search: type in the search box to filter posts by title.
- Sort: choose a sort key and toggle ascending/descending to reorder posts.

## Development notes

- Mock posts are defined in `src/App.tsx` (`initialPosts`). Replace the simulated fetch with an API call in the `useEffect` hook for a real backend.
- If you change dynamic routes, clear the Next cache and restart the dev server: `rm -rf .next && npm run dev:next`.
- Keep `<Head><title>...</title></Head>` children as plain text strings to avoid hydration warnings.

## URL routes (Next.js pages)

The `pages/` folder contains example Next.js routes. Key routes in this workspace:

- `/` — Home ([pages/index.tsx](pages/index.tsx))
- `/about` — About ([pages/about.tsx](pages/about.tsx))
- `/contact` — Contact ([pages/contact.tsx](pages/contact.tsx))
- `/products/[id]` — Product detail ([pages/products/[id].tsx](pages/products/[id].tsx))
- `/docs/[...slug]` — Catch-all docs pages ([pages/docs/[...slug].tsx](pages/docs/[...slug].tsx))
- `/blog` — Blog index ([pages/blog/index.tsx](pages/blog/index.tsx))
- `/blog/posts/[slug]` — Single-post pages ([pages/blog/posts/[slug].tsx](pages/blog/posts/[slug].tsx))
- `/blog/[category]/[slug]` — Category + post pages ([pages/blog/[category]/[slug].tsx](pages/blog/[category]/[slug].tsx))
- `/blog/post` — Sample post page ([pages/blog/post.tsx](pages/blog/post.tsx))

Notes:

- When adding or renaming dynamic route segments, Next.js can throw "different slug names" errors if conflicting dynamic folders exist. Remove or rename conflicting route files and restart the dev server.
- Links used by the CRA app may point to different paths than the Next demo; use the Next routes above when running the Next server.

## Want more?

- Add URL sync for the search query (`?q=...`) so results are shareable.
- Debounce the search input for better performance with large lists.
- Replace simulated loading with a real API and add error handling.

## License

This project is for demo purposes.
