export const metadata = {
  title:"Products",
}

export default function ProductLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
       <h1>Products Layout</h1>
       {children}
    </div>
  );
}