// src/App.tsx

import { useState, useEffect } from 'react';
import { BlogHeader } from './components/BlogHeader';
import { BlogPost } from './components/BlogPost';
import { BlogFooter } from './components/BlogFooter';
import { SearchBar } from './components/SearchBar';
import { SortControls } from './components/SortControls';
import { Skeleton } from './components/Skeleton';
import { BlogPost as BlogPostType } from './types';

// Mock data (later: fetch from API)
const initialPosts: BlogPostType[] = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      title: 'Understanding React Components',
      content: 'React components are the building blocks of React applications. They allow you to break down your UI into reusable pieces...',
      likes: 42,
      comments: 12,
      publishedAt: '2024-01-15'
    },
    {
      id: 2,
      author: {
        name: 'Jane Smith',
        username: 'janesmith',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      title: 'Getting Started with TypeScript',
      content: 'TypeScript adds static typing to JavaScript, making your code more robust and maintainable. In this post, we explore...',
      likes: 38,
      comments: 8,
      publishedAt: '2024-01-14'
    },
    {
      id: 3,
      author: {
        name: 'Bob Johnson',
        username: 'bobjohnson',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      title: 'Clean Code Principles',
      content: 'Writing clean code is essential for maintainability. Here are some principles every developer should follow...',
      likes: 55,
      comments: 15,
      publishedAt: '2024-01-13'
    }
];

function App() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState('');

  const [sortBy, setSortBy] = useState<'date' | 'likes' | 'comments'>('date');
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc');

  useEffect(() => {
    // simulate API loading
    setLoading(true);
    const t = setTimeout(() => {
      setPosts(initialPosts);
      setLoading(false);
    }, 900);

    return () => clearTimeout(t);
  }, []);

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    let cmp = 0;
    if (sortBy === 'date') {
      cmp = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    } else if (sortBy === 'likes') {
      cmp = a.likes - b.likes;
    } else {
      cmp = a.comments - b.comments;
    }

    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <SearchBar value={query} onChange={setQuery} />
          </div>

          <div className="w-full md:w-auto">
            <SortControls
              sortBy={sortBy}
              onChangeSortBy={(s) => setSortBy(s)}
              sortDir={sortDir}
              onToggleDir={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
            />
          </div>
        </div>

        {loading ? (
          // show 3 skeletons while loading
          Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)
        ) : sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))
        ) : (
          <p className="text-gray-600">No posts match your search.</p>
        )}
      </main>

      <BlogFooter />
    </div>
  );
}

export default App;