import React from 'react'
import { motion } from "framer-motion";
import { Sparkles, Cpu, Lightbulb, ShoppingCart } from "lucide-react";

const About = () => {
  return (

    <section className="px-6 lg:px-24 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Book  Shop</span>
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to <strong>Book Shop</strong> — a next-generation
          platform where technology meets shopping. Our AI-powered system
          learns your preferences, suggests smarter products, and ensures an
          effortless experience every time you visit.
        </motion.p>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[
            {
              icon: <Sparkles className="h-10 w-10 text-blue-500" />,
              title: "Smart Recommendations",
              desc: "Our AI analyzes your behavior to recommend products you’ll love — no more endless searching.",
            },
            {
              icon: <Cpu className="h-10 w-10 text-purple-500" />,
              title: "AI-Powered Insights",
              desc: "We use advanced machine learning to predict product trends and customer preferences.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
              title: "Intelligent Search",
              desc: "Find products instantly using natural language search powered by AI understanding.",
            },
            {
              icon: <ShoppingCart className="h-10 w-10 text-green-500" />,
              title: "Seamless Experience",
              desc: "From browsing to checkout — every step is optimized for speed, comfort, and satisfaction.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
            Explore Our AI Features →
          </button>
        </motion.div>
      </div>
    </section>
  
  );
}

export default About











