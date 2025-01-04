"use client";
import Image from 'next/image';
import Link from 'next/link';
import TopRightImage from "@/public/assets/small-business/second/right.webp";
import TopLeftImage from "@/public/assets/small-business/second/left.webp";

const cards = [
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-smallbusiness-deposits-bofa_icon_deposit3_rgb.svg",
        title: "An all-in-one business checking solution",
        color: "text-red",
        description: "Simple and intuitive tools, resources and security.",
        link: "/open",
        width: "20%",
        letter: "Open an account"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-smallbusiness-preferred-rewards-logos-bofa_prefrewbus_signifier1_blk.svg",
        title: "Earn business rewards with no fee to join",
        color: "text-red",
        description: "Preferred Rewards for Business members earn rewards on banking credit cards and more.",
        link: "/explore",
        width: "50%",
        letter: "Explore rewards"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-mobile-banking-MB_HL1_ZELLE_SHL_ARXRVL87_Image.svg",
        title: "Free in our app",
        color: "text-red",
        description: "See how using Zelle&reg; for your business lets you pay and get paid fast.",
        link: "/check",
        width: "30%",
        letter: "Check it out"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-smallbusiness-project-olive-sb_olive_hl_arqrdcrn_icon.svg",
        title: "Get more from your business credit card",
        color: "text-blue",
        description: "Explore our range of cards with <b>no annual fee</b>.",
        link: "/compare",
        width: "30%",
        letter: "Compare credit cards"
    }
]

const topBox = {
    title: "NEW CHECKING OFFER",
    subtitle: "Open a checking account",
    description: "<b>Earn a $300 cash offer</b> when you open a new eligible checking accoount and make qualifying direct deposits.",
    link: "/see-offer",
    letter: "See offer details"
}

const Form2 =() => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row ">
        {/* Left Part */}
        <div className="w-[50vw] md:w-1/2 p-4 relative">
          <Image
            src={TopLeftImage.src}
            alt="Top Left Image"
            width={500}
            height={300}
            layout="responsive"
            // objectFit="cover"
            className="w-[30%] h-[60%]"
          />
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/3 -translate-y-1/4 bg-white/80 p-4 rounded-lg shadow-md w-1/2 h-3/5">
            <h3 className="text-md text-black">BUSINESS ADVANTAGE</h3>
            <h3 className="py-2 text-4xl font-semibold text-red-600">Business checking and so much more</h3>
            <p className="text-2xl py-4 text-gray-700">Get powerful <b>digital tools</b>, dedicated <b>specialists</b> and <b>rewards</b>, all in one place.</p>
            <Link href="/watch" className="text-blue-600 hover:underline">Open an account &rarr;</Link>
          </div>
        </div>
        {/* Right Part */}
        <div className="w-[30vw] md:w-1/2 p-4 relative">
          <Image
            src={TopRightImage.src}
            alt="Top Right Image"
            width={300}
            height={300}
            layout="responsive"
            // objectFit="cover"
            className="w-[20%] h-[60%]"
          />
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/3 -translate-y-1/4 bg-white/80 p-4 rounded-lg shadow-md w-1/2 h-3/5">
            <h3 className="py-2 text-4xl font-semibold text-red-600">Get help finding the righ products for your business</h3>
            <p className="text-2xl py-4 text-gray-700">Answer a few simple questions to receive customize business banking solutions.</p>
            <Link href="/started" className="text-blue-600 hover:underline">Get started &rarr;</Link>
          </div>
        </div>
      </div>

      <svg focusable="false" className="curve-bottom show-for-large-up mt-[-5%]" viewBox="0 0 1400 38" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <path d="M 48.179 34.027 C 77.767 32.124 107.361 30.31 136.961 28.583 C 246.195 22.388 355.479 17.949 464.832 14.561 C 574.238 11.173 683.657 8.376 793.092 6.173 C 902.831 3.852 1012.542 2.507 1122.299 1.45 C 1214.873 1.45 1307.424 0 1400 0 L 1400 37.953 C 1400 37.953 48.802 38.011 0 38" 
        shape-rendering="geometricPrecision" fill="#f5f5f5"></path>
      </svg>

      {/* Bottom Section */}
      <div 
        className="grid p-8 bg-gray-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {cards.map((card, index) => (
          <div key={index} className="p-4 border rounded-lg overflow-hidden shadow-md">
            <Image
              src={card.image}
              alt={card.title}
              width={30}
              height={30}
              style={{ width: card.width, height: '30%' }}
            />
            <div className="p-4">
              <h3 className={`font-semibold text-lg mb-2 ${card.color}`}>{card.title}</h3>
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: card.description }}></p>
              <Link href={card.link} className="text-blue-600 hover:underline">
                {card.letter} &rarr;
              </Link>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

export default Form2;
