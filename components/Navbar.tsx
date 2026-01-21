"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Package, Phone, Mail, Truck, Box, Gem } from "lucide-react";





export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-5 lg:px-24 py-3 bg-white">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
          <Gem className="w-7 h-7 text-orange-400" />
          <span className="font-bold text-lg flex items-center gap-1">
            <span className="text-orange-400 text-sm lg:text-xl">xero</span>
            <span className="text-black text-sm lg:text-xl">crypto</span>
          </span>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <Menu className="w-7 h-7 text-black" />
      </button>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-6 text-lg">
        <li>
          <Link href="/" className="hover:text-orange-400 text-black transition">
          Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-orange-400 text-black transition">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-orange-400 text-black transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <a href="mailto:contact@xerocrypto.com">
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-400 hover:bg-black text-white rounded-full cursor-pointer transition">
          <Gem className="w-4 h-4" /> Contact Us
        </button>
      </a>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slideInRight">
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-6 border-gray-200 border-b">
            <div className="flex items-center gap-2 animate-fadeInSlow">
              <Gem className="w-7 h-7 text-orange-400" />
              <span className="font-bold text-lg flex items-center gap-1">
            <span className="text-orange-400 text-sm lg:text-xl">xero</span>
            <span className="text-black text-sm lg:text-xl">crypto</span>
          </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition transform hover:rotate-90"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 px-6 py-8 text-lg">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay1 hover:bg-orange-400">
              <Box className="w-5 h-5 text-gray-600" /> <span className="text-gray-600">Home</span>
            </Link>
            <Link href="#about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay2 hover:bg-orange-400">
              <Phone className="w-5 h-5 text-gray-600" /> <span className="text-gray-600">About</span>
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 hover:bg-orange-400">
              <Mail className="w-5 h-5 text-gray-600" /> <span className="text-gray-600">Contact</span>
            </Link>
          </div>

          {/* Bottom CTA (Sticky on Mobile) */}
          <div className="sticky bottom-0 bg-white px-6 pb-6 pt-4 lg:hidden mt-60 border-gray-200 border-t">
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              <button className="w-full flex cursor-pointer items-center justify-center gap-2 px-4 py-3 bg-orange-400 hover:bg-blue-700 text-white rounded-xl text-lg">
                <Gem className="w-5 h-5 text-black" /> Contact Us
              </button>
            </Link>
            <div className="text-center mt-4 text-gray-700">
              <p className="text-sm">Need help? Call us at</p>
              <a href="tel:+14784070488" className="font-semibold text-orange-600">
                +1 (478) 407-0488
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}