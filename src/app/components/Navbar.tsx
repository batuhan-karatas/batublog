'use client'
import { useTheme } from "../contexts/ThemeContext"
import { useState } from "react"
import Image from "next/image"
import logoBlack from "@/../public/images/logo-black.svg"
import logoWhite from "@/../public/images/logo-white.svg"
import Link from "next/link"
import DarkModeToggle from "./DarkModeToggle"
import SearchBar from "./SearchBar"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  const { isDarkMode } = useTheme();
  const navButtons = ['Science', 'Technology', 'Sports', 'Others'];
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="bg-white dark:bg-black flex flex-row justify-between lg:justify-around pt-6 pr-8 pl-8 lg:pr-0 lg:pl-0">
      {/* Logo Section */}
      <div className="flex flex-row items-center">
        <Image 
          src={isDarkMode ? logoWhite : logoBlack}
          alt="logo"
        />
        <p className="text-black dark:text-white text-xl ml-1">Batu</p>
        <p className="text-black dark:text-white text-xl font-bold ml-1">Blog</p>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex flex-row items-center text-black dark:text-white gap-12">
          <li className="w-20 flex flex-row items-center justify-center text-secondary-600 dark:text-white hover:font-semibold" key="home">
            <Link href="/">Home</Link>
          </li>
          {navButtons.map((button) => (
            <li
              className="w-20 flex flex-row items-center justify-center text-secondary-600 dark:text-white hover:font-semibold"
              key={button}
            >
              <Link href={`/${button.toLowerCase()}`}>{button}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={() => setSidebar(!sidebar)}
        className="relative w-10 h-10 flex items-center justify-center"
      >
        {/* Hamburger Icon */}
        <RxHamburgerMenu
          className={`absolute lg:hidden w-8 h-8 text-black dark:text-white transform transition-transform duration-300 ${
            sidebar ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />

        {/* Cross Icon */}
        <RxCross1
          className={`absolute lg:hidden w-8 h-8 text-black dark:text-white transform transition-transform duration-300 ${
            sidebar ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed bg-[#c5c5c5] dark:bg-slate-800 h-full w-1/2 lg:w-2/5 top-0 left-0 z-10 transform transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-start items-start pl-4 text-lg text-black dark:text-white gap-12 pt-8">
          <li
            className="w-20 flex flex-row items-center justify-start text-black dark:text-white hover:font-semibold"
            key="home"
          >
            <Link href="/">Home</Link>
          </li>
          {navButtons.map((button) => (
            <li
              className="w-20 flex flex-row items-center justify-start text-black dark:text-white hover:font-semibold"
              key={button}
            >
              <Link href={`/${button.toLowerCase()}`}>{button}</Link>
            </li>
          ))}
          <DarkModeToggle />
        </ul>
      </div>

      {/* Desktop Search and Dark Mode */}
      <div className="hidden lg:flex flex-row justify-around items-center gap-3">
        <SearchBar />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
