export default async function Page({
  params
}: {
  params: Promise<{id:string, reviewId: string}>;
}) {
  const { reviewId,id } = await params;
  return (
    <div>
      <h2>Product id:{id} and Reviews id:{reviewId}</h2>
    </div>
  );
}