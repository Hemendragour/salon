import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import BackToTop from './components/ui/BackToTop';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import StickyMobileCTA from './components/ui/StickyMobileCTA';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import useSEO from './hooks/useSEO';

function Layout({ children }) {
  useSEO({
    title: 'Unique Creations Family Salon | Premium Beauty Salon in Bhopal',
    description:
      "Premium hair, skincare, bridal makeup, and grooming services in the heart of Bhopal. Rated 5.0★ by our happy clients.",
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop',
    url: 'https://uniquecreationssalon.com/',
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
      <StickyMobileCTA />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <HashRouter>
      <LoadingScreen visible={loading} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
   </HashRouter>
  );
}
