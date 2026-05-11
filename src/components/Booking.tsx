/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, Calendar, User, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { services } from '../servicesData';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-salon-pink/40 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-12 bg-linear-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-6">Book Your Appointment</h2>
              <p className="text-gray-400 mb-10 font-light leading-relaxed">
                Take the first step towards your beauty transformation. Fill out the form, and our coordinator will contact you to confirm the time.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gold-400">
                    <Phone size={18} />
                  </div>
                  <span>03019188819</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gold-400">
                    <Calendar size={18} />
                  </div>
                  <span>Mon - Sun: 10AM - 9PM</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl">
              <p className="text-sm text-gold-400 uppercase tracking-widest font-bold mb-2">Notice</p>
              <p className="text-xs text-gray-400">Please book at least 24 hours in advance for bridal services.</p>
            </div>
          </div>

          <div className="lg:w-2/3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="E.g. Jane Doe"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  <input
                    type="tel"
                    placeholder="03xx xxxxxxx"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Select Service</label>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-gray-400 pointer-events-none">
                    <Sparkles size={18} />
                  </div>
                  <select
                    className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all appearance-none"
                  >
                    <option value="">Choose a specialized service</option>
                    {services.map(cat => (
                      <optgroup key={cat.title} label={cat.title}>
                        {cat.items.map(item => (
                          <option key={item.name} value={item.name}>{item.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Preferred Date & Time</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  <input
                    type="datetime-local"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Special Requirements</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  <textarea
                    placeholder="Let us know if you have any allergies or specific requests..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-hidden transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 w-full py-4 bg-gold-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-gold-600 transition-all shadow-xl shadow-gold-500/20 mt-4"
              >
                Send Booking Request
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
