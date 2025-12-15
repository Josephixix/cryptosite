"use client";

import Image from "next/image";
import Link from "next/link";
import { Sofia_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { u } from "motion/react-client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";


const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export default function Home() {
  return (
    <>
    <Hero/>

 <About/>

<Process/>

<Testimonials/>

<Contact/>

    </>
  );
}
