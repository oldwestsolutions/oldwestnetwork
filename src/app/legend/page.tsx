'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart, FaEye, FaUserFriends, FaGamepad, FaFilm, FaMusic, FaCar, FaCube, FaRunning, FaGlobe, FaBell, FaEnvelope, FaTrophy, FaChartLine, FaCrown } from 'react-icons/fa';

export default function Legend() {
  const [activeTab, setActiveTab] = useState('home');

  const stats = {
    followers: 1250,
    following: 850,
    totalViews: 25000,
    totalLikes: 1200,
    streams: 45,
    hoursWatched: 120
  };

  const friends = [
    { id: 1, name: "GamingPro", status: "Playing Baldur's Gate 3", isOnline: true },
    { id: 2, name: "TravelVibes", status: "Streaming IRL", isOnline: true },
    { id: 3, name: "SpeedRunner", status: "Playing Minecraft", isOnline: true },
    { id: 4, name: "MusicMaster", status: "Offline", isOnline: false },
    { id: 5, name: "MovieBuff", status: "Watching Movies", isOnline: true },
  ];

  const recentMessages = [
    { id: 1, sender: "GamingPro", message: "Hey, want to play some games later?", time: "2m ago", unread: true },
    { id: 2, sender: "TravelVibes", message: "Check out my new stream!", time: "15m ago", unread: true },
    { id: 3, sender: "SpeedRunner", message: "New PB achieved!", time: "1h ago", unread: false },
  ];

  const recentLikes = [
    { id: 1, user: "GamingPro", action: "liked your stream", time: "5m ago" },
    { id: 2, user: "TravelVibes", action: "followed you", time: "1h ago" },
    { id: 3, user: "SpeedRunner", action: "commented on your stream", time: "2h ago" },
  ];

  const topGames = [
    { id: 1, name: "Baldur's Gate 3", viewers: 12500, thumbnail: "https://via.placeholder.com/150" },
    { id: 2, name: "Minecraft", viewers: 8500, thumbnail: "https://via.placeholder.com/150" },
    { id: 3, name: "Valorant", viewers: 7500, thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                  L
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Legend</h3>
                  <p className="text-gray-400">@legendarygamer</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.followers}</p>
                  <p className="text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.following}</p>
                  <p className="text-gray-400">Following</p>
                </div>
              </div>
            </div>

            {/* Friends List */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Friends</h3>
              <div className="space-y-3">
                {friends.map((friend) => (
                  <div key={friend.id} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      {friend.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{friend.name}</p>
                      <p className="text-sm text-gray-400">{friend.status}</p>
                    </div>
                    {friend.isOnline && (
                      <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Your Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <FaEye className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stats.totalViews}</p>
                  <p className="text-gray-400">Total Views</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <FaHeart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stats.totalLikes}</p>
                  <p className="text-gray-400">Total Likes</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <FaTrophy className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stats.streams}</p>
                  <p className="text-gray-400">Streams</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentLikes.map((like) => (
                  <div key={like.id} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      {like.user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{like.user}</p>
                      <p className="text-sm text-gray-400">{like.action}</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-400">{like.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Messages */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Messages</h3>
              <div className="space-y-3">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      {msg.sender.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{msg.sender}</p>
                      <p className="text-sm text-gray-400 truncate">{msg.message}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{msg.time}</p>
                      {msg.unread && (
                        <div className="w-2 h-2 bg-red-500 rounded-full ml-auto"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Games */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Top Games</h3>
              <div className="space-y-4">
                {topGames.map((game) => (
                  <div key={game.id} className="flex items-center space-x-3">
                    <img src={game.thumbnail} alt={game.name} className="h-12 w-12 rounded" />
                    <div>
                      <p className="font-medium">{game.name}</p>
                      <p className="text-sm text-gray-400">{game.viewers.toLocaleString()} viewers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 