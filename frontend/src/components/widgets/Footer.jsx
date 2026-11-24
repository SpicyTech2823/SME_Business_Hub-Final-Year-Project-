import { useState } from "react";

const BRAND = "#2E544B";

const linkGroups = [
  {
    title: "Hub",
    links: ["Find a service", "Business directory", "Events", "Funding & grants"],
  },
  {
    title: "Resources",
    links: ["Guides & templates", "Training courses", "Mentorship", "Blog"],
  },
  {
    title: "Company",
    links: ["About us", "Partners", "Careers", "Contact"],
  },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    // TODO: connect to your newsletter service
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white text-slate-600">
      {/* Accent line */}
      <div className="h-1 w-full" style={{ backgroundColor: BRAND }} />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <a href="/" className="inline-flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                style={{ backgroundColor: BRAND }}
              >
                S
              </span>
              <span className="text-xl font-semibold text-slate-900">
                SME Business Hub
              </span>
            </a>

            <p className="mt-5 max-w-sm leading-relaxed">
              Tools, training and connections to help small and medium
              businesses start, grow and thrive.
            </p>

            <div className="mt-8 max-w-md">
              <label
                htmlFor="footer-email"
                className="text-sm font-medium text-slate-900"
              >
                Get monthly tips in your inbox
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#2E544B] focus:ring-2 focus:ring-[#2E544B]/20"
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E544B] focus-visible:ring-offset-2"
                  style={{ backgroundColor: BRAND }}
                >
                  Subscribe
                </button>
              </div>
              <p
                className="mt-2 h-5 text-sm"
                style={{ color: BRAND }}
                aria-live="polite"
              >
                {subscribed ? "Thanks, you're on the list." : ""}
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: BRAND }}
                >
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors hover:text-[#2E544B] hover:underline hover:underline-offset-4"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SME Business Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#" className="text-sm hover:text-[#2E544B]">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-[#2E544B]">
              Terms
            </a>

            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#2E544B] hover:bg-[#2E544B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E544B] focus-visible:ring-offset-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}