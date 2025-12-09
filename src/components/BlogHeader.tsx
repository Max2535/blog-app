// src/components/BlogHeader.tsx

export function BlogHeader() {
  return (
    <header className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">My Tech Blog</h1>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}