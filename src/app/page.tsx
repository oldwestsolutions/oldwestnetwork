'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGamepad, FaUsers, FaStar, FaHeart, FaTv, FaCar, FaCube, FaRunning, FaMusic, FaUserFriends, FaFilm } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';

// Mock data for featured streams
const featuredStreams = [
  {
    id: 1,
    title: 'IRL Adventure: Exploring Tokyo',
    streamer: 'TravelWithMe',
    game: 'IRL',
    viewers: 12500,
    thumbnail: 'https://picsum.photos/seed/irlfeatured/800/450',
    tags: ['IRL', 'Travel', 'English'],
  },
  {
    id: 2,
    title: 'Baldur\'s Gate 3 - Full Playthrough',
    streamer: 'RPGMaster',
    game: 'RPG',
    viewers: 8500,
    thumbnail: 'https://picsum.photos/seed/rpgfeatured/800/450',
    tags: ['RPG', 'Adventure', 'English'],
  },
];

const followedChannels = [
  {
    id: 1,
    name: 'ProGamer123',
    game: 'Valorant',
    viewers: 12500,
    thumbnail: 'https://picsum.photos/seed/progamer/400/225',
    isLive: true,
  },
  {
    id: 2,
    name: 'Ninja',
    game: 'Fortnite',
    viewers: 25000,
    thumbnail: 'https://picsum.photos/seed/ninja/400/225',
    isLive: true,
  },
  {
    id: 3,
    name: 'Shroud',
    game: 'Valorant',
    viewers: 35000,
    thumbnail: 'https://picsum.photos/seed/shroud/400/225',
    isLive: true,
  },
  {
    id: 4,
    name: 'Pokimane',
    game: 'Just Chatting',
    viewers: 28000,
    thumbnail: 'https://picsum.photos/seed/pokimane/400/225',
    isLive: true,
  },
];

const recommendedStreams = [
  {
    id: 1,
    title: 'Ranked Grind to Radiant',
    streamer: 'ProGamer123',
    game: 'Valorant',
    viewers: 12500,
    thumbnail: 'https://picsum.photos/seed/valorant2/400/225',
  },
  {
    id: 2,
    title: 'Fortnite Tournament Practice',
    streamer: 'Ninja',
    game: 'Fortnite',
    viewers: 25000,
    thumbnail: 'https://picsum.photos/seed/fortnite/400/225',
  },
  {
    id: 3,
    title: 'CS2 Major Qualifiers',
    streamer: 'Shroud',
    game: 'Counter-Strike 2',
    viewers: 35000,
    thumbnail: 'https://picsum.photos/seed/cs2/400/225',
  },
  {
    id: 4,
    title: 'Chill Stream & Chat',
    streamer: 'Pokimane',
    game: 'Just Chatting',
    viewers: 28000,
    thumbnail: 'https://picsum.photos/seed/chatting/400/225',
  },
];

const popularCategories = [
  {
    id: 1,
    name: 'Just Chatting',
    viewers: 450000,
    thumbnail: 'https://picsum.photos/seed/chat/400/225',
  },
  {
    id: 2,
    name: 'Valorant',
    viewers: 380000,
    thumbnail: 'https://picsum.photos/seed/valorant3/400/225',
  },
  {
    id: 3,
    name: 'League of Legends',
    viewers: 320000,
    thumbnail: 'https://picsum.photos/seed/lol2/400/225',
  },
  {
    id: 4,
    name: 'Fortnite',
    viewers: 280000,
    thumbnail: 'https://picsum.photos/seed/fortnite2/400/225',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Featured Streams Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredStreams.map((stream) => (
            <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={stream.thumbnail}
                  alt={stream.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  LIVE
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/avatar${stream.id}/100/100`}
                      alt={stream.streamer}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{stream.title}</h3>
                    <p className="text-gray-400 text-sm">{stream.streamer}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-gray-400 text-sm">
                  <span>{stream.game}</span>
                  <span className="mx-2">•</span>
                  <span>{stream.viewers.toLocaleString()} viewers</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stream.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Games Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaGamepad className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Games</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/game${i}/300/300`}
                  alt={`Game ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Game Title {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movies Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaFilm className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Movies</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/movie${i}/300/300`}
                  alt={`Movie ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Movie Title {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Music Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaMusic className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Music</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/music${i}/300/300`}
                  alt={`Music Stream ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Music Stream {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shows Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaTv className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Shows</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/show${i}/300/300`}
                  alt={`Show ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Show Title {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Racing Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaCar className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Racing</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/racing${i}/300/300`}
                  alt={`Racing ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Racing Title {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roblox Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <SiRoblox className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Roblox</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/roblox${i}/300/300`}
                  alt={`Roblox ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Roblox Game {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minecraft Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaCube className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Minecraft</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/minecraft${i}/300/300`}
                  alt={`Minecraft ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Minecraft Server {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaRunning className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Sports</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/sports${i}/300/300`}
                  alt={`Sports ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Sports Game {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IRL Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <FaUserFriends className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white">IRL</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/irl${i}/300/300`}
                  alt={`IRL Stream ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">IRL Stream {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
