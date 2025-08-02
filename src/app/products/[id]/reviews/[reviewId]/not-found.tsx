"use client"
import { usePathname } from "next/navigation";
export default  function Notfound() {

const pathName = usePathname()
const segments = pathName.split('/')
const productId = segments[2]
const reviewId = segments[4]
// console.log(segments)
  return (
    <div>
      <h1>
        The review id:{reviewId} for product with product id:{productId} is not found
      </h1>
    </div>
  );
}
