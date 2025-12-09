# Blog App

A small React + TypeScript demo blog app (bootstrapped with Create React App). It demonstrates basic post rendering and interactive UI features used while developing a blog-style interface.

## Features

- Search posts by title (case-insensitive substring match)
- Sort posts by date, likes, or comments (ascending / descending)
- Simulated API loading with skeleton placeholders
- Responsive layouts for mobile, tablet and desktop

## Quick Start

Install dependencies and start the dev server:

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser. The app simulates a short API delay on load and displays skeletons while fetching posts.

## Controls

- Search: type in the search box to filter posts by title.
- Sort: choose a sort key and toggle ascending/descending to reorder posts.

## Development notes

- Mock posts are defined in `src/App.tsx` (`initialPosts`). In a real app replace the simulated fetch with an API call in the `useEffect` hook.
- Responsive styles use Tailwind utility classes; adjust breakpoints and classes in the components to change behavior for mobile/tablet/desktop.

## Want more?

- Add URL sync for the search query (`?q=...`) so results are shareable.
- Debounce the search input for better performance with large lists.
- Replace simulated loading with a real API and add error handling.

## License

This project is for demo purposes.
