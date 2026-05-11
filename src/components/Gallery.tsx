/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop", title: "Hair Styling" },
  { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop", title: "Bridal Makeup" },
  { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop", title: "Nail Art" },
  { url: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1976&auto=format&fit=crop", title: "Skin Care" },
  { url: "https://images.unsplash.com/photo-1544467328-3a91aa99c561?q=80&w=1974&auto=format&fit=crop", title: "Mehandi Art" },
  { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop", title: "Salon Ambience" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">Gallery of Beauty</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">Explore some of our recent transformations and the premium environment where we craft them.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group h-80 overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white font-serif text-2xl">{img.title}</h4>
                <p className="text-gold-200 text-sm uppercase tracking-widest mt-2">View Project</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
