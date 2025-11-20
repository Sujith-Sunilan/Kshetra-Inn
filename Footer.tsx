import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Logo.png"
                alt="K Hotels Logo"
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-bold">Kalathil Kshetra Inn Hotels</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your comfortable stay near Guruvayoor Temple. Experience traditional hospitality with modern amenities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <p className="text-gray-400">
                  Near Guruvayoor Temple<br />
                  Guruvayoor, Kerala
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <a
                  href="https://wa.me/917994491933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 7994491933
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:kalathiltouristhome46@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  kalathiltouristhome46@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors">
                  Rooms & Tariff
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917994491933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} K Hotels, Guruvayoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
