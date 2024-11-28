'use client'
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoBlack from "@/../public/images/logo-black.svg";
import logoWhite from "@/../public/images/logo-white.svg";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  const { isDarkMode } = useTheme();
  const navButtons = ["Science", "Technology", "Sports", "Others"];
  const [sidebar, setSidebar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Activate Hamburger Menu
  useEffect(() => {
    // Function to check window size
    const handleResize = () => {
      setIsVisible(window.innerWidth < 1024); // Tailwind 'lg' breakpoint is 1024px
      if (window.innerWidth >= 1024) {
        setSidebar(false);
      }
    };
    // Check on initial load
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to lock/unlock body scroll when the sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = ""; // Unlock scroll
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebar]);

  return (
    <div className="bg-white dark:bg-black flex flex-row justify-between lg:justify-around pt-6 pr-8 pl-8 lg:pr-0 lg:pl-0">
      {/* Logo Section */}
      <Link className="flex flex-row items-center" href="/">
        <Image src={isDarkMode ? logoWhite : logoBlack} alt="logo" />
        <p className="text-black dark:text-white text-xl ml-1">Batu</p>
        <p className="text-black dark:text-white text-xl font-bold ml-1">
          Blog
        </p>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex flex-row items-center text-black dark:text-white gap-12">
          <li
            className="w-20 flex flex-row items-center justify-center text-secondary-600 dark:text-white hover:font-semibold"
            key="home"
          >
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

      {/* Hamburger Menu */}
      {isVisible && (
        <button
          onClick={() => setSidebar(!sidebar)}
          className="relative w-10 h-10 flex items-center justify-center"
          aria-label={sidebar ? "Close Menu" : "Open Menu"}
        >
          {/* Hamburger Icon */}
          <RxHamburgerMenu
            className={`absolute lg:hidden w-8 h-8 text-black dark:text-white transform transition-all duration-300 ${
              sidebar ? "opacity-0 invisible rotate-90" : "opacity-100 visible rotate-0"
            }`}
          />

          {/* Cross Icon */}
          <RxCross1
            className={`absolute lg:hidden w-8 h-8 text-black dark:text-white transform transition-all duration-300 ${
              sidebar ? "opacity-100 visible rotate-0" : "opacity-0 invisible rotate-90"
            }`}
          />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed bg-[#e7e5e5] shadow-xl dark:bg-slate-800 h-full w-1/2 lg:w-2/5 top-0 left-0 z-10 transform transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-start items-start pl-4 text-lg text-black dark:text-white gap-12 pt-12">
          <li
            className="w-20 flex flex-row items-center justify-start text-black dark:text-white hover:font-semibold"
            key="home"
          >
            <Link href="/" onClick={() => setSidebar(false)}>
              Home
            </Link>
          </li>
          {navButtons.map((button) => (
            <li
              className="w-20 flex flex-row items-center justify-start text-black dark:text-white hover:font-semibold"
              key={button}
            >
              <Link href={`/${button.toLowerCase()}`} onClick={() => setSidebar(false)}>
                {button}
              </Link>
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
