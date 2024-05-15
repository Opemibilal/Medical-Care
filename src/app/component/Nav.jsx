"use client"
import Image from 'next/image'
import React from 'react'
import { logo } from './img'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Nav() {
    const Nav = [
      {  name: "Home",  href:"/"},
      {  name: "About Us",  href:"/about"},
      {  name: "Services",  href:"/services"},
      {  name: "Contact",  href:"/contact"},
      {  name: "Find Doctors",  href:"/finddoctors"},
    ]
    const pathname = usePathname()
  return (
    <div>
        <nav className='flex items-center  justify-around pt-5'> 
            <div>
                <Image src={logo}/>
            </div>

            <div>
                <ul>
                    {
                        Nav.map((item, i) => {
                            const isActive = pathname === item.href
                            return (
                                <Link href={item.href} key={item.name} className={`${isActive && "text-blue-500 font-semibold cursor-pointer "}  font-semibold  text-md  p-5 cursor-pointer`}>{item.name}</Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <button className='bg-gradient-to-r from-blue-600 to-blue-300 w-32 h-10 rounded-md text-white shadow-lg'>Join Us</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav