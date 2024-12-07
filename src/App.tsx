import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CEO } from './components/CEO';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <CEO />
      <Projects />
      <Reviews /> {/* Add Reviews Section Here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
