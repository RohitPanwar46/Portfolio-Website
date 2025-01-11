/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Navbar = () => {
  return (
    

<nav className=" text-[#03045e] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className='font-inter font-semibold'>
        ROHIT
    </div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
        <li>
          <a href="#" className="block py-2 px-3 hover:text-blue-700  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
