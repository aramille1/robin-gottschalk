
import Link from 'next/link';
import React from 'react';

const ConsultationSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Book your free discovery call",
      description: "Book your call via the button below and fill out the short form. Everyone starts with their own story and motivation — what matters most is your desire to create change. I can help you ignite the fire, but the spark has to come from you."
    },
    {
      number: "2",
      title: `Let’s connect`,
      description: `I’ll get back to you within
72 hours to schedule a brief
15-minute call. We’ll discuss your situation, see if we’re a good fit, and clarify your goals, expectations, and any questions you have.`
    },
    {
      number: "3",
      title: "Deep dive session",
      description: `If it feels right for both of us, we’ll plan a 60-minute video call. You’ll get a clear overview of the program, what to expect, and how we’ll tackle your specific challenges — plus a first draft of your personal roadmap.`
    }
  ];

  return (
    <section id="consultation-steps" className="bg-[#0A1C28] min-h-screen pb-12 pt-30 px-4 sm:px-6 lg:px-30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="text-gray-400 text-lg font-light font-[family-name:var(--font-workSans)]">Getting started</span>
            <div className="w-40 h-0.5 bg-[#DD5046] mt-2"></div>
          </div>
          <h1 className="text-white text-4xl font-light tracking-wide font-[family-name:var(--font-garamond)]">
            What to do now:
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-none shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-red-500 leading-none font-[family-name:var(--font-garamond)]">
                  {step.number}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-[family-name:var(--font-garamond)] leading-tight">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}

          <div className="flex justify-center">
          <Link
            href="/start-now"
            className="inline-block bg-[#DD5046] text-white px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
          </div>
        </div>
    </section>
  );
};

export default ConsultationSteps;
