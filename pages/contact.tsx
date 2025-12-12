import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Contact</h1>
        <p>This is a demo Contact page.</p>
        <p>
          <Link href="/">Home</Link>
        </p>
      </main>
    </>
  )
}
