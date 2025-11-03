"use client";

import Image from "next/image";
import Link from "next/link";

export default function EmailSignup() {
  return (
    // ✨ CHANGE: Changed 'items-center' to 'items-end' to align content to the bottom
    <section className="relative w-full h-[60vh] flex items-end justify-center">
      {/* Background image */}
      <Image
        src="/sunset.png" // replace with your image path
        alt="People by campfire at sunset"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1C28]/40"></div>
    </section>
  );
}
