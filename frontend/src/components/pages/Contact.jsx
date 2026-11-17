import React, { useState } from "react";
const BRAND = "#3B6161";
const SKY = "#BAD8E6";

const krama = {
  height: 16,
  backgroundImage: `linear-gradient(45deg, ${BRAND} 25%, transparent 25%, transparent 75%, ${BRAND} 75%),
                    linear-gradient(45deg, ${BRAND} 25%, ${SKY} 25%, ${SKY} 75%, ${BRAND} 75%)`,
  backgroundSize: "32px 32px",
  backgroundPosition: "0 0, 16px 16px",
};

const details = [
  ["Visit us", "No. 12, Street 240, Phnom Penh"],
  ["Call or Telegram", "+855 12 345 678"],
  ["Email", "hello@smebusinesshub.com"],
  ["Hours", "Mon to Sat, 8:00 to 17:00"],
];

const topics = [
  "I want to sell my products",
  "I want to buy in bulk",
  "Partnership",
  "Something else",
];

const faqs = [
  [
    "How much does it cost to list?",
    "Listing is free. We take a small fee only when your product sells.",
  ],
  [
    "Do I need a website or photos?",
    "No. We can take product photos and write the listing with you.",
  ],
  ["How fast will you reply?", "Within one working day, in Khmer or English."],
];

const field =
  "w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition focus:border-[#3B6161] focus:outline-none focus:ring-4 focus:ring-[#BAD8E6]";
const empty = { name: "", email: "", phone: "", topic: topics[0], message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      err.message = "Write at least 10 characters.";
    setErrors(err);
    if (!Object.keys(err).length) setSent(true); // TODO: send `form` to your API
  };

  return (
    <div
      className="min-h-screen overflow-hidden bg-white text-slate-700"
      style={{ fontFamily: "'Kantumruy Pro', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;700&display=swap');
        @keyframes drift { from { transform: translateY(40px); opacity: 0 } to { transform: none; opacity: 1 } }
        .hero-km { animation: drift 1s cubic-bezier(.2,.7,.2,1) both }
        @media (prefers-reduced-motion: reduce) { .hero-km { animation: none } }
      `}</style>

      {/* Hero with oversized Khmer word */}
      <header className="relative mx-auto max-w-6xl px-6 pb-28 pt-20">
        <span
          aria-hidden="true"
          className="hero-km pointer-events-none absolute -top-2 right-0 select-none text-[9rem] font-bold leading-none sm:text-[16rem]"
          style={{ color: SKY, opacity: 0.55 }}
        >
          ទាក់ទង
        </span>
        <div className="relative">
          <p className="mb-5 text-xl" style={{ color: BRAND }}>
            Contact us
          </p>
          <h1
            className="max-w-2xl text-5xl font-bold leading-[1.05] sm:text-7xl"
            style={{ color: BRAND }}
          >
            Let's talk about your business.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed">
            Make products or want to buy them? Send us a message and we'll reply
            within one working day.
          </p>
        </div>
      </header>

      {/* Teal panel: details + overlapping form */}
      <section style={{ backgroundColor: BRAND }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 lg:grid-cols-5">
          <aside className="space-y-8 pt-16 text-white lg:col-span-2">
            {details.map(([l, v]) => (
              <div key={l}>
                <h2 className="text-sm font-medium" style={{ color: SKY }}>
                  {l}
                </h2>
                <p className="mt-1 text-xl">{v}</p>
              </div>
            ))}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "rgba(186,216,230,.16)" }}
            >
              <h2 className="text-lg font-bold">Selling for the first time?</h2>
              <p className="mt-1 leading-relaxed" style={{ color: SKY }}>
                Choose "I want to sell my products" in the form and we'll
                explain how listing works.
              </p>
            </div>
          </aside>

          <div
            className="-mt-16 rounded-3xl bg-white p-7 sm:p-10 lg:col-span-3"
            style={{
              boxShadow: `0 30px 60px -20px rgba(0,0,0,.35), 0 0 0 8px ${SKY}`,
            }}
          >
            {sent ? (
              <div role="status" className="py-12 text-center">
                <h2 className="text-3xl font-bold" style={{ color: BRAND }}>
                  Message sent
                </h2>
                <p className="mt-3 text-lg">
                  Thank you, {form.name}. We'll reply to {form.email} soon.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm(empty);
                  }}
                  className="mt-8 rounded-full px-8 py-3 font-medium text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]"
                  style={{ backgroundColor: BRAND }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <h2 className="text-2xl font-bold" style={{ color: BRAND }}>
                  Send us a message
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-medium"
                      style={{ color: BRAND }}
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      className={field}
                      placeholder="Sokha Chan"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-medium"
                      style={{ color: BRAND }}
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      className={field}
                      placeholder="+855"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium"
                    style={{ color: BRAND }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    className={field}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block font-medium"
                    style={{ color: BRAND }}
                  >
                    What can we help with?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={update}
                    className={field}
                  >
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-medium"
                    style={{ color: BRAND }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                    className={field}
                    placeholder="Tell us about your products or question."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full py-4 text-lg font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]"
                  style={{ backgroundColor: BRAND }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <div style={krama} aria-hidden="true" />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-4xl font-bold" style={{ color: BRAND }}>
          Common questions
        </h2>
        <div className="mt-8 divide-y-2" style={{ borderColor: SKY }}>
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between text-xl font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-[#BAD8E6]"
                style={{ color: BRAND }}
              >
                {q}
                <span
                  className="ml-4 text-3xl transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-lg leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
