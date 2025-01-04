import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/assets/Logo.jpg'
import topImage from '@/public/assets/security/topImage.webp'
import { Box } from '@/components/ui/box'

const Form = () => {
  return (
    <div className="bg-white">
      <nav className="bg-white">
        <div className="flex px-[15%] p-2 justify-start">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={200} height={80} style={{ height: '45px', objectFit: 'cover', objectPosition: 'center' }} />
          </Link>

          <h2 className="text-gray-300 text-2xl">Privacy & Security</h2>
        </div>
        <div className="bg-red-600 px-[10%] py-4 flex justify-between items-center">
          <h2 className="text-4xl text-white  font-bold">Bank of America Security Center</h2>
        </div>
      </nav>
      <div className="relative">
        <img src={topImage.src} alt="Top Image" className="w-full" />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/3 -translate-y-1/2 bg-white rounded-lg shadow-lg">
          <Box
            width="w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]"
            height="h-auto min-h-[30vh] sm:h-[25vh] md:h-[20vh] lg:h-[15vh]"
            letter1="Security Center"
            letter2="Your security is a top priority. Together we can identify and help prevent fraud and scams."
            active=""
            buttonLetter="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;

