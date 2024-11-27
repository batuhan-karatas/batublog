import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 rounded-full focus:outline-none 
        transition-colors duration-300 ${
          isDarkMode ? "bg-blue-600" : "bg-gray-300"
        }`}
    >
      <span
        className={` w-6 h-6 bg-white rounded-full shadow-md transform
          transition-transform duration-300 flex items-center justify-center
          ${isDarkMode ? "translate-x-6" : "translate-x-1"}`}
      >
        {/* Icon */}
        {isDarkMode ? <FaMoon className="text-blue-600" /> : <FaSun className="text-yellow-400" />}
      </span>
    </button>
  );
};

export default DarkModeToggle;
