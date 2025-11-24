"use client";

import Image from "next/image";
import Link from "next/link";

export default function EmailSignup() {
  return (
    // ✨ CHANGE: Changed 'items-center' to 'items-end' to align content to the bottom
    <section className="relative w-full h-[60vh] flex items-end justify-center">
      {/* Background image */}
      <Image
        src="/sunset.png" // replace with your image path
        alt="People by campfire at sunset"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1C28]/40"></div>

      {/* Content Box */}
      <div className="relative z-10 w-full mx-50 mb-[200px]">
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
    </section>
  );
}
