/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Bride",
    text: "Amazing bridal makeup and excellent service! Tania and her team made my special day even more perfect. Highly recommend!",
    rating: 5
  },
  {
    name: "Sana Malik",
    role: "Regular Client",
    text: "Best salon experience with professional staff. The environment is so relaxing and clean. Their hair spa is a must-try!",
    rating: 5
  },
  {
    name: "Maria Qureshi",
    role: "Happy Customer",
    text: "My hair treatment results were outstanding. I've tried many salons but the precision and care here are unmatched.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-salon-pink/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-sm">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xs relative"
            >
              <div className="flex text-gold-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-loose text-lg">"{t.text}"</p>
              <div>
                <p className="font-serif font-bold text-gray-900 text-xl">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
              <div className="absolute top-10 right-10 text-salon-pink">
                <Quote size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
