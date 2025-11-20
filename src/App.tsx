import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
