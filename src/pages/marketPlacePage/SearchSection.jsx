import React from 'react'
import { Search, MapPin, LayoutGrid } from "lucide-react"; // from lucide-react



const SearchSection = () => {
  return (
    <section className='w-full mx-auto bg-white py-10 px-5 '>
        <div className="w-full max-w-3xl mx-auto my-20   flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm px-4 py-4 space-x-3">
      {/* Search Input */}
      <div className="flex items-center flex-1 space-x-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for crops, produce, equipment..."
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200"></div>

      {/* Location Dropdown */}
      <div className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-green-600">
        <MapPin size={18} />
        <span className="text-sm">Location</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200"></div>

      {/* Category Dropdown */}
      <div className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-green-600">
        <LayoutGrid size={18} />
        <span className="text-sm">Category</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    </section>
  )
}

export default SearchSection