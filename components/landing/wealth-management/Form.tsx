"use client"
import Image from 'next/image';
import Logo from "@/public/assets/Logo.jpg";
import backWealth from "@/public/assets/wealth-management/MH-Widescreen-1440x380.jpg";
import Link from 'next/link';
import { Box } from "@/components/ui/box";

const Form = () => {
  return (
    <div className="flex flex-col">
      {/* Top layer */}
      <div className="flex px-[15%] p-2 justify-start">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} height={80} style={{ height: '45px', objectFit: 'cover', objectPosition: 'center' }} />
        </Link>
      </div>
      {/* Bottom layer */}
      <div className="bg-red-500 p-4 px-[15%] ">
        <h2 className="text-white text-lg">Wealth Management</h2>
      </div>

      <div className="relative">
        <div className="w-full h-[70vh]">
          <Image
            src={backWealth.src}
            alt="header"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            style={{clipPath: 'inset(0 0 10% 0)'}}
          />
          
        </div>
        <div className="absolute inset-0 flex m-auto items-end px-4 sm:px-8 md:px-8 lg:px-12">
          <Box
            width="w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]"
            height="h-auto min-h-[30vh] sm:h-[25vh] md:h-[20vh] lg:h-[15vh]"
            letter1="Investment solutions designed for you"
            letter2="With Bank of America banking and Merrill investing offering a range of solutions to help you manage your wealth, Find the investment approach that fits your needs."
            active=""
            buttonLetter="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;