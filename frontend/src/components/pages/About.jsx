import React from "react";
import Navbar from "../widgets/Navbar";

const BRAND = "#3B6161";
const SKY = "#BAD8E6";

const krama = {
  height: 16,
  backgroundImage: `linear-gradient(45deg, ${BRAND} 25%, transparent 25%, transparent 75%, ${BRAND} 75%),
                    linear-gradient(45deg, ${BRAND} 25%, ${SKY} 25%, ${SKY} 75%, ${BRAND} 75%)`,
  backgroundSize: "32px 32px",
  backgroundPosition: "0 0, 16px 16px",
};

// Angkor-style temple towers drawn in SVG
function Temple() {
  const tower = (x, s) => (
    <g transform={`translate(${x},222) scale(${s})`} key={x}>
      <path d="M0 -105 C-8 -85 -19 -62 -21 -34 L21 -34 C19 -62 8 -85 0 -105Z" />
      <rect x="-27" y="-34" width="54" height="12" />
      <rect x="-31" y="-22" width="62" height="22" />
      <rect x="-5" y="-22" width="10" height="22" fill={SKY} />
    </g>
  );
  return (
    <svg viewBox="0 0 600 300" className="w-full" role="img" aria-label="Illustration of an Angkor temple at sunrise">
      <circle className="sun" cx="300" cy="170" r="125" fill={SKY} />
      <g className="temple" fill={BRAND}>
        {tower(160, 0.8)}{tower(440, 0.8)}{tower(228, 1.1)}{tower(372, 1.1)}{tower(300, 1.6)}
        <rect x="110" y="222" width="380" height="14" />
        <rect x="85" y="236" width="430" height="14" />
        <rect x="60" y="250" width="480" height="50" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <rect key={i} x={85 + i * 38} y="262" width="14" height="38" fill={SKY} opacity=".85" />
        ))}
      </g>
    </svg>
  );
}

const stats = [
  ["120+", "local makers"],
  ["14", "provinces"],
  ["600+", "products listed"],
];

const places = [
  ["Kampot", "Pepper and sea salt", BRAND, "#fff"],
  ["Takeo", "Hand-woven silk and krama", SKY, BRAND],
  ["Siem Reap", "Silver, wood and stone crafts", "#fff", BRAND],
  ["Kampong Speu", "Palm sugar", SKY, BRAND],
  ["Battambang", "Fragrant rice and dried fruit", BRAND, "#fff"],
  ["Kampong Chhnang", "Clay pots and ceramics", "#fff", BRAND],
];

const values = [
  ["Fair prices", "Makers set their own price. We add a small, clear fee."],
  ["Made in Cambodia", "Every item is grown or made here, and we show where."],
  ["Help to grow", "We help with packaging, photos, and selling online."],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-700" style={{ fontFamily: "'Kantumruy Pro', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;700&display=swap');
        @keyframes rise { from { transform: translateY(60px); opacity: 0 } to { transform: none; opacity: 1 } }
        @keyframes sunrise { from { transform: translateY(90px) } to { transform: none } }
        .temple { animation: rise 1.2s .2s cubic-bezier(.2,.7,.2,1) both }
        .sun { animation: sunrise 1.6s cubic-bezier(.2,.7,.2,1) both }
        @media (prefers-reduced-motion: reduce) { .temple, .sun { animation: none } }
      `}</style>

      {/* Hero */}
      <header className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xl" style={{ color: BRAND }}>អំពីយើង · About us</p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl" style={{ color: BRAND }}>
            Made here.<br />Meant to travel.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed">
            SME Business Hub connects Cambodian farmers, weavers, and artisans with customers
            who want real local products and the stories behind them.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-full px-8 py-3 font-medium text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]" style={{ backgroundColor: BRAND, boxShadow: `0 10px 30px -8px ${BRAND}` }}>
              Join the hub
            </a>
            <a href="#makers" className="rounded-full border-2 px-8 py-3 font-medium transition hover:bg-[#BAD8E6]/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]" style={{ borderColor: BRAND, color: BRAND }}>
              See where we work
            </a>
          </div>
        </div>
        <Temple />
      </header>

      <div style={krama} aria-hidden="true" />

      {/* Stats */}
      <section style={{ backgroundColor: BRAND }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 text-center text-white sm:grid-cols-3">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="text-5xl font-bold" style={{ color: SKY }}>{n}</p>
              <p className="mt-1 text-lg">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-5">
        <h2 className="text-4xl font-bold leading-tight md:col-span-2" style={{ color: BRAND }}>
          Good products were hard to find. We changed that.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed md:col-span-3">
          <p>Cambodia makes excellent things, from Kampot pepper to silk woven by hand. Most makers are small family businesses, and few can reach customers outside their own town.</p>
          <p className="border-l-4 pl-5 text-xl font-medium" style={{ borderColor: SKY, color: BRAND }}>
            We list their products, tell their stories, and handle the hard parts: photos, listings, and orders.
          </p>
        </div>
      </section>

      {/* Makers by province */}
      <section id="makers" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-4xl font-bold" style={{ color: BRAND }}>Where our makers work</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map(([name, item, bg, fg]) => (
            <div key={name} className="flex min-h-[170px] flex-col justify-end rounded-3xl p-7 transition hover:-translate-y-1" style={{ backgroundColor: bg, color: fg, border: bg === "#fff" ? `2px solid ${SKY}` : "none" }}>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="mt-1 opacity-90">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: SKY + "55" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t}>
              <h3 className="text-2xl font-bold" style={{ color: BRAND }}>{t}</h3>
              <p className="mt-2 text-lg leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl" style={{ color: BRAND }}>Make something worth sharing?</h2>
        <p className="mx-auto mt-4 max-w-md text-lg">Tell us about your business and we'll help you list your first products.</p>
        <a href="/contact" className="mt-8 inline-block rounded-full px-10 py-4 text-lg font-medium text-white transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]" style={{ backgroundColor: BRAND }}>
          Contact us
        </a>
      </section>
      <div style={krama} aria-hidden="true" />
    </div>
  );
}