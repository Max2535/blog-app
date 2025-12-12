import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Home</h1>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/products/123">Product 123</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}
