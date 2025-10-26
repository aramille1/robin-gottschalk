
import { Leaf, BarChart3, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 py-16 px-8 lg:px-30 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-gray-300 text-sm font-medium mb-2 relative inline-block">
            About
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-500"></span>
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-serif leading-tight">
            Ready to create meaningful change?
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 1:1 Coaching & Consulting */}
          <div className="border border-gray-600 p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">
                1:1 Coaching & Consulting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tailored guidance designed around your strengths, goals, and needs.
              </p>
            </div>
          </div>

          {/* Card 2: Step-by-Step Guidance */}
          <div className="border border-gray-600 p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">
                Step-by-Step Guidance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Find clarity and confidence with a structured, supportive process.
              </p>
            </div>
          </div>

          {/* Card 3: Live and work on your own terms */}
          <div className="border border-gray-600 p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">
                Live and work on<br />your own terms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Build a business aligned with your purpose and values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
