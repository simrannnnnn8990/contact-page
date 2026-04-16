"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({});

  // handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 font-semibold mb-4">CONTACT US</p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Let’s create something
            <br /> great together.
          </h1>

          <p className="text-gray-500 mt-6 text-lg">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p>📍 Noida, India</p>
            <p>✉️ info@example.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send a message
          </h2>

          <div className="space-y-4">

            {/* INPUTS */}
            {["name", "email", "subject"].map((field, i) => (
              <motion.input
                key={i}
                name={field}
                placeholder={`Your ${field}`}
                onChange={handleChange}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition"
              />
            ))}

            {/* TEXTAREA */}
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              onChange={handleChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit Inquiry 
            </motion.button>

          </div>
        </motion.div>

      </div>

    </div>
  );
}