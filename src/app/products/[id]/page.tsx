// "use client"
// import { useState,use } from "react";
// export default function Page({params}:{params:Promise<{id:string}>}) {
//  const {id} = use(params);
//  const [count,setCount] = useState(0)
//   return (
//     <div>
//       <h1>Details page</h1>
//       <p>This is a detail for a product with id:{id}</p>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(prev => prev + 1)}>+1</button>
//     </div>
//   );
// }

import { Metadata } from "next";
type Props = {
  params:Promise<{id:string}>
}
export const generateMetadata = async ({params}:Props) :Promise<Metadata> => {
  const {id} = await params;
  return {
    title:`Product id ${id}`,
  }
}
export default async function Page({params}:Props) {
  const {id} = await params;

  return (
    <div>
      <h1>Product with Product id {id}</h1>
    </div>
  );
}
