"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ToggleProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Toggle: React.FC<ToggleProps> = ({ title, description, imageSrc, imageAlt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto mt-3">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <span className='flex flex-row justify-between items-center'>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-8 h-8 rounded-full transition duration-300 ml-4 flex items-center justify-center"
            >
                {isOpen ? (
                    <div className="w-4 h-0.5 bg-white"></div>
                ) : (
                    <div className="relative w-4 h-4">
                        <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white"></div>
                        <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-white"></div>
                    </div>
                )}
            </button>
          </span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-gray-100"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Toggle;
