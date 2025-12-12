import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function CategoryBlogPost() {
  const router = useRouter()
  const { category, slug } = router.query

  return (
    <>
      <Head>
        <title>Post: {String(slug)} - {String(category)}</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Category: {category}</h1>
        <h2>Post: {slug}</h2>
        <p>
          <Link href="/blog">Back to Blog</Link>
        </p>
      </main>
    </>
  )
}
