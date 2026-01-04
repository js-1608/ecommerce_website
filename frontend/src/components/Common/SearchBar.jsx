import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    setIsOpen(false);
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Search Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-100 rounded-full transition"
        aria-label="Open search"
      >
        <Search size={22} />
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-999 bg-black/70 backdrop-blur-sm flex justify-center top-10 px-4">
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-6 text-white hover:opacity-70"
            aria-label="Close search"
          >
            <X size={32} />
          </button>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-5xl animate-fadeIn"
          >
            <div className="relative top-0 ">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />
              <input
                autoFocus
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search anything..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl bg-white text-black focus:outline-none focus:ring-4 focus:ring-red-500"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
