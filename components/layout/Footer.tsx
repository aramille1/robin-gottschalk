'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d161e] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
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
