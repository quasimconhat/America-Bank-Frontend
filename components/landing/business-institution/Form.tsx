"use client";
import Image from 'next/image';
import Logo from "@/public/assets/Logo.jpg";
import backBusiness from "@/public/assets/business-institution/WEB-04-24-0129-articlemasthead_1440x380.jpg";
import Link from 'next/link';
import { Box } from "@/components/ui/box";
import React, {useState} from 'react';

const buttons = [
    {
        id: 1,
        name: "Who we serve",
        left: [
            {

            }
        ],
        middle: [
            {

            }
        ],
        right: [
            {

            }
        ]
    },
    {
      id: 2,
      name: "Solutions",
      left: [
          {

          }
      ],
      middle: [
          {

          }
      ],
      right: [
          {

          }
      ]
  },
  {
    id: 3,
    name: "Research & insights",
    left: [
        {

        }
    ],
    middle: [
        {

        }
    ],
    right: [
        {

        }
    ]
  },
  {
    id: 4,
    name: "Global Presense",
    left: [
        {

        }
    ],
    middle: [
        {

        }
    ],
    right: [
        {

        }
    ]
  }
]

const Form = () => {

  const [showDropdown, setShowDropdown] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Top layer */}
      <div className="flex px-[15%] p-2 justify-start">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={80} style={{ height: '45px', objectFit: 'cover', objectPosition: 'center' }} />
        </Link>
        <div className="flex flex-wrap justify-center">
          {buttons.map((item) => (
            <div key={item.id} className="m-2" onMouseEnter={() => setShowDropdown(item.id)} onMouseLeave={() => setShowDropdown(0)}>
              <button className="dropdown-button">
                {item.name}
                <ul className={`dropdown-content ${showDropdown === item.id ? 'show' : ''}`}>
                  {/* {item.children.map((child) => (
                    <li key={child.id}>
                      <a href={child.href}>{child.name}</a>
                    </li>
                  ))} */}
                </ul>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom layer */}
      <div className="bg-gray-500 p-4 px-[15%] ">
        <h2 className="text-white text-lg">Business & Institutions</h2>
      </div>

      <div className="relative">
        <div className="w-full h-[50vh]">
          <Image
            src={backBusiness.src}
            alt="header"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            style={{clipPath: 'inset(0 0 10% 0)'}}
          />
          
        </div>
        <div className="absolute inset-0 flex m-auto items-end ml-[50%] px-4 sm:px-8 md:px-8 lg:px-12">
          <Box
            width="w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]"
            height="h-auto min-h-[30vh] sm:h-[25vh] md:h-[20vh] lg:h-[15vh]"
            letter1="Next Gen Tech Series"
            letter2="Bank of America Institute’s Next Gen Tech series focuses on sharing 30 breakthrough technologies that will transform the world. Subscribe to Bank of America Institute to receive updates when new topics are available."
            active=""
            buttonLetter="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;