import { Phone } from 'lucide-react';

export default function Header() {
  const whatsappNumber = '9179944919933';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img
              src="/Logo.png"
              alt="Hotel Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Kalathil Kshetra Inn</h1>
              <p className="text-xs sm:text-sm text-gray-600">Guruvayoor</p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
