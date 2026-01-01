"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Process() {
  return (
 

    <section className="py-16 bg-white">
      <div className="px-3 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className=" font-bold mb-4 text-gray-500 text-2xl">How We Work</h2>
          <p
            className={
              "text-2xl md:text-3xl lg:text-5xl font-bold mb-1 tracking-tighter " 
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
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " }>
                  Sign Up & Verify Your Account
                </h3>
                <p className="text-gray-500 lg:w-[80vh]">
                  Create your account and complete verifications <br />to start trading securely.
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
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " }>
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
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " }>
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
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold " }>
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
              src="/Bitcoin.jpg"
              alt="Crypto trading process illustration"
              width={800}
              height={1200}
              className="object-cover object-center rounded-xl shadow-lg h-64 md:h-[60vh] w-[100vh]"
            />
          </div>
        </div>
      </div>
    </section>
    )}