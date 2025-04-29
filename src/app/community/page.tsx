import { FaUser, FaUsers, FaTrophy, FaComment } from 'react-icons/fa';

const featuredUsers = [
  {
    id: 1,
    name: 'ProGamer123',
    followers: 125000,
    games: ['Valorant', 'CS:GO', 'Apex Legends'],
    isLive: true,
    avatar: '/placeholder-avatar.jpg',
  },
  {
    id: 2,
    name: 'Ninja',
    followers: 2500000,
    games: ['Fortnite', 'Valorant', 'Call of Duty'],
    isLive: true,
    avatar: '/placeholder-avatar.jpg',
  },
  {
    id: 3,
    name: 'Shroud',
    followers: 1800000,
    games: ['Valorant', 'PUBG', 'Apex Legends'],
    isLive: false,
    avatar: '/placeholder-avatar.jpg',
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'ProGamer123',
    action: 'started streaming',
    game: 'Valorant',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Ninja',
    action: 'reached',
    achievement: '100,000 followers',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Shroud',
    action: 'won a tournament',
    game: 'Valorant',
    time: '1 day ago',
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Streamers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaUser className="mr-2 text-red-500" />
          Featured Streamers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700" />
                  <div>
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <div className="flex items-center mt-1">
                      <FaUsers className="mr-2 text-red-500" />
                      <span>{user.followers.toLocaleString()} followers</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400">Popular Games</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.games.map((game) => (
                      <span
                        key={game}
                        className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  {user.isLive ? 'Watch Live' : 'Follow'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaComment className="mr-2 text-red-500" />
          Recent Activity
        </h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="p-4 border-b border-gray-700 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div>
                    <p className="font-semibold">{activity.user}</p>
                    <p className="text-sm text-gray-400">
                      {activity.action}{' '}
                      {activity.game && (
                        <span className="text-red-500">{activity.game}</span>
                      )}
                      {activity.achievement && (
                        <span className="text-yellow-500">
                          {activity.achievement}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 