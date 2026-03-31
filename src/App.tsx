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
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ink/20 selection:text-ink flex flex-col lg:flex-row">
      <Navbar />
      <main className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Hero />
          <div className="py-20" />
          <About />
          <div className="py-20" />
          <Timeline />
          <div className="py-20" />
          <Achievements />
          <div className="py-20" />
          <Assignments />
          <div className="py-20" />
          <Skills />
          <div className="py-20" />
          <Testimonials />
          <div className="py-20" />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
