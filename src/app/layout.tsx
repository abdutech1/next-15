export const metadata = {
  title:"our app",
  description:"our app is developed  using next.js"
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
    <body>
      <header>
        <h1>HEADER</h1>
      </header>
      {children}
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </body>
    </html>
  )
}