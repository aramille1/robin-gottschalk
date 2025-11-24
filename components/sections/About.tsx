
import { Leaf, BarChart3, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#0A1C28]  py-16 px-8 lg:px-30 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
        <div className="mb-6">
            <span className="text-gray-400 text-lg font-light font-[family-name:var(--font-workSans)]">About</span>
            <div className="w-24 h-0.5 bg-[#DD5046] mt-2"></div>
          </div>
          <h1 className="text-white text-4xl leading-tight font-[family-name:var(--font-garamond)]">
            Ready to create meaningful change?
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 1:1 Coaching & Consulting */}
          <div className="border-2 border-[#9EC0D1] p-8 bg-[#9EC0D1]/10 backdrop-blur-sm">
            <div className="mb-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="w-10 h-10 text-[#DD5046]" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4 font-[family-name:var(--font-mond)]">
                1:1 Coaching & Consulting
              </h3>
              <p className="text-[#9EC0D1]/70 leading-relaxed text-center font-[family-name:var(--font-workSans)]">
                Tailored guidance designed around your strengths, goals, and needs.
              </p>
            </div>
          </div>

          {/* Card 2: Step-by-Step Guidance */}
          <div className="border-2 border-[#9EC0D1] p-8 bg-[#9EC0D1]/10 backdrop-blur-sm">
            <div className="mb-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-[#DD5046]" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4 font-[family-name:var(--font-garamond)]">
                Step-by-Step Guidance
              </h3>
              <p className="text-[#9EC0D1]/70 leading-relaxed text-center font-[family-name:var(--font-workSans)]">
                Find clarity and confidence with a structured, supportive process.
              </p>
            </div>
          </div>

          {/* Card 3: Live and work on your own terms */}
          <div className="border-2 border-[#9EC0D1] p-8 bg-[#9EC0D1]/10 backdrop-blur-sm">
            <div className="mb-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-[#DD5046]" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4 font-[family-name:var(--font-garamond)]  ">
                Live and work on<br />your own terms
              </h3>
              <p className="text-[#9EC0D1]/70 leading-relaxed text-center font-[family-name:var(--font-workSans)]">
                Build a business aligned with your purpose and values.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center p-6 mt-10">
      <div className="bg-[#1f333f] max-w-5xl w-full rounded-2xl p-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl font-[family-name:var(--font-garamond)]">Hi, I’m Robin</h1>

          <p className='text-[#9EC0D1]/70 leading-relaxed font-[family-name:var(--font-workSans)]'>
            a business coach and creative consultant helping people build lives
            and businesses that truly fit them.
          </p>

          <p className='text-[#9EC0D1]/70 leading-relaxed font-[family-name:var(--font-workSans)]'>
            After 15 years of exploring different paths myself, I’ve learned that
            there’s no single formula for fulfillment — only your own way.
          </p>

          <p className='text-[#9EC0D1]/70 leading-relaxed font-[family-name:var(--font-workSans)]'>
            My work helps you find clarity, courage, and structure to create
            something that’s 100% you.
          </p>

          <button className="bg-[#e45b4a] text-white px-6 py-3 font-medium font-[family-name:var(--font-workSans)]" >
            Book your free clarity call
          </button>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <img
            src="/robin.png"
            alt="Robin photo"
            className="w-2/3 max-w-sm"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
