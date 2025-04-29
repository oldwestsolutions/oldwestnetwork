'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGamepad, FaUsers, FaStar, FaHeart, FaTv, FaCar, FaCube, FaRunning, FaMusic, FaUserFriends, FaFilm, FaBell, FaCrown } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';

export default function Legend() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/avatar/200/200"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, Legend!</h1>
              <p className="text-gray-400">Check out what's new in your favorite categories</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              <FaBell className="text-red-500" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
              <FaCrown className="text-yellow-400" />
              <span>Go Live</span>
            </button>
          </div>
        </div>
      </div>

      {/* Followed Channels */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FaHeart className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-bold text-white">Followed Channels</h2>
          </div>
          <Link href="/channels" className="text-red-500 hover:text-red-400">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <div className="relative h-32">
                <Image
                  src={`https://picsum.photos/seed/followed${i}/300/300`}
                  alt={`Followed Channel ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  LIVE
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-white text-sm font-medium truncate">Channel Name {i}</h3>
                <p className="text-gray-400 text-xs">1.2K viewers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended For You */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FaStar className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
          </div>
          <Link href="/recommended" className="text-red-500 hover:text-red-400">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`https://picsum.photos/seed/recommended${i}/800/450`}
                  alt={`Recommended Stream ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  LIVE
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/avatar${i}/100/100`}
                      alt={`Streamer ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Stream Title {i}</h3>
                    <p className="text-gray-400 text-sm">Streamer Name {i}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-gray-400 text-sm">
                  <span>Game Name</span>
                  <span className="mx-2">•</span>
                  <span>1.2K viewers</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FaUsers className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
          </div>
          <Link href="/activity" className="text-red-500 hover:text-red-400">
            View All
          </Link>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/activity${i}/100/100`}
                    alt={`Activity ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white">
                    <span className="font-medium">Streamer Name {i}</span> started streaming <span className="text-red-500">Game Name {i}</span>
                  </p>
                  <p className="text-gray-400 text-sm">2 hours ago</p>
                </div>
                <button className="text-red-500 hover:text-red-400">
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 