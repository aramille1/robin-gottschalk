'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E141B] text-white py-12 px-8">
      {/* Content Box */}
      <div className="relative z-10 mx-50 mb-8">
        <div className="border-2 border-[#9EC0D1] bg-[#9EC0D1]/10 backdrop-blur-sm p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Text Section */}
          <div className="w-3/4">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-[family-name:var(--font-garamond)] text-[#E5E5E5]">
              Jump out of the hamster wheel
            </h2>
            <p className="text-gray-300 text-sm font-[family-name:var(--font-workSans)]">
              Simple actionable steps for your personal growth delivered to you.
            </p>
          </div>

          {/* Form Section */}
          <form className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 text-gray-900 focus:outline-none bg-white font-[family-name:var(--font-workSans)]"
              required
            />
            <Link
            href="/start-now"
            className="bg-[#DD5046] font-[family-name:var(--font-workSans)] text-white px-5 lg:px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start change now
          </Link>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-[#DD5046] text-xl font-medium mb-2">
              Robin Gottschalk
            </h3>
            <p className="text-white/70 text-sm">
              Business Coach & Creative Consultant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-white/70 hover:text-white transition-colors">
                Programs
              </Link>
              <Link href="/start-now" className="text-white/70 hover:text-white transition-colors">
                Start Now
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <a href="mailto:contact@robingottschalk.com" className="hover:text-white transition-colors">
                contact@robingottschalk.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Robin Gottschalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
