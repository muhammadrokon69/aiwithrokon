"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "8801521217967";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const products = [
  {
    id: "google",
    badge: "POPULAR",
    title: "Google AI Pro",
    duration: "18 Months Access",
    regular: "৳350",
    price: "৳299",
    image: "/google-ai-pro.png",
    description:
      "AI-powered productivity, creativity, study and research tools.",
    features: [
      "18 Months Access",
      "AI-powered productivity",
      "Creative AI tools",
      "Study & research support",
    ],
    message:
      "Assalamu Alaikum, আমি Google AI Pro 18 Months package নিতে চাই। Offer Price ৳299. বিস্তারিত জানতে চাই।",
  },
  {
    id: "canva",
    badge: "BEST PRICE",
    title: "Canva Pro",
    duration: "3 Years Access",
    regular: "৳150",
    price: "৳99",
    image: "/canva-pro.png",
    description:
      "Create professional designs with premium creative resources and tools.",
    features: [
      "3 Years Access",
      "Premium templates",
      "Premium design elements",
      "AI & creative tools",
    ],
    message:
      "Assalamu Alaikum, আমি Canva Pro 3 Years package নিতে চাই। Offer Price ৳99. বিস্তারিত জানতে চাই।",
  },
  {
    id: "combo",
    badge: "🔥 BEST VALUE",
    title: "AI Pro Combo",
    duration: "Google AI Pro + Canva Pro",
    regular: "৳500",
    price: "৳349",
    image: "/combo.png",
    description:
      "Get both packages together at a special combo price and save ৳151.",
    features: [
      "Google AI Pro — 18 Months",
      "Canva Pro — 3 Years",
      "AI + Design in one package",
      "Save ৳151",
    ],
    featured: true,
    message:
      "Assalamu Alaikum, আমি AI Pro Combo নিতে চাই। Google AI Pro 18 Months + Canva Pro 3 Years — ৳349. Order করতে চাই।",
  },
];

