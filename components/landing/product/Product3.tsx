"use client";
import React from 'react';
import { motion } from "framer-motion";
import Toggle from '@/components/ui/toggle';

const products = [
  {
    title: "AI-Powered loan origination",
    description: "Transform your loan origination process with AI-driven efficiency.",
    image: "/assets/product3/1.jpg"
  },
  {
    title: "Automated underwriting system",
    description: "Revolutionize underwriting with machine learning efficiency.",
    image: "/assets/product3/2.jpg"
  },
  {
    title: "Risk assessment analytics",
    description: "Enhance your lending strategy with predictive risk analytics.",
    image: "/assets/product3/3.jpg"
  },

];

const Products = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-800"
      id="products"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#0256c5] text-lg font-semibold mb-2">
          PRODUCT LINE
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          For Borrowers:
          </h2>
        </motion.div>

        {products.map((product, index) => (
          <Toggle 
          key={index}
          title={product.title}
          description={product.description}
          imageSrc={product.image}
          imageAlt={product.title}
          />
        ))}

      </div>
    </motion.section>
  );
};

export default Products;
