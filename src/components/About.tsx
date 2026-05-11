/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Award className="text-gold-500" />, title: "Expert Beauticians", desc: "Our team consists of certified professionals with years of experience." },
    { icon: <Sparkles className="text-gold-500" />, title: "Premium Products", desc: "We use only high-end, skin-friendly products for all our treatments." },
    { icon: <Heart className="text-gold-500" />, title: "Personalized Care", desc: "Every service is tailored to your unique beauty needs and preferences." },
    { icon: <Users className="text-gold-500" />, title: "Customer Focused", desc: "Your satisfaction and comfort are our highest priorities." },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" 
                alt="Salon Experience" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-salon-pink rounded-full -z-0 blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-100 rounded-full -z-0 blur-3xl opacity-50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-sm flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-gold-500"></span>
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              A Legacy of <br />
              <span className="gold-text">Excellence & Grace</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
              Tania Women's Salon was founded with a simple vision: to create a sanctuary where every woman feels celebrated and empowered through her own unique beauty. We believe that professional grooming is more than just a service—it's an act of self-love and confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