const faqs = [
  {
    question: "Google AI Pro কতদিনের?",
    answer:
      "আমাদের listed Google AI Pro package-এর মেয়াদ 18 Months.",
  },
  {
    question: "Canva Pro কতদিনের?",
    answer:
      "আমাদের listed Canva Pro package-এর মেয়াদ 3 Years.",
  },
  {
    question: "Combo package-এ কী আছে?",
    answer:
      "Combo package-এ Google AI Pro — 18 Months এবং Canva Pro — 3 Years অন্তর্ভুক্ত।",
  },
  {
    question: "কীভাবে Order করব?",
    answer:
      "আপনার পছন্দের package নির্বাচন করে Order on WhatsApp button-এ click করুন। এরপর আমাদের সঙ্গে package ও activation details confirm করুন।",
  },
  {
    question: "Payment কীভাবে করব?",
    answer:
      "Package confirm করার পর WhatsApp conversation-এর মাধ্যমে available payment instructions দেওয়া হবে।",
  },
  {
    question: "Payment করার পর কী হবে?",
    answer:
      "Payment confirmation পাওয়ার পর আপনার selected package-এর activation/delivery process শুরু করা হবে।",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030712] pt-[68px] text-white">

      {/* ================= FIXED HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <img
              src="/logo.png"
              alt="AI with Rokon"
              className="h-10 w-10 rounded-full"
            />

            <div className="leading-tight">
              <div className="text-sm font-extrabold sm:text-base">
                AI with Rokon
              </div>

              <div className="text-[9px] text-cyan-300 sm:text-[10px]">
                AI শিখি সহজ বাংলায়
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#offers" className="transition hover:text-white">
              Offers
            </a>

            <a href="#benefits" className="transition hover:text-white">
              Benefits
            </a>

            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>

            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          {/* Desktop WhatsApp */}
          <a
            href={whatsappLink(
              "Assalamu Alaikum, আমি AI with Rokon-এর offers সম্পর্কে জানতে চাই।"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-extrabold text-black shadow-lg shadow-green-500/20 transition hover:scale-105 md:flex"
          >
            <FaWhatsapp className="text-base" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
          >
            <span className="text-2xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#030712]/98 px-4 py-4 backdrop-blur-xl md:hidden">

            <nav className="flex flex-col gap-2">

              <a
                href="#offers"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                Offers
              </a>

              <a
                href="#benefits"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                Benefits
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                FAQ
              </a>

              <a
                href={whatsappLink(
                  "Assalamu Alaikum, আমি AI with Rokon-এর offers সম্পর্কে জানতে চাই।"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-black text-black"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>

            </nav>

          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:px-8 lg:py-14">

          {/* ================= HERO LEFT / TEXT ================= */}
          <div className="order-2 lg:order-1">

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]">
              Premium AI &{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Design Tools
              </span>{" "}
              at Special Prices 🚀
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Google AI Pro এবং Canva Pro-এর selected packages দেখুন এবং
              WhatsApp-এর মাধ্যমে সহজেই আপনার পছন্দের package সম্পর্কে জানতে
              ও order করতে পারবেন।
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
              <span className="text-sm text-slate-400">
                Offers starting from
              </span>

              <span className="text-2xl font-black text-cyan-300">
                ৳99
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href="#offers"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-center text-sm font-black text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                🔥 View Offers
              </a>

              <a
                href={whatsappLink(
                  "Assalamu Alaikum, আমি AI with Rokon-এর available packages সম্পর্কে জানতে চাই।"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-bold transition hover:bg-white/[0.08]"
              >
                <FaWhatsapp className="text-lg text-[#25D366]" />
                Order on WhatsApp
              </a>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">

              {[
                ["⚡", "Fast Response"],
                ["💬", "WhatsApp Support"],
                ["🇧🇩", "Bangladesh"],
                ["🛠️", "Customer Support"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] px-2 py-3 text-center"
                >
                  <div className="text-base">{icon}</div>

                  <div className="mt-1 text-[10px] text-slate-500">
                    {title}
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* ================= HERO RIGHT / IMAGE ================= */}
          <div className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2">

            <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-[90px]" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">

              <img
                src="/combo.png"
                alt="AI Pro Combo Offer"
                className="mx-auto w-[92%] rounded-[22px] sm:w-full"
              />

            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-cyan-300/20 bg-[#07111f]/95 px-5 py-3 shadow-xl backdrop-blur-xl sm:-left-6">

              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Combo Offer
              </div>

              <div className="text-2xl font-black text-cyan-300">
                ৳349
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= OFFERS ================= */}
      <section
        id="offers"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            Special Offers
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Choose Your Package
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            আপনার প্রয়োজন অনুযায়ী package নির্বাচন করুন।
          </p>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {products.map((product) => (
            <article
              key={product.id}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-4 transition duration-300 hover:-translate-y-2 ${
                product.featured
                  ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/[0.10] via-white/[0.035] to-white/[0.02] shadow-2xl shadow-cyan-500/10"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >

              <div className="mb-3 flex min-h-7 items-center justify-between">

                <span
                  className={`rounded-full px-3 py-1 text-[9px] font-black tracking-wider ${
                    product.featured
                      ? "bg-gradient-to-r from-yellow-300 to-orange-400 text-black"
                      : "bg-white/[0.06] text-cyan-300"
                  }`}
                >
                  {product.badge}
                </span>

                {product.featured && (
                  <span className="text-xs font-bold text-green-400">
                    Save ৳151
                  </span>
                )}

              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full transition duration-500 group-hover:scale-[1.03]"
                />

              </div>

              <div className="flex flex-1 flex-col px-1 pt-5">

                <h3 className="text-xl font-black sm:text-2xl">
                  {product.title}
                </h3>

                <div className="mt-1 text-xs font-semibold text-cyan-300">
                  {product.duration}
                </div>

                <p className="mt-4 min-h-[48px] text-xs leading-6 text-slate-500 sm:text-sm">
                  {product.description}
                </p>

                <div className="mt-5 space-y-2.5">

                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <span className="mt-0.5 text-cyan-300">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                <div className="mt-auto pt-7">

                  <div className="flex items-end gap-3">

                    <span className="text-sm text-slate-600 line-through">
                      {product.regular}
                    </span>

                    <span className="text-4xl font-black tracking-tight">
                      {product.price}
                    </span>

                  </div>

                  <a
                    href={whatsappLink(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-center text-sm font-black transition hover:-translate-y-0.5 ${
                      product.featured
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20"
                        : "bg-[#25D366] text-black"
                    }`}
                  >
                    <FaWhatsapp className="text-lg" />
                    Order on WhatsApp
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        id="benefits"
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]"
      >

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <div className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Why AI with Rokon?
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Simple. Clear. Customer-focused.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              সহজ ordering experience এবং WhatsApp-based support।
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              ["⚡", "Fast Response", "WhatsApp-এর মাধ্যমে দ্রুত যোগাযোগের সুবিধা।"],
              ["💰", "Special Pricing", "Selected AI ও design tools-এর জন্য special offers."],
              ["🇧🇩", "Bangladesh Focused", "বাংলাদেশের customers-এর জন্য সহজ ordering process."],
              ["💬", "WhatsApp Support", "Order ও support একই communication channel-এ."],
              ["🎯", "Simple Process", "সহজ product selection ও order process."],
              ["🛠️", "Customer Assistance", "Order-related প্রয়োজনীয় support."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-[#080d1a] p-6 transition hover:border-cyan-400/20"
              >

                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            How It Works
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Order in 4 Simple Steps
          </h2>

        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">

          {[
            ["01", "Choose Product", "আপনার পছন্দের package নির্বাচন করুন।"],
            ["02", "Contact Us", "Order on WhatsApp button চাপুন।"],
            ["03", "Complete Payment", "Available payment instructions নিন।"],
            ["04", "Activation / Delivery", "Confirmation-এর পর process শুরু হবে।"],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6"
            >

              <div className="text-4xl font-black text-cyan-300">
                {number}
              </div>

              <h3 className="mt-5 font-bold">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                {description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-8 sm:px-6">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.10] via-blue-500/[0.06] to-purple-500/[0.10] px-6 py-12 text-center sm:px-10 sm:py-16">

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative">

            <div className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Ready to Start?
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Get Your Preferred Package 🚀
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              আপনার পছন্দের package নির্বাচন করুন এবং WhatsApp-এ আমাদের সঙ্গে
              যোগাযোগ করুন।
            </p>

            <a
              href={whatsappLink(
                "Assalamu Alaikum, আমি AI with Rokon-এর একটি package নিতে চাই।"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-black text-black shadow-xl shadow-green-500/20 transition hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Order Now on WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        id="faq"
        className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6"
      >

        <div className="text-center">

          <div className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-10 space-y-3">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:border-cyan-400/20"
            >

              <summary className="cursor-pointer list-none text-sm font-bold">

                <div className="flex items-center justify-between gap-4">

                  <span>{faq.question}</span>

                  <span className="text-xl font-light text-cyan-300 transition group-open:rotate-45">
                    +
                  </span>

                </div>

              </summary>

              <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-7 text-slate-500">
                {faq.answer}
              </p>

            </details>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black/20">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2 md:items-start">

            {/* Brand */}
            <div>

              <div className="flex items-center gap-3">

                <img
                  src="/logo.png"
                  alt="AI with Rokon"
                  className="h-12 w-12 rounded-full"
                />

                <div>

                  <div className="font-bold text-white">
                    AI with Rokon
                  </div>

                  <div className="text-xs text-slate-600">
                    AI Tools & Digital Services
                  </div>

                </div>

              </div>

              <div className="mt-4 text-sm text-slate-500">
                📍 Gazipur, Dhaka, Bangladesh
              </div>

            </div>

            {/* Legal */}
            <div className="md:text-right">

              <h3 className="mb-4 text-sm font-bold text-white">
                Legal
              </h3>

              <div className="flex flex-col gap-3 text-sm md:items-end">

                <a
                  href="/privacy"
                  className="text-slate-500 transition hover:text-cyan-300"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="text-slate-500 transition hover:text-cyan-300"
                >
                  Terms & Conditions
                </a>

                <a
                  href="/refund-policy"
                  className="text-slate-500 transition hover:text-cyan-300"
                >
                  Refund & Replacement Policy
                </a>

              </div>

            </div>

          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-600">
            © 2026 AI with Rokon. All rights reserved.
          </div>

        </div>
      </footer>

      {/* ================= MOBILE WHATSAPP BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#030712]/95 p-2.5 backdrop-blur-xl md:hidden">

        <a
          href={whatsappLink(
            "Assalamu Alaikum, আমি AI with Rokon-এর একটি package নিতে চাই।"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-black text-black shadow-lg shadow-green-500/20"
        >
          <FaWhatsapp className="text-xl" />
          Order on WhatsApp
        </a>

      </div>

      {/* ================= DESKTOP FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink(
          "Assalamu Alaikum, আমি AI with Rokon-এর offers সম্পর্কে জানতে চাই।"
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-2xl shadow-green-500/30 transition hover:scale-110 md:flex"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

    </main>
  );
}