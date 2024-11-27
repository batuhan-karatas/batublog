'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
  
    return (
      <div className="relative w-3/5 max-w-md flex flex-row justify-around items-cente">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          className="w-full pt-1 pb-1 pl-2 text-gray-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        {!query && (
             <FaSearch className="absolute left-32 top-4 transform -translate-y-1/2 text-gray-500 dark:text-white" />
        )}
       
      </div>
    );
}

export default SearchBar