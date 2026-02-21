import { MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/Logo.png"
              alt="Kalathil Kshetra Inn Logo"
              className="h-32 w-32 object-contain"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Kalathil Kshetra Inn
          </h1>

          <div className="flex items-center justify-center space-x-2 text-amber-700 mb-6">
            <MapPin className="w-5 h-5" />
            <p className="text-lg sm:text-xl">
              Near Guruvayoor Temple, Guruvayoor
            </p>
          </div>

          <div className="flex justify-center items-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience comfort and convenience at Kalathil Kshetra Inn, your perfect stay near the sacred Guruvayoor Temple.
            We offer premium accommodation with modern amenities and traditional hospitality.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-3xl font-bold text-amber-600 mb-1">28</p>
              <p className="text-sm text-gray-600">Rooms</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-3xl font-bold text-amber-600 mb-1">24/7</p>
              <p className="text-sm text-gray-600">Service</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-3xl font-bold text-amber-600 mb-1">5 Min</p>
              <p className="text-sm text-gray-600">To Temple</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-3xl font-bold text-amber-600 mb-1">100%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
