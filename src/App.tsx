/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Offset for sticky navbar
              behavior: 'smooth'
            });
          } else if (targetId === '') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        
        {/* Newsletter Section */}
        <section className="py-20 bg-linear-to-r from-gold-50 to-salon-pink">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-4">Join Our Exclusive Circle</h2>
              <p className="text-gray-600 mb-8 font-light">Subscribe to get special offers, beauty tips, and updates direct to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow px-8 py-4 bg-white rounded-full border border-gold-200 outline-hidden focus:ring-2 focus:ring-gold-400"
                />
                <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold-600 transition-all flex items-center justify-center gap-2">
                  Subscribe <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
