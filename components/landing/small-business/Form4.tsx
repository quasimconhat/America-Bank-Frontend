"use client"
import Image from 'next/image';
import Link from 'next/link';
import backImage1 from "@/public/assets/offer/assets-images-site-homepage-news-life-services-yni_sec_phone_4657392_e-CSX8c7d2691.webp";
import backImage2 from "@/public/assets/offer/new_erica2-341d65d6339868a608e0.png";
import bottomImage from "@/public/assets/offer/mb_yni_bb_3034668_1440-4d2b065272ea1845378f.jpg";

const Form4 = () => {
  return (
    <div className="flex flex-col w-full py-12">
      {/* Top Section */}
      <div className="text-center px-8 mb-12">
        <h2 className="text-4xl font-bold mb-4">Your news and information</h2>
      </div>

      {/* Middle Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col p-[20%] w-[100%]">
          <h1 className="text-5xl font-bold p-2 mb-4">Level up your account security</h1>
          <p className="text-gray-600 p-4 ">Watch your security meter rise as you take action against fraud. See it in the Security Center in Mobile and Online Banking.</p>
          <Link 
            href="/check-level"
            className="inline-block p-2 text-center w-[30%] bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Check your level
          </Link>
        </div>
        <div className="relative px-[25%] w-[50%] flex justify-center items-center h-[400px] p-4 rounded-lg overflow-hidden">
          <Image
            src={backImage1.src}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-cover bg-center" style={{ backgroundImage: `url(${bottomImage.src})` }}>
        <div className="flex flex-col p-[20%] w-[80%]">
          <p className="text-gray-600 text-4xl p-4">Secure, convenient banking with our Mobile app</p>
          <Link 
            href="/explore-app"
            className="inline-block w-[50%] text-center p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore our app
          </Link>
        </div>
        <div className="relative px-[25%] w-[50%] flex justify-center items-center h-[400px] py-2 rounded-lg overflow-hidden">
          <Image
            src={backImage2.src}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Form4;

