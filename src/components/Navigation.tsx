'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaGamepad, FaUsers, FaTrophy, FaCog } from 'react-icons/fa';

const navigationItems = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'Browse', href: '/browse', icon: FaGamepad },
  { name: 'Community', href: '/community', icon: FaUsers },
  { name: 'Tournaments', href: '/tournaments', icon: FaTrophy },
  { name: 'Settings', href: '/settings', icon: FaCog },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 border-r border-gray-800 w-64 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
} 