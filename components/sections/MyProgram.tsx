"use client";

import Image from "next/image";
import Link from "next/link";

export default function MyProgram() {
  return (
    <section id="myprogram" className="bg-[#0A1C28] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-left">
            <span className="text-gray-400 text-lg font-light font-[family-name:var(--font-workSans)]">My programs</span>
            <div className="w-28 h-0.5 bg-[#DD5046] mt-2"></div>
          </div>
        <h2 className="text-4xl font-[family-name:var(--font-garamond)] mb-12">
          Let’s find and build what’s truly meant for you
        </h2>

        <div className="grid md:grid-cols-2">
          {/* ALIGN CARD */}
          <div className="text-gray-900 overflow-hidden shadow-lg flex flex-col mx-6 mb-12 lg:mx-14 ">
            <div className="relative h-78">
              <Image
                src="/align.png" // replace with your image path
                alt="Align program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
                <h3 className="text-5xl font-bold font-[family-name:var(--font-garamond)]">ALIGN</h3>
                <p className="text-[#9EC0D1] text-lg font-[family-name:var(--font-garamond)]">From confusion to clarity.</p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow bg-white">
              <h4 className="font-bold text-lg mb-3 font-[family-name:var(--font-garamond)]">Do you…</h4>
              <ul className="space-y-2 text-sm text-[#5B676F] mb-4 font-[family-name:var(--font-workSans)] italic">
                <li>• Feel the urge to build something but don’t know what?</li>
                <li>• Have too many ideas and can’t decide which one to pursue?</li>
                <li>• Feel lost, but know deep down you’re meant to create something of your own?</li>
              </ul>

              <p className="text-sm text-gray-800 mb-4 font-[family-name:var(--font-garamond)]">
                <strong className="text-lg">This program starts with YOU.</strong><br />
                Together, we’ll explore your strengths, personality, and passions — and connect them with real market needs to uncover your business idea. The one that feels right, makes sense, and excites you to bring it to life.
              </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
            href="/start-now"
            className="bg-[#DD5046] text-white px-5 lg:px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
              </div>
            </div>
          </div>

          {/* BUILD CARD */}
          <div className="bg-white text-gray-900 overflow-hidden shadow-lg flex flex-col mx-6 mb-12 lg:mx-14">
            <div className="relative h-78">
              <Image
                src="/build.png" // replace with your image path
                alt="Build program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
                <h3 className="text-5xl font-bold font-[family-name:var(--font-garamond)]">BUILD</h3>
                <p className="text-[#9EC0D1] text-lg font-[family-name:var(--font-garamond)]">From idea to impact.</p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="font-bold text-lg mb-3 font-[family-name:var(--font-garamond)]">Do you…</h4>
              <ul className="space-y-2 text-sm text-[#5B676F] mb-4 font-[family-name:var(--font-workSans)] italic">
                <li>• Have your business idea but don’t know how to bring it to life?</li>
                <li>• Feel overwhelmed by what to do next — or lack a clear structure?</li>
                <li>• Work hard but see little progress, results, or revenue?</li>
              </ul>

              <p className="text-sm text-gray-800 mb-4 font-[family-name:var(--font-garamond)]">
                <strong className="text-lg">In this program, we’ll transform your idea into a solid, profitable business.</strong><br />
                We’ll go through every key milestone — from branding and concept development to marketing and sales — so you can move forward with clarity, confidence, and momentum.
              </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
            href="/start-now"
            className="bg-[#DD5046] text-white px-5 lg:px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
            </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
