"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";

const Header = () => {
  const pathname = usePathname()
  const links = [
    {name:"Home", href:"/"},
    {name:"Products", href:"/products"},
    {name:"Docs", href:"/docs"},
  ]
  return (
    <header>
        <header>
          <ul>
        {links.map((link,index) =>{
          const isActive = pathname === link.href;
          return(
            <li className={isActive ? "text-4xl" : ""} key={index}><Link href={link.href}>{link.name}</Link></li>
          )
        })}
        </ul>
      </header>
    </header>
  )
}

export default Header