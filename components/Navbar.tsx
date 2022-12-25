import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useTheme} from "next-themes";
import {BsSun,BsMoon} from "react-icons/bs";

const Navbar = () => {
  const router = useRouter()
  const {systemTheme , theme, setTheme} = useTheme ();

      const renderThemeChanger= () => {

          const currentTheme = theme === "system" ? systemTheme : theme ;

          if(currentTheme ==="dark"){
            return (
              <BsSun className="w-6 h-6 text-gray-100 " role="button" onClick={() => setTheme('light')} />
            )
          }

          else {
            return (
              <BsMoon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
          }
       };
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 md:justify-between">
        <div>
          <Link href="/" className={router.pathname == "/" ? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"}>
              Home
          </Link>
          <Link href="/about" className={router.pathname == "/about" ? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6" : "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"}>
              About
          </Link>
        </div>
        {renderThemeChanger()}
        {/* <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a> */}
    </div>
</nav>
  )
}

export default Navbar