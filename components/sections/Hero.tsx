'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C28]/0 via-[#0A1C28]/0 to-[#0A1C28]/70" />
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1C28]/80 to-transparent" />
      </div>


      {/* Content */}
      <div className="relative z-10 h-full px-8">

      {/* max-w-5xl mx-auto text-center */}
        {/* <Header /> */}
        <div className="relative ml-8 mt-6">
        <Link href="/">
          <h1 className="text-[#DD5046] text-2xl mb-1 tracking-wide font-[family-name:var(--font-garamond)] font-bold">
            Robin Gottschalk
          </h1>
          <p className="text-white text-sm font-light tracking-wide font-[family-name:var(--font-workSans)]">
            Business Coach & Creative Consultant
          </p>
        </Link>
        </div>
        <div className="max-w-5xl mx-auto text-center mt">
          {/* Audience Tags */}
          <div className="flex items-center justify-center gap-2 flex-wrap my-10">
            <span className="text-white font-[family-name:var(--font-workSans)] text-lg font-medium">
              For
            </span>
            <button className="px-4 py-2 border-2 border-white text-white font-[family-name:var(--font-workSans)] text-lg font-medium hover:bg-white/10 transition-colors">
              founders
            </button>
            <span className="text-white font-[family-name:var(--font-workSans)] text-lg font-medium">
              ,
            </span>
            <button className="px-4 py-2 border-2 border-white text-white font-[family-name:var(--font-workSans)] text-lg font-medium hover:bg-white/10 transition-colors">
              creatives
            </button>
            <span className="text-white font-[family-name:var(--font-workSans)] text-lg font-medium">
              and
            </span>
            <button className="px-4 py-2 border-2 border-white text-white font-[family-name:var(--font-workSans)] text-lg font-medium hover:bg-white/10 transition-colors">
              businesses
            </button>
          </div>

          {/* Main Heading */}
          <h2 className="font-[family-name:var(--font-garamond)] text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-24 mb-6 font-normal tracking-wide">
            Create a purpose-driven
            <br />
            business that fulfills you.
          </h2>

          {/* Subheading */}
          <p className="text-[#9EC0D1] text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-light font-[family-name:var(--font-workSans)]">
            Together, we&apos;ll shape your strengths and passions into a sustainable path
            <br />
            that aligns with your values — so you can thrive, not compromise.
          </p>

          {/* CTA Button */}
          <Link
            href="/start-now"
            className="inline-block font-[family-name:var(--font-workSans)] bg-[#DD5046] text-white px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
          </div>


      </div>

      {/* Scroll Indicator (optional) */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}
