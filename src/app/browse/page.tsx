import { FaGamepad, FaUsers, FaStar } from 'react-icons/fa';

const categories = [
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
  {
    id: 3,
    name: 'Battle Royale',
    viewers: 320000,
    thumbnail: '/placeholder-category.jpg',
  },
  {
    id: 4,
    name: 'RPG',
    viewers: 280000,
    thumbnail: '/placeholder-category.jpg',
  },
];

const liveStreams = [
  {
    id: 1,
    title: 'Valorant Ranked Grind',
    streamer: 'ProGamer123',
    game: 'Valorant',
    viewers: 12500,
    thumbnail: '/placeholder-stream.jpg',
  },
  {
    id: 2,
    title: 'League of Legends World Championship',
    streamer: 'EsportsOfficial',
    game: 'League of Legends',
    viewers: 8500,
    thumbnail: '/placeholder-stream.jpg',
  },
  {
    id: 3,
    title: 'Fortnite Tournament',
    streamer: 'Ninja',
    game: 'Fortnite',
    viewers: 25000,
    thumbnail: '/placeholder-stream.jpg',
  },
];

export default function BrowsePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaGamepad className="mr-2 text-red-500" />
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer"
            >
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

      {/* Live Streams Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaStar className="mr-2 text-yellow-500" />
          Live Streams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer"
            >
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gray-900" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-lg font-semibold">{stream.title}</h3>
                  <p className="text-sm text-gray-300">{stream.streamer}</p>
                  <p className="text-sm text-gray-400">{stream.game}</p>
                  <div className="flex items-center mt-2">
                    <FaUsers className="mr-2 text-red-500" />
                    <span>{stream.viewers.toLocaleString()} viewers</span>
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