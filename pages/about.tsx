import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>About</h1>
        <p>This is a demo page for the About route.</p>
        <p>
          <Link href="/">Home</Link>
        </p>
      </main>
    </>
  )
}
