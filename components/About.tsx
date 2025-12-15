"use client";

import Image from "next/image";
import Link from "next/link";
import { Sofia_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { u } from "motion/react-client";
import Hero from "@/components/Hero";


const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const features = [
  {
    title: "Fast & Secure Transactions",
    description: "Experience lightning-fast and secure crypto transactions every time.",
    image: "/fastand.jpg",
  },
  
  {
    title: "Multiple Payment Methods",
    description: "Pay or receive via cards, bank transfers, or digital wallets.",
    image: "/fastand2.jpg",
  },

  {
    title: "24/7 Customer Support",
    description: "We’re always here to help you, anytime.",
    image: "/fastand3.jpg",
  },
];



export default function About() {
  return (
    

        <section className="py-16 bg-gray-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className={ `${sofia.className} text-3xl sm:text-4xl font-bold mb-12`}>Why Choose Us</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              {feature.image && (
                <div className="w-full h-40 mt-2 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={feature.image}
                    alt={feature.title + " image"}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}