"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Active Users", value: "2M+" },
    { label: "Countries", value: "150+" },
    { label: "Transactions", value: "$50B+" },
  ];

  return (
    <section
    
    id="about"
    className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-200 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-orange-400"></span>
              <span className="text-orange-400 font-bold uppercase tracking-wider text-sm">Who We Are</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Driving the Future of <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-orange-400 to-black bg-clip-text text-transparent">Digital Finance</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are building the most secure and intuitive crypto platform for the world. 
              Our mission is to democratize access to financial services, making it easy 
              for anyone, anywhere, to invest in their future.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: ShieldCheck, text: "Bank-grade security protocols" },
                { icon: Zap, text: "Lightning fast transactions" },
                { icon: Globe, text: "Global compliance & coverage" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <item.icon size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="group bg-orange-400 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all hover:gap-4">
              Learn More About Us
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Right Column: Visuals/Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            
<div className="relative rounded-2xl overflow-hidden border-4 border-white h-[500px]">
  {/* Image */}
  <Image
    src="/abb.jpg"
    alt="About cover"
    fill
    priority
    className="object-cover"
  />
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
