'use client';

import { useState } from 'react';

export default function StartNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-garamond)] text-5xl md:text-6xl mb-8 text-[#0f172a]">
            Start Your Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let&apos;s start with a free clarity call to understand
            your goals and determine the best path forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="font-[family-name:var(--font-garamond)] text-3xl mb-6 text-[#0f172a]">
              Book Your Free Clarity Call
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="clarity-session">Free Clarity Session</option>
                  <option value="strategic-planning">Strategic Business Planning</option>
                  <option value="executive-coaching">Executive Coaching Program</option>
                  <option value="custom">Custom Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your business goals and challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD5046] focus:border-transparent"
                  placeholder="What are your main business challenges? What would you like to achieve?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#DD5046] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#c43d33] transition-colors"
              >
                Book My Free Call
              </button>
            </form>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-[family-name:var(--font-garamond)] text-2xl mb-4 text-[#0f172a]">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#DD5046] mr-3 mt-1">•</span>
                  A 30-minute focused conversation about your business
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD5046] mr-3 mt-1">•</span>
                  Assessment of your current challenges and opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD5046] mr-3 mt-1">•</span>
                  Clear next steps and recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD5046] mr-3 mt-1">•</span>
                  No sales pressure - just valuable insights
                </li>
              </ul>
            </div>

            <div className="bg-[#0f172a] text-white p-8 rounded-lg">
              <h3 className="font-[family-name:var(--font-garamond)] text-2xl mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                I typically respond within 24 hours to schedule your call.
                Most calls are scheduled within 2-3 business days.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p><strong>Email:</strong> contact@robingottschalk.com</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <p><strong>Call Duration:</strong> 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
