import { Check } from "lucide-react";
import Link from 'next/link';

export default function Programs() {
  const benefits = [
    "You feel stuck in a job that no longer gives you meaning or joy?",
    "You are dreaming of starting your own business — with more freedom over how, when, and where you work?",
    "You have plenty of ideas (or none at all) and don't know where to begin?",
    "You want to create something that truly reflects your values, preferences, and personality?",
    "You are looking for a path that keeps you inspired and committed long-term — not just another short-lived project?"
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Forest image */}
      <div className="lg:w-2/5 relative min-h-[50vh] lg:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-600/20">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/programs.png')`}}
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="lg:w-3/5 bg-gray-50 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-2xl w-full">
          <h2 className="font-[family-name:var(--font-garamond)] text-center text-4xl lg:text-5xl font-light text-gray-900 mb-12 leading-tight center">
            This program could be a great fit for you if...
          </h2>

          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-red-500 stroke-[3]" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-[family-name:var(--font-work-sans)]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <p className="text-gray-800 text-lg leading-relaxed font-medium font-[family-name:var(--font-work-sans">
              `Together, we'll explore and shape the business that's truly meant for
              you — built from your personality, strengths, and values, from A to Z.`
            </p>
          </div>

          {/* CTA Button */}
            <div className="flex justify-center">
            <Link
            href="/start-now"
            className="bg-[#DD5046] text-white px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
