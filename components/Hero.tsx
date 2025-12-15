"use client";

import Image from "next/image";
import Link from "next/link";
import { Sofia_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { u } from "motion/react-client";


const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export default function Hero() {
  return (
    
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden px-4 sm:px-8 md:px-16 py-8 lg:px-24 bg-white min-h-[80dvh] md:min-h-[90dvh] lg:min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
      >
        {/* Background blobs */}
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl pointer-events-none z-0" />

        {/* Text content */}
        <div className="relative z-10 w-full md:w-1/2 text-center md:text-left max-w-2xl">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 font-bold leading-tight tracking-tighter ${sofia.className}`}
          >
            Fast And Secure {" "}
            <span className="bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent">
              Crypto Currency Exchange
            </span>
          </h1>

          <p className="text-sm sm:text-lg font-medium text-muted-foreground mb-8 mt-0.5 text-gray-600 ">
         Experience seamless trading with{" "}
            <span className="font-semibold text-orange-600">Xero Crypto</span> your trusted partner in digital assets. Fast, secure, and reliable transactions across hundreds of cryptocurrencies {" "}
            <span className="font-bold text-orange-700">worldwide</span>.
          </p>

          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-orange-400 text-white hover:bg-black focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            Connect Wallet 
          </Link>
        </div>

        {/* Image content */}
        <div className="relative z-10 w-full max-w-md h-[50dvh] sm:h-[55dvh] md:w-1/2 md:h-[65dvh] lg:h-[75dvh] aspect-square">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/5 to-orange-400/5 -z-10" />
          <div className="relative w-full h-full">
            <Image
              src="/hero.jpg"
              alt="crypto trader"
              fill
              className="object-cover object-center rounded-xl shadow-xl"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
              priority={false}
            />
            <div className="absolute bottom-4 right-4 bg-orange-400 text-white px-3 py-1.5 rounded-full font-medium text-xs sm:text-sm flex items-center gap-1 shadow-lg">
              <span>🚀</span>
              <span className="">Fast & Secure</span>
            </div>
          </div>
        </div>
      </motion.section>
  )}