import Link from 'next/link'
import Head from 'next/head'

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Sample Blog Post - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Blog Post</h1>
        <p>This is a demo blog post page.</p>
        <p>
          <Link href="/blog">Back to Blog</Link>
        </p>
      </main>
    </>
  )
}
