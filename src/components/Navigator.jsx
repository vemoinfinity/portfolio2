import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

import logo from '../picturs/logo_transparent.png';

const Navigator = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 bg-black/80 dark:bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt='namelogo' width={200} height={40} />
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="text-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-sky-600 hover:bg-sky-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <Link to="/abilities">Abilities</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-sky-600 hover:bg-sky-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-sky-600 hover:bg-sky-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <Link to="/contactme">Contact</Link>
          </Button>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navigator