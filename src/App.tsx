/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Assignments from './components/Assignments';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ink/20 selection:text-ink flex flex-col lg:flex-row bg-white">
      <Navbar />
      <main className="flex-1 lg:ml-64">
        <div id="home" className="bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Hero />
          </div>
        </div>
        
        <div id="about" className="bg-paper py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <About />
          </div>
        </div>

        <div id="experience" className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Timeline />
          </div>
        </div>

        <div id="achievements" className="bg-paper py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Achievements />
          </div>
        </div>

        <div id="assignments" className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Assignments />
          </div>
        </div>

        <div id="skills" className="bg-paper py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Skills />
          </div>
        </div>

        <div id="contact" className="bg-paper py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Contact />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
