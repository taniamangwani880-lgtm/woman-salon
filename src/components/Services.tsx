/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { services } from '../servicesData';
import { Scissors, Palette, Sparkles, Flower2, Hand, Gem, Waves, Brush } from 'lucide-react';

const iconMap: Record<string, any> = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  "flower-2": Flower2,
  hand: Hand,
  gem: Gem,
  waves: Waves,
  brush: Brush,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-salon-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-sm">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">Luxurious Treatments</h2>
            <div className="w-24 h-[2px] bg-gold-400 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xs hover:shadow-xl transition-all h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-salon-pink rounded-2xl flex items-center justify-center text-gold-500">
                  {category.icon in iconMap ? 
                    (() => {
                      const IconComp = iconMap[category.icon];
                      return <IconComp size={24} />;
                    })() : null
                  }
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-start text-sm group">
                    <span className="text-gray-600 group-hover:text-gold-600 transition-colors">{item.name}</span>
                    <div className="flex-grow mx-2 border-b border-dotted border-gray-300 mt-3 group-hover:border-gold-300 transition-colors" />
                    {/* Prices are optional, if we had them they'd go here. Using a fixed style for now */}
                    <span className="text-gold-500 font-medium whitespace-nowrap">Call for Price</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 italic mb-8">
            * All prices may vary based on hair length, volume, and specific requirements. 
            Free consultations available.
          </p>
          <a
            href="#booking"
            className="inline-block px-12 py-4 bg-gray-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold-600 transition-all shadow-xl"
          >
            Download Price List
          </a>
        </motion.div>
      </div>
    </section>
  );
}
