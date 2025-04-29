'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaSearch, FaFilter, FaGamepad, FaUser, FaVideo } from 'react-icons/fa';

interface SearchResult {
  id: number;
  type: 'stream' | 'channel' | 'video';
  title?: string;
  streamer?: string;
  viewers?: number;
  thumbnail?: string;
  tags?: string[];
  name?: string;
  followers?: number;
  isLive?: boolean;
  avatar?: string;
  game?: string;
  creator?: string;
  views?: number;
  duration?: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    // Simulate search results based on query
    const results: SearchResult[] = [
      {
        id: 1,
        type: 'stream',
        title: 'Playing Fortnite with Friends',
        streamer: 'Gamer123',
        viewers: 1250,
        thumbnail: 'https://via.placeholder.com/320x180',
        tags: ['Fortnite', 'Battle Royale', 'Gaming']
      },
      {
        id: 2,
        type: 'channel',
        name: 'ProGamer',
        followers: 50000,
        isLive: true,
        avatar: 'https://via.placeholder.com/100x100',
        game: 'Valorant'
      },
      {
        id: 3,
        type: 'video',
        title: 'How to Build a Minecraft Castle',
        creator: 'MinecraftMaster',
        views: 25000,
        thumbnail: 'https://via.placeholder.com/320x180',
        duration: '15:30'
      }
    ];
    setSearchResults(results);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const filters = [
    { id: 'all', label: 'All', icon: FaSearch },
    { id: 'streams', label: 'Streams', icon: FaVideo },
    { id: 'channels', label: 'Channels', icon: FaUser },
    { id: 'games', label: 'Games', icon: FaGamepad }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for streams, channels, or games..."
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </form>

          <h1 className="text-2xl font-bold text-white mb-2">
            Search results for "{query}"
          </h1>
          <p className="text-gray-400">
            {searchResults.length} results found
          </p>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              {result.type === 'stream' && (
                <div className="relative">
                  <img
                    src={result.thumbnail}
                    alt={result.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                    {result.viewers?.toLocaleString()} viewers
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{result.title}</h3>
                    <p className="text-gray-400 text-sm">{result.streamer}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {result.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {result.type === 'channel' && (
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={result.avatar}
                      alt={result.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{result.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {result.followers?.toLocaleString()} followers
                      </p>
                      {result.isLive && (
                        <span className="text-red-500 text-sm">Live Now</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {result.game}
                    </span>
                  </div>
                </div>
              )}

              {result.type === 'video' && (
                <div>
                  <img
                    src={result.thumbnail}
                    alt={result.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{result.title}</h3>
                    <p className="text-gray-400 text-sm">{result.creator}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 text-sm">
                        {result.views?.toLocaleString()} views
                      </span>
                      <span className="text-gray-400 text-sm">{result.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 