import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  body: string
}

const posts: Post[] = [
  { slug: 'hello-world', title: 'Hello World', body: 'Welcome to the Hello World blog post.' },
  { slug: 'nextjs-tutorial', title: 'Next.js Tutorial', body: 'This is a short Next.js tutorial post.' },
  { slug: 'anything-here', title: 'Anything Here', body: 'You can write anything in your slug!' }
]

export default function BlogPost({ post }: { post: Post | null }) {
  if (!post) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Post not found</h1>
        <p>
          <Link href="/blog">Back to Blog</Link>
        </p>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog App</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>{post.title}</h1>
        <article>
          <p>{post.body}</p>
        </article>
        <p>
          <Link href="/blog">Back to Blog</Link>
        </p>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = posts.find((p) => p.slug === slug) ?? null

  return {
    props: {
      post
    }
  }
}
