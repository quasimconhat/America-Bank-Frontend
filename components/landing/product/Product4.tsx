"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";

const products = [
  {
    title: "AI-Powered Risk Assessment",
    description: "AIBuildIQ's AI-powered platform automates borrower risk evaluation and underwriting process",
    image: "/assets/product4/1.jpg"
  },
  {
    title: "Loan Portfolio Creation",
    description: "AIBuildIQ enables lenders to create ready-made lan portfolios that meet the specific creteria of institutional investors.",
    image: "/assets/product4/2.jpg"
  },
  {
    title: "Custom Draw Schedules for Construction Loans",
    description: "Lenders can use AIBuildIQ to set up custom draw schedules for construction loans, ensuring that funds are released at critical construction milestones.",
    image: "/assets/product4/3.jpg"
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
          For Lenders:
          </h2>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <Card index={index} service={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
