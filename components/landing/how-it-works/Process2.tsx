"use client"
import Image from "next/image";
import step1 from "@/public/assets/how-it-works/1.jpg"
import step2 from "@/public/assets/how-it-works/2.jpg"

const Process2 = () => {
  return (
    <section className="container mx-auto px-4 mt-16 sm:px-6 lg:px-8">
      {/* First Column */}
      <div className="mb-16 text-left">
        <p className="text-[#0256c5] mb-4 font-bold">SIMPLIFYING LENDING: A STEP-BY-STEP APPROACH</p>
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
          <h3 className="text-2xl text-gray-800 font-bold mb-4">Step 3: Instant Loan Matches</h3>
          <p className="text-gray-600 text-[1.3rem]">
          After analyzing the borrower’s information, AIBuildIQ instantly generates a curated list of loan options from our network of trusted lenders. These matches are specifically tailored to the borrower’s financial profile and loan preferences, ensuring they r...
          </p>
        </div>
      </div>

      {/* Third Column */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-gray-800 text-2xl font-bold mb-4">Step 4: Quick Approval and Funding</h3>
          <p className="text-gray-600 text-[1.3rem]">
          Once a borrower selects their preferred loan option, AIBuildIQ streamlines the approval process by ensuring all necessary documentation is in place. Our partnerships with leading lenders allow for quick decision-making, so borrowers can receive approvals ...
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

export default Process2;
