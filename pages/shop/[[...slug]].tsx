import { useRouter } from "next/router";

export default function ShopPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <h1>All Categories</h1>;
  }

  return (
    <div>
      <h1>Shop</h1>
      <p>Category: {Array.isArray(slug) ? slug.join(' > ') : slug}</p>
    </div>
  );
}