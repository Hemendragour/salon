import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Offers from '../components/sections/Offers';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Offers />
      <Contact />
    </>
  );
}
