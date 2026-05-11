/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with multiple layers for a luxury feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
          alt="Salon Interior"
          className="w-full h-full object-cover brightness-75 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-salon-pink/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.4em] uppercase text-gold-200 border border-gold-200/30 rounded-full backdrop-blur-sm">
            Experience Luxury
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Enhancing Your <br />
            <span className="italic gold-text">Natural Beauty</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to Tania Women’s Salon. Your destination for premium beauty, hair, makeup, and relaxation in a professional environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="px-10 py-4 bg-gold-500 text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-gold-500/40 hover:bg-gold-600 transition-all"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-linear-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
