"use client"
import Image from "next/image";
import Link from "next/link";

const imageList = [
  {
    backgroundImage: "/assets/small-business/resources/assets-images-site-homepage-bmh-module-smallbusiness-default-Box_2_319x363_vf-CSX3378a382.jpg",
    title: "Financial Solutions",
    description: "Useul tools to help start your business",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-box1_icon-CSXdcbdad5a.svg"
  },
  {
    backgroundImage: "/assets/small-business/resources/assets-images-site-homepage-bmh-module-smallbusiness-default-box1-319x363-CSXc57d025.jpg", 
    title: "Investment Planning",
    description: "4 tips to build a business credit profile",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-bofa_icon_video2_blk-CSXa391b871.svg"
  },
  {
    backgroundImage: "/assets/small-business/resources/assets-images-site-homepage-bmh-module-smallbusiness-default-Box_3_319x363_vf-CSX74ec4499.jpg",
    title: "Digital Banking",
    description: "Smart ways to reduce overhead costs",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-bofa_icon_document2_blk-CSX88d66f84.svg"
  },
  {
    backgroundImage: "/assets/small-business/resources/assets-images-site-homepage-bmh-module-smallbusiness-default-Box_4_319x363_vf-CSX53eec819.jpg",
    title: "Digital Banking",
    description: "How to start accepting online paments",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-bofa_icon_document2_blk-CSX88d66f84.svg"
  }
];

const Form3 = () => {
  return (
    <div className="flex flex-col w-full bg-gray-100 py-12">
      {/* Top Section */}
      <div className="text-center px-8 mb-12">
        <h2 className="text-8xl font-bold mb-4">Resources to move your business forward</h2>
      </div>

      {/* Middle Section - Image List */}
      <div className="relative bg-[#f3f4f6]" style={{
        clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
      }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-16">
          {imageList.map((item, index) => (
            <div key={index} className="relative h-[400px] rounded-lg overflow-hidden group">
              <Image
                src={item.backgroundImage}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 height-[20%] flex left-0 right-0 p-6 bg-gray-300">
                {/* <h3 className="text-white text-2xl font-semibold mb-2">{item.title}</h3> */}
                <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                />
                <p className="text-white/90 px-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center px-8 mt-12">
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Explore more topics and build your financial know‑how.
        </p>
        <Link 
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Visit Better Money Habits&reg;
        </Link>
      </div>
    </div>
  );
};

export default Form3;

