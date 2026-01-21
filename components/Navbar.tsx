"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, Box, Gem } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="flex justify-between items-center px-5 lg:px-24 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Gem className="w-7 h-7 text-orange-400" />
            <span className="font-bold flex items-center gap-1">
              <span className="text-orange-400 text-sm lg:text-xl">xero</span>
              <span className="text-black text-sm lg:text-xl">crypto</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 text-base">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-orange-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:contact@xerocrypto.com"
            className="hidden lg:block"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-full transition">
              <Gem className="w-4 h-4" /> Contact Us
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-6 border-b">
            <div className="flex items-center gap-2">
              <Gem className="w-7 h-7 text-orange-400" />
              <span className="font-bold flex gap-1">
                <span className="text-orange-400">xero</span>
                <span>crypto</span>
              </span>
            </div>

            <button onClick={() => setOpen(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-4 px-6 py-8 text-lg">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50"
            >
              <Box className="w-5 h-5 text-orange-400" />
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              About
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50"
            >
              <Mail className="w-5 h-5 text-orange-400" />
              Contact
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto px-6 pb-6 pt-4 border-t">
            <a href="mailto:contact@xerocrypto.com">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-xl text-lg">
                <Gem className="w-5 h-5" />
                Contact Us
              </button>
            </a>

            <div className="text-center mt-4 text-gray-700">
              <p className="text-sm">Need help? Call us</p>
              <a
                href="tel:+14784070488"
                className="font-semibold text-orange-600"
              >
                +1 (478) 407-0488
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
