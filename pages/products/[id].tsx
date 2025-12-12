import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Product {id} - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Product {id}</h1>
        <p>This page shows a dynamic product id from the URL.</p>
        <p>
          <Link href="/">Home</Link>
        </p>
      </main>
    </>
  )
}
