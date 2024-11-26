'use client'
import { useTheme } from "../contexts/ThemeContext"

function Navbar() {
  const {isDarkMode, toggleTheme} = useTheme()  
  return (
    <div className="bg-white dark:bg-black flex flex-row justify-center">
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md   bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
        >
      {isDarkMode ?  '☀️ Light Mode' :'🌙 Dark Mode'}
        </button>
    </div>
  )
}

export default Navbar