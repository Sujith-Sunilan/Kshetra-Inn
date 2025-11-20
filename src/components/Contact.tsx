import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '9179944919933';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-lg p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">
                    Near Guruvayoor Temple<br />
                    Guruvayoor, Kerala
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-600 hover:text-green-700 font-medium hover:underline"
                  >
                    +91 7994491933
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:kalathiltouristhome46@gmail.com"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    kalathiltouristhome46@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                  <p className="text-gray-600">24/7 Reception & Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Stay
            </h3>

            <p className="text-gray-600 mb-6">
              Contact us directly via WhatsApp for instant booking confirmations and special rates.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  5 minutes from Guruvayoor Temple
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Clean and comfortable rooms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  24/7 customer service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Budget-friendly rates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
