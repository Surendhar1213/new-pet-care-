import React, { useEffect } from 'react';
import CursorFollower from './components/CursorFollower';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import WhyChooseUs from './components/WhyChooseUs';
import Video from './components/Video';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { initTemplateScripts } from './utils/initScripts';

function App() {
  useEffect(() => {
    // Add home-7 class to body
    document.body.className = 'home-7';
    
    // Remove inspector blocking code
    window.addEventListener('contextmenu', (e) => {
      // Allow right-click
    }, false);
    
    // Initialize template scripts after DOM is ready
    if (document.readyState === 'complete') {
      initTemplateScripts();
    } else {
      window.addEventListener('load', () => {
        initTemplateScripts();
      });
    }

    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <CursorFollower />
      <Header />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Gallery />
      <Testimonial />
      <WhyChooseUs />
      <Video />
      <Contact />
      {/* <Blog /> */}
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;

