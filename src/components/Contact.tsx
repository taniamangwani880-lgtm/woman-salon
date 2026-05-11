/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { 
      icon: <Phone className="text-gold-500" />, 
      label: "Call Us", 
      value: "03019188819",
      action: "tel:03019188819",
      btnText: "Call Now"
    },
    { 
      icon: <Mail className="text-gold-500" />, 
      label: "Email Us", 
      value: "Taniamangwani880@gmail.com",
      action: "mailto:Taniamangwani880@gmail.com",
      btnText: "Send Email"
    },
    { 
      icon: <MessageCircle className="text-gold-500" />, 
      label: "WhatsApp", 
      value: "Book via Chat",
      action: "https://wa.me/923019188819",
      btnText: "Chat Now"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-salon-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">Contact Tania</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We are here to help you look your best. Reach out to us for any queries or customized beauty packages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-xs hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-salon-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{item.label}</h4>
              <p className="text-xl font-serif text-gray-900 mb-8 break-all">{item.value}</p>
              <a
                href={item.action}
                target={item.action.startsWith('http') ? "_blank" : "_self"}
                rel={item.action.startsWith('http') ? "noopener noreferrer" : ""}
                className="inline-block w-full py-3 border border-gold-300 text-gold-600 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
              >
                {item.btnText}
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Simple Contact Form Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-10 rounded-[2rem] shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif">Quick Message</h3>
              <p className="text-gray-500">Expect a response within 2-4 hours during business hours.</p>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="text-gold-500" />
                <span>Karachi, Pakistan (Visit us for a consultation)</span>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-6 py-3 bg-salon-pink/30 rounded-xl outline-hidden focus:ring-2 focus:ring-gold-400"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-3 bg-salon-pink/30 rounded-xl outline-hidden focus:ring-2 focus:ring-gold-400"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-6 py-3 bg-salon-pink/30 rounded-xl outline-hidden focus:ring-2 focus:ring-gold-400 resize-none"
              ></textarea>
              <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-gold-600 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
