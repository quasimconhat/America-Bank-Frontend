"use client";
import Image from 'next/image';
import Link from 'next/link';
import TopRightImage from "@/public/assets/card/assets-images-site-hp-assets-super-highlights-enterprise-en-special-olympics-ent_shl_bmh_champs_5963738_722_gc.webp";

const cards = [
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-cards-en-bofa_icon_card1_186.svg",
        title: "Intro APR offer",
        color: "text-red",
        description: "With the <b>BankAmericard&reg;</b> credit card, get a 0% intro APR offer for 18 billing cycles, plus no annual fee.",
        link: "/intro",
        width: "30%",
        letter: "Apply now"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-en-enterprise-jd-power-bofa_icon_rewards2_280rgb.svg",
        title: "$300 checking cash offer",
        color: "text-red",
        description: "<b>Earn a $300 bonus</b> when new checking ustomers open an eligible checking account and make qualifying diret deposits.",
        link: "/offer",
        width: "30%",
        letter: "See offer details"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-mobile-banking-bofa_icon_reminder-1.svg",
        title: "Custom mobile alerts",
        color: "text-red",
        description: "With our Mobile Banking app alerts, prioritize what you see based on what matters most to you.",
        link: "/get-app",
        width: "30%",
        letter: "Get the app"
    },
    {
        image: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-merrill-en-merrill_lo1_rgb.svg",
        title: "Solutions built around you",
        color: "text-blue",
        description: "At Merrill, we provide the tools, people and know-how to help you pursue your financial goals.",
        link: "/get-started",
        width: "100%",
        letter: "Get started"
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
        <div className="flex w-[50vw]">
          {/* Left Part */}
          <div className="w-1/2 p-[10%]">
            <h2 className="text-3xl font-bold mb-2">{topBox.title}</h2>
            <h2 className="text-xl font-semibold mb-2">{topBox.subtitle}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: topBox.description }}></p>
            <Link href={topBox.link} className="text-blue-600 hover:underline">
              {topBox.letter} &rarr;
            </Link>
          </div>
          {/* Right Part */}
          <div className="w-1/2 py-[10%]">
            <Image
              src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-icons-shl_offer_art_6819646_e.svg"
              alt="Top Right Image"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Right Part */}
        <div className="w-[50vw] md:w-1/2 p-4 relative">
          <Image
            src={TopRightImage.src}
            alt="Top Right Image"
            width={500}
            height={300}
            layout="responsive"
            // objectFit="cover"
            className="w-[30%] h-[60%]"
          />
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 bg-white/80 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-red-600">From one Champion to another</h3>
            <p className="text-gray-700">Employee volunteers deliver Better Money Habits® to Special Olympics athletes.</p>
            <Link href="/watch" className="text-blue-600 hover:underline">Watch now &rarr;</Link>
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
