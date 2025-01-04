"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Personal", href: "/personal" },
    { name: "Small Business", href: "/small-business" },
    { name: "Wealth Management", href: "/wealth-management" },
    { name: "Business & Institutions", href: "/business-institution" },
    { name: "Security", href: "/security" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav>
      <div className="bg-gray-200 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile menu button */}
          {isMobile && (
            <button
              className="text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="text-black hover:text-gray-700 transition-colors duration-200"
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                  </Link>
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right side - buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2  text-black rounded hover:bg-gray-400 transition-colors duration-200">
              Language
            </button>
            <button className="px-4 py-2  text-black rounded hover:bg-gray-400 transition-colors duration-200">
              Contact Us
            </button>
            <button className="px-4 py-2  text-black rounded hover:bg-gray-400 transition-colors duration-200">
              Help
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-black hover:text-gray-700 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
