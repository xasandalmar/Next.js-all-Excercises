// app/blog/[[...slug]]/page.tsx
export default async function BlogPage({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug ? resolvedParams.slug.join('/') : '';

  return (
    <div>
      <h1>You visited: /{slugPath}</h1>
    </div>
  );
}