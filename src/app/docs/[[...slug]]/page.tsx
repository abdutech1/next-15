export default async function Page({params}:{params:Promise<{slug?:string[]}>}) {
  const {slug} = await params
  const path = slug ? slug.join('/') : 'docs'
  return (
    <div>
      <h1>Docs detail page</h1>
      <h2>The Segments are {path}</h2>
      {slug && <h3>Individual segments {JSON.stringify(slug)}</h3>}
    </div>
  );
}