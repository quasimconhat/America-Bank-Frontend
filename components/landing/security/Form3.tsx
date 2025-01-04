import Link from 'next/link';
import React from 'react';
import keyImage from "@/public/assets/security/key-section.jpg"

const items = [
    {
        image: '/assets/security/security.png',
        title: 'Take your security to the next level',
        link: [
            {
                description: "",
                link: "Learn more about managing your security",
                url: "/learn-more"
            },
            {
                description: "",
                link: "Log in now and manage your security",
                url: "/log-in"
            }
        ]
    },
    {
        image: '/assets/security/key.svg',
        title: 'Set your privacy choices',
        link: [
            {
                description: "You control how we market to you and share your information. ",
                link: "Set your privacy choices now",
                url: "/privacy-choice"
            },
            {
                description: "Opt back in to promotional emails.",
                link: "Update your email preferences",
                url: "/update-email"
            }
        ]
    },
    {
        image: '/assets/security/ring.svg',
        title: 'Manage Alerts',
        link: [
            {
                description: "Know when irregular card activity or changes take place on your account.",
                link: "",
                url: ""
            },
            {
                description: "",
                link: "Log in and manage your alerts",
                url: "/log-in"
            }
        ]
    },
];

const Form3 = () => {
    return (
        <div className="py-[10%]">
            {/* Part 1: Red background */}
            <div className="relative">
                <img src={keyImage.src} alt="Top Image" className="w-full" />
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/3 -translate-y-1/2 ">
                    <h2 className="text-6xl py-4 text-white font-bold">Our Online & Mobile Security Guarantee</h2>
                    <p className="text-white text-2xl">You’re never liable for unauthorized purchases or</p>
                    <p className="text-white text-2xl">transactions—as long as they’re reported promptly.</p>
                    <div className="py-4">
                        <button className="bg-blue-500 text-white text-2xl p-4 rounded-2xl">Get Complete details</button>
                    </div>
                </div>
            </div>

            {/* Part 2: White background */}
            <div className="bg-white flex py-[5%]">
                {items.map((item, index) => (
                    <div key={index} className="w-1/3 flex justify-center items-start mb-4">
                        <div className="w-[10%]">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="w-[80%] pl-2">
                            <h3 className="text-2xl font-bold p-4">{item.title}</h3>
                            <div className=" p-4">
                                {item.link.map((desc, idx) => (
                                    <div key={idx} className="">
                                        <p className="text-gray-600">{desc.description}</p>
                                        <Link href={desc.url} className="text-blue-500">{desc.link}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Form3;

