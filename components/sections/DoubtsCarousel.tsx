
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

interface Doubt {
  id: number
  text: string
}

const doubts: Doubt[] = [
  {
    id: 1,
    text: "I'm not really good at anything."
  },
  {
    id: 2,
    text: "What do I even know about business? I'd feel like a fraud."
  },
  {
    id: 3,
    text: "Nothing works for me. I've tried everything!"
  },
  {
    id: 4,
    text: "I have too many interests — how can I choose just one?"
  },
  {
    id: 5,
    text: "What I want already exists — would anyone buy it from me?"
  },
  {
    id: 6,
    text: "I can't stick to one thing — I always lose interest."
  },
  {
    id: 7,
    text: "I'm too young... or too old... to start something new."
  },
  {
    id: 8,
    text: "Isn't entrepreneurship too risky?"
  }
]

export default function DoubtsCarousel() {
  return (
    <section className="bg-[#0A1C28] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4 text-left">
            <span className="text-gray-400 text-lg font-light font-[family-name:var(--font-workSans)]">What if...?</span>
            <div className="w-28 h-0.5 bg-[#DD5046] mt-2"></div>
          </div>
          <h2 className="text-4xl md:text-4xl font-[family-name:var(--font-garamond)] text-left mb-8">
            Common doubts that might hold you back
          </h2>
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            // navigation={{
            //   nextEl: '.swiper-button-next-custom',
            //   prevEl: '.swiper-button-prev-custom',
            // }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="doubts-swiper mb-4"
          >
            {doubts.map((doubt) => (
              <SwiperSlide key={doubt.id}>
              <div className="bg-[#9EC0D14D]/30 border-2 border-slate-700 rounded-4xl p-6 h-40 flex items-center justify-center relative backdrop-blur-sm">
                <div className="absolute top-6 left-6">
                  <svg
                    className="w-8 h-8 pb-2 text-[#DD5046]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="text-[#9EC0D1] text-lg italic leading-relaxed">
                  {doubt.text}
                </p>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            // navigation={{
            //   nextEl: '.swiper-button-next-custom',
            //   prevEl: '.swiper-button-prev-custom',
            // }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="doubts-swiper"
          >
            {doubts.map((doubt) => (
              <SwiperSlide key={doubt.id}>
                <div className="bg-[#9EC0D14D]/30 border border-slate-700 rounded-4xl p-6 h-40 flex items-center justify-center relative backdrop-blur-sm">
                  <div className="absolute top-6 left-6">
                    <svg
                      className="w-8 h-8 pb-2 text-[#DD5046]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <p className="text-[#9EC0D1] text-lg italic leading-relaxed">
                    {doubt.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <div className="flex justify-center mt-8 gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Conclusion Section */}
        <div className="text-center">
          <h3 className="text-[#f6f6f6] text-3xl md:text-4xl font-medium mb-8 font-[family-name:var(--font-garamond)]">
            Yes, doubt is real — I&apos;ve been there too.
          </h3>
          <p className="text-[#9EC0D1] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            But here&apos;s what I&apos;ve learned: every person has their own path. The fears might sound similar,
            but the solutions are always individual. Together, we&apos;ll uncover your way forward — step by
            step. All it takes is a little trust to begin the journey.
          </p>
          <Link
            href="/start-now"
            className="inline-block bg-[#DD5046] text-white px-10 py-4 text-lg font-medium hover:bg-[#c43d33] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book your free clarity call
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .doubts-swiper .swiper-pagination {
          position: static;
          margin-top: 2rem;
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(148, 163, 184, 0.3);
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: #f97316;
          transform: scale(1.2);
        }

        .doubts-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  )
}
