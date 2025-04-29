'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaSearch, FaUser, FaGamepad, FaFilm, FaMusic, FaTv, FaCar, FaCube, FaFutbol, FaVideo } from 'react-icons/fa';

// SearchResults component that uses useSearchParams
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const results = [
        {
          id: 1,
          title: `Streamer playing ${query}`,
          streamer: 'PopularStreamer',
          viewers: 12345,
          thumbnail: 'https://via.placeholder.com/320x180',
          category: 'Games',
          icon: <FaGamepad className="text-purple-500" />
        },
        {
          id: 2,
          title: `Movie about ${query}`,
          streamer: 'MovieChannel',
          viewers: 8765,
          thumbnail: 'https://via.placeholder.com/320x180',
          category: 'Movies',
          icon: <FaFilm className="text-blue-500" />
        },
        {
          id: 3,
          title: `Music stream featuring ${query}`,
          streamer: 'MusicLive',
          viewers: 5432,
          thumbnail: 'https://via.placeholder.com/320x180',
          category: 'Music',
          icon: <FaMusic className="text-green-500" />
        }
      ];
      setSearchResults(results);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              placeholder="Search for streams, games, or categories..."
              className="w-full bg-gray-800 text-white px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <img src={result.thumbnail} alt={result.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {result.viewers.toLocaleString()} viewers
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {result.icon}
                    <span className="ml-2 text-sm text-gray-400">{result.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{result.title}</h3>
                  <p className="text-gray-400 text-sm">by {result.streamer}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-200">No results found</h3>
            <p className="mt-1 text-sm text-gray-400">
              Try searching for something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Main SearchPage component
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
} 