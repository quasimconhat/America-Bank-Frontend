"use client";
import React from 'react';
import Image from 'next/image';
import Logo from "@/public/assets/Logo.jpg";
import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";

const items = ["Checking", "Savings & CDs", "Credit Cards", "Payments & Services", "Lending", "Investing", "Center for Business Empowerment"];

const itemData = [
  {
    left: [
      {
        layer: 2,
        data : [
          {
            title: "Stay flexible with Bank of America Advantage Banking",
            button: "Explore checking soutions"
          },
          {
            layer: 2,
            data: [
              {letter: "Online Banking", link: "/Online-Banking"},
              {letter: "Mobile Banking", link: "/Mobile-Banking"}
            ]
          }
        ]
      }
    ],
    middle: [
      {
        layer: 2,
        data: [
          {
            layer: 3,
            data: [
              {
                title: "Bank of America Advantage Banking",
                content: "An account that gives you more options"
              },
              {
                title: "Student Banking",
                content: "Ready to go wherever you go..."
              },
              {
                title: "Business Checking",
                content: "Convenient checking solutions to fit your unique business needs"
              }
            ]
          },
          {
            layer: 1,
            data: [
              {title: "Debit Card", link: "/Debit-Card"}
            ]
          }
        ]
      }
    ],
    right_top: [
      {
        layer: 3,
        data: [
          {
            title: "NEW CHCECKING CUSTOMERS",
            image: "/assets/Select/checking.png",
            content: "Open an account today",
            link: "/open-account"
          }
        ]
      }
    ],
    right_bottom: [
      {
        layer: 2,
        data: [
          {
            title: "NEED TO MEET WITH US?",
            icon: "calendar",
            content: "Schedul an appointment",
            link: "/appointment"
          }
        ]
      }
    ]
  }
]
const Select = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeItem, setActiveItem] = useState(-1);
  const [previousItem, setPreviousItem] = useState(-1);

  return (
    <>
    <div className="flex justify-between items-center py-2 px-2 sm:px-8 md:px-112 lg:px-16">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={80} style={{ height: '45px', objectFit: 'cover', objectPosition: 'center' }} />
        </Link>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-4 mt-5">
          <div className="relative">
            {isSearchActive ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black animate-slide-left"
                  autoFocus
                  onBlur={() => setIsSearchActive(false)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 transition-all duration-300"
                  onClick={() => {/* Add search functionality */}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                onClick={() => setIsSearchActive(true)}
              >
                <span className="mr-2">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>
          
        </div>
    </div>
    <div className="w-full">
      <div className="flex flex-wrap justify-between mx-10">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <motion.button
              className="text-black text-[30px] px-4 py-2 rounded-md mb-2 flex-grow mx-1 hover:text-blue-500 transition-colors duration-200 relative"
              onClick={() => {
                if (activeItem === index) {
                  setPreviousItem(-1);
                  setActiveItem(-1);
                } else {
                  setPreviousItem(activeItem);
                  setActiveItem(index);
                }
                
              }}
              whileHover="hover"
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        ))}
      </div>
      {activeItem > -1 && (activeItem !== previousItem) && (
        <motion.div
        key={activeItem}
        className=" bg-gray-100"
        initial={{ opacity: 0, y: activeItem > previousItem ? -50 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: activeItem > previousItem ? 50 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-100 p-4 rounded-md shadow-md relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setActiveItem(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="left-column">
                {itemData[activeItem].left.map((item, index) => (
                  <div key={index}>

                        {item.data.map((dataItem, dataIndex) => (
                          <div key={dataIndex}>
                            {dataItem.button && (
                              <button className="text-white font-boldrounded px-4 py-4 bg-blue-500 hover:underline">
                                {dataItem.button}
                              </button>
                            )}
                            {dataItem.data && (
                              <ul className="list-disc list-inside">
                                {dataItem.data.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link href={subItem.link} className="text-blue-500 hover:underline">
                                      {subItem.letter}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                  </div>
                ))}
              </div>
              
            </div>
          </motion.div>
        </div>
      </motion.div>
      )}
    </div>
    </>
    
  );
};

export default Select;
