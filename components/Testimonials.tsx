"use client";
import { motion } from "framer-motion";


export default function Testimonials() {
  return (


<section className="py-16 bg-gray-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className=" text-2xl font-bold mb-12">What Our Users Say</h2>

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
            className="bg-white p-6 rounded-xl shadow-md shrink-0 w-80 snap-start flex flex-col items-center text-center"
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
            className="bg-white p-6 rounded-xl shadow-md shrink-0 w-80 snap-start flex flex-col items-center text-center"
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
            className="bg-white p-6 rounded-xl shadow-md shrink-0 w-80 snap-start flex flex-col items-center text-center"
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


   

    
  );
}
