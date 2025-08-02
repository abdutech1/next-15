import { notFound } from "next/navigation";
export default async function Page({
  params
}: {
  params: Promise<{id:string, reviewId: string}>;
}) {
  const { reviewId,id } = await params;
  if(parseInt(reviewId) > 10){
    notFound()
  }
  return (
    <div>
      <h2>Product id:{id} and Reviews id:{reviewId}</h2>
    </div>
  );
}