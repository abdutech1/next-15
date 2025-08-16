
import Header from "@/components/Header"
import '../global.css'

export const metadata = {
  title:{
    default:"This is the default title",
    template:"CODE BEYOND | %s"
  },
  description:"our app is developed  using next.js"
}

export default function RootLayout({children}:{children:React.ReactNode}){
  
  return(
    <html lang="en">
    <body>
    <Header/>
      {children}
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </body>
    </html>
  )
}