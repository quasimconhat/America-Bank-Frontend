"user client";
import Image from 'next/image';
import innovationImage from '@/public/assets/Innovation.jpg';

const Innovation = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="innovation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left part */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <p className="text-[#0256c5] text-lg font-semibold mb-2">
              REVOLUTIONIZING LENDING
            </p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                AI-Driven solutions for real estate
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            AIBuildIQ transforms the real estate lending landscape with innovative AI-powered, data-driven solutions that enhance every step of the financing process. By streamlining loan origination, underwriting, and risk assessment, our platform delivers automated insights that boost transparency and minimize errors for borrowers, brokers, and lenders alike. Based in Las Vegas, we empower you to navigate the complexities of real estate financing with confidence and ease.
            </p>
          </div>
          
          {/* Right part */}
          <div className="lg:w-1/2">
            <Image
              src={innovationImage}
              alt="Innovation in Real Estate Finance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
