
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
              <h3 className="text-white text-xl font-medium mb-4 font-[family-name:var(--font-garamond)]">
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
    </section>
  );
}
