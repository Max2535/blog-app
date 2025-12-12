import { useRouter } from "next/router";

export default function DocsPage() {
  const router = useRouter();
  const { slug } = router.query;

  // slug is an array of segments
  const path = Array.isArray(slug) ? slug.join('/') : slug;

  return (
    <div>
      <h1>Docs</h1>
      <p>Path: {path}</p>
    </div>
  );
}