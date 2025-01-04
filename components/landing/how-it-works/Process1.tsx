"use client"
import Image from "next/image";
import step1 from "@/public/assets/how-it-works/1.jpg"
import step2 from "@/public/assets/how-it-works/2.jpg"

const Process1 = () => {
  return (
    <section className="container mx-auto px-4 mt-16 sm:px-6 lg:px-8">
      {/* First Column */}
      <div className="mb-16 text-left">
        <p className="text-[#0256c5] mb-4 font-bold">Simplifying Lending: A Step-by-Step Approach</p>
        <h2 className="text-4xl font-bold">Overview of Our Process</h2>
      </div>

      {/* Second Column */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
            src={step1.src}
            alt="Analysis illustration"
            width={500}
            height={300}
            style={{ height: '50vh', width: '100vw' }}
            className="transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl text-gray-800 font-bold mb-4">Step 1: Input Borrower Details</h3>
          <p className="text-gray-600 text-[1.3rem]">
          In this first step, borrowers provide essential information such as income, credit history, property details, and loan requirements. Our user-friendly intake form ensures that the data collection process is quick and efficient. By capturing accurate borr...
          </p>
        </div>
      </div>

      {/* Third Column */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-gray-800 text-2xl font-bold mb-4">Step 2: AI Analyzes Data</h3>
          <p className="text-gray-600 text-[1.3rem]">
          Once the borrower details are submitted, our advanced AI algorithms go to work. The system analyzes the borrower’s financial profile, loan requirements, and market data to identify the best possible loan options. By comparing a wide range of lenders and lo...
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={step2.src}
            alt="Analysis illustration"
            width={500}
            height={300}
            style={{ height: '50vh', width: '100vw' }}
            className="transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          />
        </div>        
      </div>
    </section>
  );
};

export default Process1;
