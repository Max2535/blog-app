import Link from 'next/link'
import Head from 'next/head'

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Blog</h1>
        <ul>
          <li>
            <Link href="/blog/posts/hello-world">Hello World</Link>
          </li>
          <li>
            <Link href="/blog/posts/nextjs-tutorial">Next.js Tutorial</Link>
          </li>
          <li>
            <Link href="/blog/posts/anything-here">Anything Here</Link>
          </li>
        </ul>
        <p>
          <Link href="/">Home</Link>
        </p>
      </main>
    </>
  )
}
