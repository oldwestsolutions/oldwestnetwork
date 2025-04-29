'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaBell, FaUser, FaCog, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { IoCloud } from 'react-icons/io5';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <IoCloud className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-white">OldWest</span>
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button className="text-gray-300 hover:text-white">
              <FaBell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-300 hover:text-white"
              >
                <FaUser className="h-6 w-6" />
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      <FaUserCircle className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-white">Guest</p>
                        <p className="text-xs text-gray-400">Not signed in</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/login" 
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaSignInAlt className="mr-3" />
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 