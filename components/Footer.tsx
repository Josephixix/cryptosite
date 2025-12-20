"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gem, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-12 w-full overflow-hidden pt-16 pb-8 text-black">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-orange-400 via-yellow-200 to-white" />

      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden -z-5">
        <div className="absolute -top-32 -left-1/4 h-64 w-72 rounded-full bg-orange-500/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-1/4 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative glass mx-auto max-w-6xl flex flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
              <Gem className="w-7 h-7 text-orange-600" />
              <span className="font-bold text-lg flex items-center gap-1">
                <span className="text-orange-600 text-sm lg:text-xl">xero</span>
                <span className="text-black text-sm lg:text-xl">crypto</span>
              </span>
            </div>
          </Link>

          <p className="text-black/80 mb-6 max-w-xs text-center md:text-left">
            Buy and sell cryptocurrency instantly with Xero Crypto. Safe, fast, and easy trading for beginners and pros alike.
          </p>

          {/* Socials */}
          <div className="flex gap-4 text-black">
            <Link href="#" className="hover:text-orange-600 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-orange-600 transition">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-orange-600 transition">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <nav className="flex w-full flex-col gap-10 text-center md:w-auto md:flex-row md:text-left">
          {/* Crypto Services */}
          <div className="animate-fadeUp" style={{ animationDelay: "100ms" }}>
            <h4 className="mb-3 text-xs font-semibold tracking-widest text-orange-600 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-black/70 hover:text-black">Buy Crypto</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Sell Crypto</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Wallet</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Exchange</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fadeUp" style={{ animationDelay: "200ms" }}>
            <h4 className="mb-3 text-xs font-semibold tracking-widest text-orange-600 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-black/70 hover:text-black">About</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Team</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Blog</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">Support</Link></li>
              <li><Link href="#" className="text-black/70 hover:text-black">FAQ</Link></li>
            </ul>
          </div>
        </nav>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mt-10 text-center text-xs text-black/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        © {new Date().getFullYear()} Xero Crypto. All rights reserved.
      </motion.div>
    </footer>
  );
}
