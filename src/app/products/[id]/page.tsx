"use client"
import { useState,use } from "react";
export default function Page({params}:{params:Promise<{id:string}>}) {
 const {id} = use(params);
 const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Details page</h1>
      <p>This is a detail for a product with id:{id}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
    </div>
  );
}

