// components/Reviews.js
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "John Doe",
    feedback: "This company exceeded my expectations with their professionalism and quality.",
    role: "CEO, Acme Corp",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    feedback: "Absolutely stellar experience from start to finish. Highly recommended!",
    role: "Founder, Startup Inc.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Samuel Green",
    feedback: "The team was a pleasure to work with, delivering exceptional results on time.",
    role: "Marketing Head, BigBrand Co.",
    image: "https://via.placeholder.com/150"
  }
];

export function Reviews() {
  return (
    <div className="bg-neutral-900 text-white py-16 px-8 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{review.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
