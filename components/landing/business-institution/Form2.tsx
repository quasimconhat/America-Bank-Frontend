"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const items1 = [
    {
        image: "assets/business-institution/1.jpg",
        date: "OCTOBOR 2024",
        title: "Is the silver streak still on track?",
        description: "Older generations’ spending growth appears to be easing as retiree income slows.",
        read_time: "3"
    },
    {
        image: "assets/business-institution/2.jpg",
        date: "",
        title: "How to harness the potential — and reduce the risks — of AI",
        description: "Artificial intelligence (AI) and machine learning capabilities have taken a big jump forward, yet true intelligence is still to come. Understanding the technology’s potential cyber threat is key to protecting your business, now and in the future.",
        read_time: "8"
    }
];

const items2 = [
    {
        image: "assets/business-institution/3.jpg",
        date: "",
        title: " Navigating an Uncertain Rate Environment ",
        description: "Operating a business in an uncertain rate environment may feel daunting to corporate treasurers. It’s important to assess your current situation, and make adjustments to gain better control over liquidity and minimize risk.",
        read_time: "5"
    },
    {
        image: "assets/business-institution/4.jpg",
        date: "",
        title: " See the latest from Bank of America Institute ",
        description: "Uncovering powerful insights that move business and society forward.",
        read_time: ""
    },
    {
        image: "assets/business-institution/5.jpg",
        date: "",
        title: " Bank of America Triangle Innovation Summit ",
        description: "A gathering of industry leaders in North Carolina’s research triangle",
        read_time: ""
    }
];

const items3 = [
    {
        image: "assets/business-institution/6.png",
        date: "B of A GLOBAL RESEARCH",
        title: " Global trends need global vision ",
        description: "Each week, our analysts discuss what’s emerging in global markets on the Global Research Unlocked™ podcast. Listen here.",
        read_time: ""
    },
    {
        image: "assets/business-institution/7.jpg",
        date: "",
        title: " Themes from The Global Investor Summit Rome 2024 ",
        description: "Inspiring thought leaders share insights about themes including sustainable growth, central banking and Europe’s path to revival.",
        read_time: ""
    },
    {
        image: "assets/business-institution/8.jpg",
        date: "B of A GLOBAL RESEARCH",
        title: " Must Read Research ",
        description: "What you should know from the past week",
        read_time: ""
    }
];

const Component = () => {
    return (
        <div className="flex flex-col px-[10%] bg-gray-100 mt-10">
            {/* First part: Title and 2 buttons in line */}
            <div className="flex justify-between items-center py-4 px-[20%]">
                <h2 className="text-lg font-bold m-4">What can we help you with?</h2>
                <div className="flex space-x-4">
                    <button className="bg-white text-black px-4 py-2 rounded-2xl border border-black shadow-md hover:bg-[#012169] shadow-lg transition-all duration-300 ">
                        Managing Business
                    </button>
                    <button className="bg-white text-black px-4 py-2 rounded-2xl border border-black shadow-md hover:bg-[#012169] shadow-lg transition-all duration-300 ">
                        Institutional Investing
                    </button>
                </div>
            </div>

            {/* Second part: 2 card box */}
            <div className="flex flex-wrap justify-center">
                {items1.map((item) => (
                    <div key={item.date} className="w-full  md:w-1/2 xl:w-1/2 p-4">
                        <div className="rounded-md shadow-md h-[40vh] p-4 relative">
                            <Image src={`/${item.image}`} alt="Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="h-[40vh] px-[10%] bg-white py-8 relative">
                            <p className="text-gray-600 text-sm p-2">{item.date}</p>
                            <h3 className="text-lg font-bold p-2">{item.title}</h3>
                            <p className="text-gray-600 text-xl p-2">{item.description}</p>
                            {item.read_time && (
                                <div className="flex justify-between items-center absolute bottom-[10%] w-full">
                                    <p className="text-gray-600 text-sm">{item.read_time} min read</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Third part: 3 card box */}
            <div className="flex flex-wrap justify-center">
                {items2.map((item) => (
                    <div key={item.date} className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <div className="rounded-md shadow-md h-[40vh] p-4 relative">
                            <Image src={`/${item.image}`} alt="Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="h-[40vh] px-[10%] bg-white py-8 relative">
                            <p className="text-gray-600 text-sm p-2 ">{item.date}</p>
                            <h3 className="text-lg font-bold p-2">{item.title}</h3>
                            <p className="text-gray-600 text-xl p-2">{item.description}</p>
                            {item.read_time && (
                                <div className="flex justify-between items-center absolute bottom-[10%] w-full">
                                    <p className="text-gray-600 text-sm">{item.read_time} min read</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Fourth part: 3 card box */}
            <div className="flex flex-wrap justify-center">
                {items3.map((item) => (
                    <div key={item.date} className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <div className="rounded-md shadow-md h-[40vh] p-4 relative">
                            <Image src={`/${item.image}`} alt="Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="h-[40vh] px-[10%] bg-white py-8 relative">
                            <p className="text-gray-600 text-sm p-2">{item.date}</p>
                            <h3 className="text-lg font-bold p-2">{item.title}</h3>
                            <p className="text-gray-600 text-xl p-2">{item.description}</p>
                            {item.read_time && (
                                <div className="flex justify-between items-center absolute bottom-[10%] w-full">
                                    <p className="text-gray-600 text-sm">{item.read_time} min read</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Component;

