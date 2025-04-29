'use client';

import { useSearchParams } from 'next/navigation';
import { FaGamepad, FaUsers, FaStar } from 'react-icons/fa';

// Mock search results data
const mockSearchResults = {
  games: [
    {
      id: 1,
      name: 'Valorant',
      viewers: 250000,
      thumbnail: '/placeholder-game.jpg',
    },
    {
      id: 2,
      name: 'League of Legends',
      viewers: 180000,
      thumbnail: '/placeholder-game.jpg',
    },
  ],
  channels: [
    {
      id: 1,
      name: 'ProGamer123',
      game: 'Valorant',
      viewers: 12500,
      thumbnail: '/placeholder-stream.jpg',
    },
    {
      id: 2,
      name: 'Ninja',
      game: 'Fortnite',
      viewers: 25000,
      thumbnail: '/placeholder-stream.jpg',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Shooter',
      viewers: 450000,
      thumbnail: '/placeholder-category.jpg',
    },
    {
      id: 2,
      name: 'MOBA',
      viewers: 380000,
      thumbnail: '/placeholder-category.jpg',
    },
  ],
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">
        Search results for: <span className="text-red-500">{query}</span>
      </h1>

      {/* Games Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <FaGamepad className="mr-2 text-red-500" />
          Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSearchResults.games.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold">{game.name}</h3>
                  <div className="flex items-center mt-2">
                    <FaUsers className="mr-2 text-red-500" />
                    <span>{game.viewers.toLocaleString()} viewers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Channels Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <FaUsers className="mr-2 text-red-500" />
          Channels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSearchResults.channels.map((channel) => (
            <div key={channel.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold">{channel.name}</h3>
                  <p className="text-sm text-gray-300">{channel.game}</p>
                  <div className="flex items-center mt-2">
                    <FaUsers className="mr-2 text-red-500" />
                    <span>{channel.viewers.toLocaleString()} viewers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <FaStar className="mr-2 text-red-500" />
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSearchResults.categories.map((category) => (
            <div key={category.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <div className="flex items-center mt-2">
                    <FaUsers className="mr-2 text-red-500" />
                    <span>{category.viewers.toLocaleString()} viewers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 