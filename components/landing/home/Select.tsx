"use client";
import React from 'react';
import Image from 'next/image';
import Logo from "@/public/assets/Logo.jpg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const items = ["Checking", "Savings & CDs", "Credit Cards", "Home Loans", "Auto Loans", "Investing", "Better Money Habits®"];

const itemData = [
  {
    top: {
      left: [
        {
          title: "Stay flexible with Bank of America Advantage Banking",
          button: "Explore checking soutions"
        }
      ],
      middle: [
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
      ],
      right: [
        {
          title: "NEW CHCECKING CUSTOMERS",
          image: "/assets/select/1.webp",
          content: "Open an account today",
          link: "/open-account"
        }
      ]
    },
    middle: {
      left: [
        {
          letter: "Online Banking",
          link: "/Online-Banking"
        },
        {
          letter: "Mobile Banking",
          link: "/Mobile-Banking"
        }
      ],
      middle: [
        {
          letter: "Debit Card",
          link: "/Debit-Card"
        }
      ],
      right: [
        {
          title: "NEED TO MEET WITH US?",
          icon: "calendar",
          content: "Schedul an appointment",
          link: "/appointment"
        }
      ]
    },
    bottom: {
      left:
      {
        letter: "Signature Services",
        link: "/signature-services"
      },
      right:
      {
        letter: "Preferred Rewards members can save hundreds in banking fees annually",
        link: "/perfered"
      },
    }
  },
  {
    top: {
      left: [
        {
          title: "Savings made simple and rewarding",
          button: ""
        }
      ],
      middle: [
        {
          title: "Bank of America Advantage Savings",
          content: ""
        },
        {
          title: "CDs",
          content: ""
        },
        {
          title: "IRAs",
          content: ""
        }
      ],
      right: [
        {
          title: "Bank of America Advantage Savings",
          image: "/assets/select/2.webp",
          content: "Open a savings account",
          link: "/open-account"
        }
      ]
    },
    middle: {
      left: [
        {
          letter: "Online Banking",
          link: "/Online-Banking"
        },
        
      ],
      middle: [
        {
          letter: "Mobile Banking",
          link: "/Mobile-Banking"
        }
      ],
      right: [
        {
          title: "NEED TO MEET WITH US?",
          icon: "calendar",
          content: "Schedul an appointment",
          link: "/appointment"
        }
      ]
    },
    bottom: {
      left:
      {
        letter: "Signature Services",
        link: "/signature-services"
      },
      right:
      {
        letter: "Get a 5%-20% savings interest rate booster with Preferred Rewards",
        link: "/perfered"
      },
    }
  },
  {
    top: {
      left: [
        {
          title: "Find the perfect credit card from among our most popular options",
          button: "Shop all credit cards"
        }
      ],
      middle: [
        {
          title: "Cash Back Credit Cards",
          content: ""
        },
        {
          title: "Travel and Airlines Rewards Cards",
          content: ""
        },
        {
          title: "Lower Interest Rate Cards",
          content: ""
        },
        {
          title: "Points Rewards Cards",
          content: ""
        },
        {
          title: "Cards to Build or Rebuild Credit",
          content: ""
        },
        {
          title: "Cards for Students",
          content: ""
        }
      ],
      right: [
        {
          title: "FIND A CREDIT CARD QUICKLY",
          image: "/assets/select/3.webp",
          content: "Check for personalized offers in 30 seconds. Get started",
          link: "/open-account"
        }
      ]
    },
    middle: {
      left: [
        {
          letter: "Manage your credit card account",
          link: "/Online-Banking"
        },
        
      ],
      middle: [
        {
          letter: "Respond to Mail Offer",
          link: "/Mobile-Banking"
        }
      ],
      right: [
        {
          title: "NEED TO MEET WITH US?",
          icon: "calendar",
          content: "Schedul an appointment",
          link: "/appointment"
        }
      ]
    },
    bottom: {
      left:
      {
        letter: "Signature Services",
        link: "/signature-services"
      },
      right:
      {
        letter: "Earn a 25%-75% rewards bonus on eligible credit cards with Preferred Rewards",
        link: "/perfered"
      },
    }
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
                  onClick={() => {/* Add search functionality */ }}
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
                <div className="flex flex-col space-y-8">
                  {/* Top row with 3 columns */}
                  <div className="grid grid-cols-3">
                    <div className="p-6 border-b border-gray-200">
                      {itemData[activeItem].top.left.map((dataItem, index) => (
                        <div key={index}>
                          <h3 className="text-xl mb-4">{dataItem.title}</h3>
                          {dataItem.button && (
                            <button className="text-white font-bold rounded-2xl px-4 py-4 bg-blue-600 hover:underline">
                              {dataItem.button}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-6 border-b border-gray-200">
                      {itemData[activeItem].top.middle.map((dataItem, index) => (
                        <div key={index} >
                          <h3 className="text-lg text-blue-500 font-semibold mb-2">{dataItem.title}</h3>
                          <p className="text-gray-600">{dataItem.content}</p>
                        </div>
                      ))}
                    </div>
                    <div className="ml-[10%]">
                      {itemData[activeItem].top.right.map((dataItem, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-lg font-semibold mb-2">{dataItem.title}</h3>
                          {dataItem.image && (
                            <Image
                              src={dataItem.image}
                              alt={dataItem.title}
                              width={200}
                              height={150}
                              className="my-2"
                            />
                          )}
                          <Link href={dataItem.link} className="text-blue-500 hover:underline block mt-2">
                            {dataItem.content}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Middle row with 3 columns */}
                  <div className="grid grid-cols-3 ">
                    <div className="p-6 border-b border-gray-200">
                      {itemData[activeItem].middle.left.map((dataItem, index) => (
                        <div key={index}>
                        <Link  href={dataItem.link} className="text-blue-500 hover:underline">
                          {dataItem.letter}
                        </Link>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 border-b border-gray-200">
                      {itemData[activeItem].middle.middle.map((dataItem, index) => (
                        <div key={index}>
                          <Link  href={dataItem.link} className="text-blue-500 hover:underline block">
                            {dataItem.letter}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="border-b border-gray-200">
                      {itemData[activeItem].middle.right.map((dataItem, index) => (
                        <div key={index} className="p-4 bg-white items-start rounded-lg shadow-md ml-[10%] ">
                          <h3 className="text-lg font-semibold mb-2">{dataItem.title}</h3>
                          {dataItem.icon === 'calendar' &&
                            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          }
                          <Link href={dataItem.link} className="text-blue-500 hover:underline inline-block">
                            {dataItem.content}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom row with 2 columns */}
                  <div className="flex">
                    <div className="p-6 w-[33%]">
                      <Link href={itemData[activeItem].bottom.left.link} className="text-blue-500 hover:underline">
                        {itemData[activeItem].bottom.left.letter}
                      </Link>
                    </div>
                    <div className="p-6 w-[66%]">
                      <Link href={itemData[activeItem].bottom.right.link} className="text-blue-500 hover:underline">
                        {itemData[activeItem].bottom.right.letter}
                      </Link>
                    </div>
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
