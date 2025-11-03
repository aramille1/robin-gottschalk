
import Link from 'next/link';
import React from 'react';

const ConsultationSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Gemeinsam stellen wir dir ein auf dich und deine individuellen Bedürfnisse zugeschnittenes Paket zusammen. Du kannst kombinieren aus den Bereichen:"
    },
    {
      number: "2",
      title: "Initial Consultation",
      description: "Gemeinsam stellen wir dir ein auf dich und deine individuellen Bedürfnisse zugeschnittenes Paket zusammen. Du kannst kombinieren aus den Bereichen:"
    },
    {
      number: "3",
      title: "Initial Consultation",
      description: "Gemeinsam stellen wir dir ein auf dich und deine individuellen Bedürfnisse zugeschnittenes Paket zusammen. Du kannst kombinieren aus den Bereichen:"
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
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-red-500 leading-none">
                  {step.number}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
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
