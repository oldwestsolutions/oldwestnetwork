'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaBell, FaUser, FaCog, FaSignInAlt, FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { IoCloud } from 'react-icons/io5';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on mount and when it changes
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(auth);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);

    // Handle scroll behavior
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    document.cookie = 'isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsAuthenticated(false);
    setIsProfileOpen(false);
    router.push('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center">
              <IoCloud className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-white">OldWest</span>
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-white">
                <FaSearch className="h-5 w-5" />
              </button>
            </form>
            
            {/* Notifications - Hidden on mobile */}
            <button className="hidden md:block text-gray-300 hover:text-white">
              <FaBell className="h-6 w-6" />
            </button>

            {/* Profile Button */}
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
                        <p className="text-sm font-medium text-white">
                          {isAuthenticated ? 'Legend' : 'Guest'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {isAuthenticated ? '@legendarygamer' : 'Not signed in'}
                        </p>
                      </div>
                    </div>
                  </div>
                  {isAuthenticated ? (
                    <>
                      <Link 
                        href="/legend" 
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FaUser className="mr-3" />
                        Dashboard
                      </Link>
                      <Link 
                        href="/account" 
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FaUser className="mr-3" />
                        Account
                      </Link>
                      <Link 
                        href="/settings" 
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FaCog className="mr-3" />
                        Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <FaSignOutAlt className="mr-3" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link 
                      href="/login" 
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FaSignInAlt className="mr-3" />
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/browse" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                href="/community" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="/tournaments" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tournaments
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 