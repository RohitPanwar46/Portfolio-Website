"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router = useRouter()

  return (

    <nav className=" text-[#03045e] ">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto md:p-4">
        <div className='hidden md:block font-inter font-semibold'>
          ROHIT
        </div>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row p-4 md:p-0    md:space-x-8 rtl:space-x-reverse   ">
            <li>
              <Link href="/" className={`block py-2 px-3 hover:text-blue-700  rounded md:bg-transparent  md:p-0 `} aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" className={`block ${router.pathname === "/about" && "text-blue-700"} py-2 px-3 hover:text-blue-700  rounded md:bg-transparent  md:p-0 `}>About</Link>
            </li>
            <li>
              <Link href="/projects" className={`block ${router.pathname === "/projects" && "text-blue-700"} py-2 px-3 hover:text-blue-700  rounded md:bg-transparent  md:p-0 `}>Projects</Link>
            </li>
            <li>
              <Link href="/contact" className={`block ${router.pathname === "/contact" && "text-blue-700"} py-2 px-3 hover:text-blue-700  rounded md:bg-transparent  md:p-0 `}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
