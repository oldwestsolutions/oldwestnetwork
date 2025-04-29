'use client';

import { useState } from 'react';
import { FaUser, FaLock, FaBell, FaGlobe, FaPalette } from 'react-icons/fa';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'appearance', label: 'Appearance', icon: FaPalette },
    { id: 'language', label: 'Language', icon: FaGlobe },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">Account Settings</h1>
            <p className="text-gray-400 mt-1">Manage your account preferences and settings</p>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-700">
              <nav className="p-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows={4}
                        placeholder="Tell us about yourself"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Profile Picture
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                          <FaUser className="text-gray-400 text-2xl" />
                        </div>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                          Upload New
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Security Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter current password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Update Password
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Notification Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">Email Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive email notifications about your account</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">Push Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive push notifications on your devices</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Appearance Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-medium mb-2">Theme</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <button className="p-4 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
                          Light
                        </button>
                        <button className="p-4 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
                          Dark
                        </button>
                        <button className="p-4 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
                          System
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'language' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Language Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Language
                      </label>
                      <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 