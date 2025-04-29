import { FaTrophy, FaUsers, FaCalendarAlt, FaGamepad } from 'react-icons/fa';

const tournaments = [
  {
    id: 1,
    name: 'Valorant Champions Tour',
    game: 'Valorant',
    prizePool: '$1,000,000',
    participants: 16,
    startDate: '2024-06-15',
    status: 'upcoming',
    thumbnail: '/placeholder-tournament.jpg',
  },
  {
    id: 2,
    name: 'League of Legends World Championship',
    game: 'League of Legends',
    prizePool: '$2,500,000',
    participants: 24,
    startDate: '2024-10-01',
    status: 'upcoming',
    thumbnail: '/placeholder-tournament.jpg',
  },
  {
    id: 3,
    name: 'CS:GO Major Championship',
    game: 'Counter-Strike 2',
    prizePool: '$1,500,000',
    participants: 24,
    startDate: '2024-08-15',
    status: 'upcoming',
    thumbnail: '/placeholder-tournament.jpg',
  },
];

const ongoingTournaments = [
  {
    id: 4,
    name: 'Fortnite World Cup',
    game: 'Fortnite',
    prizePool: '$3,000,000',
    participants: 100,
    currentRound: 'Finals',
    viewers: 250000,
    thumbnail: '/placeholder-tournament.jpg',
  },
  {
    id: 5,
    name: 'Apex Legends Global Series',
    game: 'Apex Legends',
    prizePool: '$1,000,000',
    participants: 40,
    currentRound: 'Semi-Finals',
    viewers: 150000,
    thumbnail: '/placeholder-tournament.jpg',
  },
];

export default function TournamentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Ongoing Tournaments */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaTrophy className="mr-2 text-yellow-500" />
          Ongoing Tournaments
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ongoingTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold">{tournament.name}</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center">
                      <FaGamepad className="mr-2 text-red-500" />
                      <span>{tournament.game}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-red-500" />
                      <span>{tournament.viewers.toLocaleString()} viewers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Prize Pool</p>
                    <p className="text-lg font-semibold">{tournament.prizePool}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Current Round</p>
                    <p className="text-lg font-semibold">{tournament.currentRound}</p>
                  </div>
                </div>
                <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Watch Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaCalendarAlt className="mr-2 text-red-500" />
          Upcoming Tournaments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold">{tournament.name}</h3>
                  <div className="flex items-center mt-2">
                    <FaGamepad className="mr-2 text-red-500" />
                    <span>{tournament.game}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Prize Pool</p>
                    <p className="text-lg font-semibold">{tournament.prizePool}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Participants</p>
                    <p className="text-lg font-semibold">{tournament.participants}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Starts {new Date(tournament.startDate).toLocaleDateString()}</span>
                </div>
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 