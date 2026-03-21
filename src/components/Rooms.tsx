import { Home, Users, Building2, Calendar, Bed } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Standard AC Room',
    icon: Home,
    tariff: '₹2,500',
    features: ['Air Conditioned', 'Hot Water', 'Wi-Fi', 'TV'],
    description: 'Comfortable AC rooms with modern amenities for a relaxing stay',
  },
  {
    id: 2,
    name: 'Deluxe Room',
    icon: Building2,
    tariff: '₹3,100',
    features: ['Premium room', 'Wi-Fi', 'Hot Water', 'TV'],
    description: 'Experience luxury in our spacious deluxe rooms, equipped with modern amenities designed for a truly relaxing stay.',
  },
  {
    id: 3,
    name: 'Suite Room',
    icon: Users,
    tariff: '₹4,500',
    features: ['2 Air Conditioned', 'Sit out', 'Hot Water', 'TV'],
    description: 'Luxurious suite rooms with separate living space and premium facilities',
  },
  {
    id: 7,
    name: 'Family Room',
    icon: Users,
    tariff: '₹6,500',
    features: ['3 Air Conditioned', 'Sit out', 'Hot Water', 'TV'],
    description: 'Luxurious suites with separate living areas and premium facilities, including a master bedroom and a separate kids room both with attached bathrooms.',
  },
  {
    id: 4,
    name: 'Two Bed Suite',
    icon: Calendar,
    tariff: '₹5,500',
    features: ['Air Conditioned', '2 Queen Size Bed', 'Hot Water','TV'],
    description: 'Premium suite with single AC units, double queen size beds, and private bathrooms',
  },
  {
    id: 5,
    name: 'Auditorium',
    icon: Calendar,
    tariff: '₹75,000',
    features: ['Seating for 200', 'Air Conditioned', 'Sound System', 'Stage'],
    description: 'Well-equipped auditorium for events, functions, and gatherings',
  },
  {
    id: 6,
    name: 'Dormitory',
    icon: Bed,
    tariff: '₹7,500',
    features: ['Shared Space', 'Clean', 'Budget Friendly', 'Hot Water'],
    description: 'Budget-friendly dormitories for pilgrims and budget travelers',
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Rooms & Tariff
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of comfortable accommodations tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const Icon = room.icon;
            return (
              <div
                key={room.id}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100"
              >
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {room.name}
                      </h3>
                      <p className="text-amber-100 text-sm">Per Night</p>
                    </div>
                    <Icon className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gray-900">
                      {room.tariff}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  <div className="border-t border-amber-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {room.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() =>
                      window.open('https://wa.me/917994491933', '_blank')
                    }
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    Book Now via WhatsApp
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
