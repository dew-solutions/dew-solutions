"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Calendar,
  Cpu,
  Globe,
  Bot,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 animate-pulse" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Websites & AI Solutions That Work While You Sleep
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            We build high-performance websites and AI automations that generate
            leads, book appointments, and scale your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#book"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Globe size={32} />,
              title: "Custom Websites",
              desc: "Fast, secure, conversion-focused websites built to scale.",
            },
            {
              icon: <Cpu size={32} />,
              title: "AI Automations",
              desc: "Automate follow-ups, workflows, and internal operations.",
            },
            {
              icon: <Bot size={32} />,
              title: "AI Receptionist",
              desc: "24/7 AI handling calls, bookings, and lead qualification.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
            >
              <div className="mb-4 text-indigo-400">{s.icon}</div>
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="text-gray-400 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["24/7", "AI Availability"],
            ["3–5x", "Faster Lead Response"],
            ["100%", "Custom Builds"],
            ["US-Based", "Owner Operated"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="book"
        className="py-24 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Book a Free 15-Minute Strategy Call
        </h2>
        <p className="text-gray-400 mt-4">
          No pressure. No sales script. Just clarity.
        </p>

        <div className="mt-10 rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://cal.com/dew-solutions/demo-meeting?overlayCalendar=true"
            className="w-full h-[600px]"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">DEW Solutions</h3>
            <p className="text-gray-400 mt-2">
              Websites and AI systems designed to automate growth.
            </p>
          </div>

          <div className="space-y-2">
            <a href="tel:+16107518710" className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> Call Us
            </a>
            <a href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM" className="flex items-center gap-2 text-gray-300">
              <Mail size={16} /> Email Us
            </a>
          </div>

          <div className="text-gray-400">
            <p>Mon – Fri</p>
            <p>9:00 AM – 5:00 PM EST</p>
          </div>
        </div>
      </footer>
    </main>
  );
}