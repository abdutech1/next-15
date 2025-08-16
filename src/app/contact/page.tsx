import About from "./_components/page"
import Profile from "./profile"
export const metadata = {
  title:{
    absolute:"Contact Title"
  }
}

const Page = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Profile/>
      <About/>
    </div>
  )
}

export default Page