/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold gold-text tracking-wider">TANIA</span>
              <span className="text-xs uppercase tracking-[0.3em] font-light text-gray-500">Women's Salon</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Your destination for beauty, hair, makeup, and relaxation. Providing premium services with expert care since established.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center">
              Quick Links
              <span className="w-8 h-[1px] bg-gold-500 ml-4"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Booking'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center">
              Services
              <span className="w-8 h-[1px] bg-gold-500 ml-4"></span>
            </h4>
            <ul className="space-y-4">
              {['Hair Styling', 'Bridal Makeup', 'Skin Care', 'Keratin Treatment', 'Manicure & Pedicure'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center">
              Our Location
              <span className="w-8 h-[1px] bg-gold-500 ml-4"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-1">
                <span className="text-gold-500 uppercase text-xs font-bold tracking-widest">Phone</span>
                <a href="tel:03019188819" className="text-gray-400">03019188819</a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-gold-500 uppercase text-xs font-bold tracking-widest">Email</span>
                <a href="mailto:Taniamangwani880@gmail.com" className="text-gray-400">Taniamangwani880@gmail.com</a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-gold-500 uppercase text-xs font-bold tracking-widest">Follow Us</span>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">IG</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">FB</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">WA</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Tania Women’s Salon. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
