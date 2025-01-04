"use client"
import Image from "next/image";
import Link from "next/link";

const imageList = [
  {
    backgroundImage: "/assets/offer/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_6624682_397_en_gc_01-CSXba2526bf.jpg",
    title: "Financial Solutions",
    description: "Help me decide: Should I pay down debt, save or invest?",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-ent_edu_bac_6624682_icon_gc_a-CSX5fadde43.svg"
  },
  {
    backgroundImage: "/assets/offer/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_6304468_397_en_gc_02-CSXc992c1c.jpg", 
    title: "Investment Planning",
    description: "5 ways to improve your credit score",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-ent_edu_bac_5449395_icon_gc_a-CSXc8677456.svg"
  },
  {
    backgroundImage: "/assets/offer/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_6304468_397_en_gc_01-CSX3ce996f7.jpg",
    title: "Digital Banking",
    description: "Hello “Future Me”: A visualization technique to stick to your financial goals",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-ent_edu_bac_5449395_icon_gc_b-CSXa048e148.svg"
  },
  {
    backgroundImage: "/assets/offer/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_6054435_397_es_gc_002-CSX82961418.jpg",
    title: "Digital Banking",
    description: "What is a CD?",
    icon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-ent_edu_bac_5806145_icon_gc_c-CSX6cb454c5.svg"
  }
];

const Form3 = () => {
  return (
    <div className="flex flex-col w-full bg-gray-100 py-12">
      {/* Top Section */}
      <div className="text-center px-8 mb-12">
        <h2 className="text-4xl font-bold mb-4">Your financial goals matter</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        We can help you achieve them through Better Money Habits® financial education and programs that make communities stronger.
        </p>
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

