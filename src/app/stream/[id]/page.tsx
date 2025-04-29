import { FaHeart, FaShare, FaUserFriends } from 'react-icons/fa';

interface StreamPageProps {
  params: {
    id: string;
  };
}

export default function StreamPage({ params }: StreamPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Stream Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              {/* Video Player Placeholder */}
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <p className="text-xl">Stream Starting Soon...</p>
                </div>
              </div>
            </div>
            
            {/* Stream Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700" />
                  <div>
                    <h2 className="text-xl font-bold">ProGamer123's Stream</h2>
                    <p className="text-gray-400">Playing Valorant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                    <FaHeart />
                    <span>12.5K</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                    <FaShare />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <FaUserFriends className="mr-2" />
                  <span>12,500 viewers</span>
                </div>
                <span>•</span>
                <span>Started 2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg h-[600px] flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold">Stream Chat</h3>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                  <div>
                    <p className="font-semibold">User{i}</p>
                    <p className="text-gray-400">Great stream! Keep it up! 🎮</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 