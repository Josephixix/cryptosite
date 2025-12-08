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

const steps = [
  {
    title: "Sign Up & Verify Your Account",
    description:
      "Create your account and complete verification to start trading securely.",
  },
  {
    title: "Deposit Funds",
    description:
      "Add funds via bank, card, or crypto wallet to start trading.",
  },
  {
    title: "Buy or Sell Crypto Instantly",
    description:
      "Trade your favorite cryptocurrencies with just a few clicks.",
  },
  {
    title: "Withdraw or Store Securely",
    description:
      "Withdraw funds or store your crypto safely in your wallet.",
  },
];

export default function Home() {
  return (
    <>
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

    <section className="py-16 bg-white">
      <div className="px-3 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className={ `${sofia.className} font-bold mb-4 text-gray-500 text-2xl`}>How We Work</h2>
          <p
            className={
              "text-2xl md:text-3xl lg:text-5xl font-bold mb-1 tracking-tighter " +
              sofia.className
            }
          >
            Our Seamless 4-Step Process
          </p>
          <p className="text-gray-500 mt-2 lg:w-2/3 mx-auto">
            Follow these simple steps to buy, sell, and securely manage your
            cryptocurrency. Our platform makes trading effortless for everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row lg:justify-between items-center gap-8">
          {/* Left Side – Steps */}
          <div className="space-y-12 md:space-y-16 w-full md:w-1/2">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex relative"
            >
              <div className="absolute left-0">
                <h1 className="text-9xl text-orange-500 opacity-25 select-none">1</h1>
              </div>
              <div className="ml-12">
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " + sofia.className}>
                  Sign Up & Verify Your Account
                </h3>
                <p className="text-gray-500 lg:w-[80vh]">
                  Create your account and complete verification <br />to start trading securely.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex relative"
            >
              <div className="absolute left-0">
                <h1 className="text-9xl text-orange-500 opacity-25 select-none">2</h1>
              </div>
              <div className="ml-12">
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " + sofia.className}>
                  Deposit Funds
                </h3>
                <p className="text-gray-500 lg:w-[80vh]">
                  Add funds via bank, card, or crypto wallet to start trading.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex relative"
            >
              <div className="absolute left-0">
                <h1 className="text-9xl text-orange-500 opacity-25 select-none">3</h1>
              </div>
              <div className="ml-12">
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " + sofia.className}>
                  Buy or Sell Crypto Instantly
                </h3>
                <p className="text-gray-500 lg:w-[80vh]">
                  Trade your favorite cryptocurrencies with just a few clicks.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex relative"
            >
              <div className="absolute left-0">
                <h1 className="text-9xl text-orange-500 opacity-25 select-none">4</h1>
              </div>
              <div className="ml-12">
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " + sofia.className}>
                  Withdraw or Store Securely
                </h3>
                <p className="text-gray-500 lg:w-[80vh]">
                  Withdraw funds or store your crypto safely in your wallet.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side – Image */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <Image
              src="/bitcoin.jpg"
              alt="Crypto trading process illustration"
              width={800}
              height={1200}
              className="object-cover object-center rounded-xl shadow-lg h-64 md:h-[60vh] w-[100vh]"
            />
          </div>
        </div>
      </div>
    </section>

<section className="py-16 bg-gray-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`${sofia.className} text-2xl font-bold mb-12`}>What Our Users Say</h2>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user1.jpg"
                alt="Jane Doe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "This platform makes buying and selling crypto incredibly easy!"
            </p>
            <h3 className="font-semibold mb-1">Jane Doe</h3>
            <div className="flex gap-1 justify-center text-yellow-400">
              ★★★★★
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user2.jpg"
                alt="John Smith"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Fast transactions and excellent support. Highly recommend!"
            </p>
            <h3 className="font-semibold mb-1">John Smith</h3>
            <div className="flex gap-1 justify-center text-yellow-400">★★★★</div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user3.jpg"
                alt="Alice Johnson"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Low fees and a very user-friendly interface. Love it!"
            </p>
            <h3 className="font-semibold mb-1">Alice Johnson</h3>
            <div className="flex gap-1 justify-center text-yellow-400">★★★★★</div>
          </motion.div>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory px-2">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md flex-shrink-0 w-80 snap-start flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user1.jpg"
                alt="Jane Doe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "This platform makes buying and selling crypto incredibly easy!"
            </p>
            <h3 className="font-semibold mb-1">Jane Doe</h3>
            <div className="flex gap-1 justify-center text-yellow-400">★★★★★</div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md flex-shrink-0 w-80 snap-start flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user2.jpg"
                alt="John Smith"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Fast transactions and excellent support. Highly recommend!"
            </p>
            <h3 className="font-semibold mb-1">John Smith</h3>
            <div className="flex gap-1 justify-center text-yellow-400">★★★★</div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-md flex-shrink-0 w-80 snap-start flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src="/user3.jpg"
                alt="Alice Johnson"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-4">
              "Low fees and a very user-friendly interface. Love it!"
            </p>
            <h3 className="font-semibold mb-1">Alice Johnson</h3>
            <div className="flex gap-1 justify-center text-yellow-400">★★★★★</div>
          </motion.div>
        </div>
      </div>
    </section>


         <motion.section
      className="flex justify-center items-center py-8 px-3 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className={`${sofia.className} mt-4 mb-5 text-2xl md:text-4xl font-bold text-center text-orange-600 `}>
          Let's Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form container */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 md:p-12">
          {/* Form */}
          <form className="space-y-6 text-gray-800 w-full">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="m21.854 2.147-10.94 10.939"/>
              </svg>
            </button>
          </form>

          {/* Optional Right Content */}
          <div className="hidden md:flex items-center justify-center">
            {/* Add an image, map, or contact info here */}
          </div>
        </div>
      </div>
    </motion.section>

    </>
  );
}
