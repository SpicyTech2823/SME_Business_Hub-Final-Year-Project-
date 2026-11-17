import React from "react";

const BRAND = "#3B6161";
const SKY = "#BAD8E6";

const krama = {
  height: 16,
  backgroundImage: `linear-gradient(45deg, ${BRAND} 25%, transparent 25%, transparent 75%, ${BRAND} 75%),
                    linear-gradient(45deg, ${BRAND} 25%, ${SKY} 25%, ${SKY} 75%, ${BRAND} 75%)`,
  backgroundSize: "32px 32px",
  backgroundPosition: "0 0, 16px 16px",
};

const explore = [
  ["About us", "/about"],
  ["Contact", "/contact"],
  ["Local products", "/products"],
  ["Sell with us", "/contact"],
];

const makers = [
  ["Kampot pepper & salt", "/products"],
  ["Silk & krama", "/products"],
  ["Palm sugar & rice", "/products"],
  ["Crafts & ceramics", "/products"],
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  },
  {
    name: "Telegram",
    href: "https://t.me",
    path: "M21.9 4.6 18.7 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.200c-.3.3-.5.5-1 .5l.3-4.800 8.700-7.900c.4-.3-.1-.5-.6-.2L6.700 12.900 2.100 11.500c-1-.3-1-1 .2-1.500L20.200 3.100c.9-.3 1.700.2 1.700 1.500z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
];

const linkClass =
  "inline-block rounded text-white/90 transition hover:translate-x-1 hover:text-[#BAD8E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BAD8E6]";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: BRAND, fontFamily: "'Kantumruy Pro', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;700&display=swap');`}</style>
      <div style={{ ...krama, backgroundColor: "#fff" }} aria-hidden="true" />

      {/* Call to action */}
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 pb-12 pt-16 md:flex-row md:items-center">
        <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
          Buy local. <span style={{ color: SKY }}>Sell local.</span> Grow together.
        </h2>
        <a
          href="/contact"
          className="rounded-full px-8 py-3 font-medium transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          style={{ backgroundColor: SKY, color: BRAND }}
        >
          Join the hub
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full" style={{ backgroundColor: "rgba(186,216,230,.35)" }} />
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">SME Business Hub</p>
          <p className="mt-1" style={{ color: SKY }}>មជ្ឈមណ្ឌលអាជីវកម្មខ្នាតតូច</p>
          <p className="mt-4 max-w-xs leading-relaxed text-white/80">
            Connecting Cambodian makers, farmers, and artisans with customers who value local products.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1 hover:bg-[#BAD8E6] hover:text-[#3B6161] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BAD8E6]"
                style={{ backgroundColor: "rgba(186,216,230,.18)" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Explore">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider" style={{ color: SKY }}>Explore</h3>
          <ul className="space-y-3">
            {explore.map(([label, href]) => (
              <li key={label}><a href={href} className={linkClass}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider" style={{ color: SKY }}>Products</h3>
          <ul className="space-y-3">
            {makers.map(([label, href]) => (
              <li key={label}><a href={href} className={linkClass}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider" style={{ color: SKY }}>Get in touch</h3>
          <ul className="space-y-3 text-white/90">
            <li>No. 12, Street 240,<br />Phnom Penh, Cambodia</li>
            <li><a href="tel:+85512345678" className={linkClass}>+855 12 345 678</a></li>
            <li><a href="mailto:hello@smebusinesshub.com" className={linkClass}>hello@smebusinesshub.com</a></li>
            <li className="text-white/70">Mon to Sat, 8:00 to 17:00</li>
          </ul>
        </address>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "rgba(0,0,0,.18)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/75 sm:flex-row">
          <p>© {new Date().getFullYear()} SME Business Hub. All rights reserved.</p>
          <p>Proudly made in Cambodia 🇰🇭</p>
        </div>
      </div>
    </footer>
  );
}