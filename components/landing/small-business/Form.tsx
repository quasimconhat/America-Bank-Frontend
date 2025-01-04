import Image from 'next/image';
import Link from 'next/link';

const cards = [
    {
        display: 1,
        price: "300",
        offer: "ONLINE STATEMENT CREDIT OFFER",
        fee: "No annual fee",
        image: "assets/small-business/card/1.webp",
        title: "Business Advantage Unlimited Cash Rewards Mastercard",
        description: "Unlimited cash back >>",
        link: "/link-1"
    },
    {
        display: 1,
        price: "300",
        offer: "ONLINE STATEMENT CREDIT OFFER",
        fee: "No annual fee",
        image: "assets/small-business/card/2.webp",
        title: "Business Advantage Unlimited Cash Rewards Mastercard",
        description: "Customize your cash back >>",
        link: "/link-2"
    },
    {
        display: 1,
        price: "30,000",
        offer: "ONLINE BONUS CREDIT OFFER",
        fee: "No annual fee",
        image: "assets/small-business/card/3.webp",
        title: "Business Advantage Unlimited Cash Rewards Mastercard",
        description: "Earn travel rewards >>",
        link: "/link-3"
    },
    {
        display: 1,
        price: "300",
        offer: "ONLINE STATEMENT CREDIT OFFER",
        fee: "No annual fee",
        image: "assets/small-business/card/4.webp",
        title: "Business Advantage Unlimited Cash Rewards Mastercard",
        description: "Get a competitive APR >>",
        link: "/link-4"
    }


]

const Form = () => {
  return (
    <div className="flex px-6 flex-col md:flex-row w-full">
      {/* Left Section */}
      <div className="w-full px-3 md:w-1/4 flex flex-col">
        <div className="flex-1">
          {/* Top part of left section */}
          <div className="bg-[#f5f5f5] p-4">
            <div className="mb-4">
              <input type="text" placeholder="User ID" className="w-full p-2 rounded" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="w-full p-2 rounded" />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="saveUserId" className="mr-2 transform scale-150" />
              <label htmlFor="saveUserId" className="text-black">Save User ID</label>
            </div>
            <button className="w-full bg-[#f5f5f5] text-black p-2 rounded mb-4 border border-white">Login</button>
            <div className="mb-4">
              <a href="#" className="text-black hover:underline">Forgot ID/Password?</a>
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-black hover:underline">Security & Help</a>
              <a href="#" className="text-black hover:underline">Enroll</a>
            </div>
          </div>
          {/* Open an Account link */}
          <div className="bg-[#d3d3d3]">
            <a
              href="/open-account"
              className="block w-full text-center text-black p-3 rounded-lg hover:underline transition duration-300"
            >
              Open an Account
            </a>
          </div>
        </div>
        <div className="flex-1 mt-4">
          {/* Bottom part of left section */}
          <div className="flex flex-col">
            <div className="flex bg-[#c41230] p-[2%] items-center space-x-4">
              <div className="w-[10%]">
                <svg focusable="false" className="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.376 218" width="18" height="26">
                  <path d="M75.661,31.468a35.835,35.835,0,1,0,35.846,35.814A35.807,35.807,0,0,0,75.661,31.468M75.78,218S0,111.691,0,75.693a75.688,75.688,0,1,1,151.376,0c0,48.744-75.6,142.307-75.6,142.307" style={{fill: '#FFFFFF'}}>
                  </path>
                </svg>
              </div>
              <div className="w-[90%]">
                <h3 className="text-lg text-white font-semibold mb-2">Find your closest financial center or ATM</h3>
              </div>
            </div>
            <div className="flex bg-[#93335b] p-[2%] items-center space-x-4">
              <div className="w-[10%]">
                <svg focusable="false" className="mx-auto"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.065 199.634" width="20" height="20">
                  <rect width="207.065" height="199.634" fill='#FFFFFF'></rect>
                  <rect x="13.601" y="53.376" width="179.862" height="132.657" fill='#93335b'></rect>
                  <path d="M37.127,14.694A12.007,12.007,0,1,1,25.12,26.7,12.013,12.013,0,0,1,37.127,14.694h0Z" fill='#93335b'></path>
                  <path d="M169.951,14.694A12.007,12.007,0,1,1,157.944,26.7a12.015,12.015,0,0,1,12.007-12.007h0Z" fill='#93335b'></path>
                  <path d="M86.989,114.888c11.043,2.391,15,10.632,15,18.525,0,12.483-10.3,22.69-27.588,22.69-7.495,0-17.175-1.247-24.156-5.515l4.165-10.824c10.092,4.358,15.092,4.577,18.1,4.577,10.22,0,13.961-5.721,14.064-10.092,0.206-9.256-6.968-12.483-20.3-12.8v-9.886c13.743-.424,17.484-5.939,17.484-10.837,0-3.535-2.61-6.646-8.318-6.646-3.124,0-8.947.206-19.271,5.734l-4.05-10.516c8.433-4.808,17.278-7.1,23.719-7.1,16.147,0,23.011,8.33,23.011,17.291,0,4.679-2.79,11.866-11.866,15.092v0.309Z" fill='#FFFFFF'></path>
                  <polygon points="134.476 96.778 119.91 98.128 119.91 88.229 135.813 83.563 149.041 83.563 149.041 155.168 134.476 155.168 134.476 96.778" fill='#FFFFFF'></polygon>
                </svg>
              </div>
              <div className="w-[90%]">
                <h3 className="text-lg text-white font-semibold mb-2">Schedule an Appointment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full px-3 md:w-3/4 ml-0 md:ml-8">
        <h1 className="text-4xl font-bold mb-6">Earn what matters most to your business</h1>
        <h1 className="text-2xl font-bold mb-6">Consider the benefits of a Bank of America Business Advantage credit card.</h1>
        <div className="flex grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, index) => (
            <div key={index} className="border  rounded-lg p-4 shadow-md w-1/4">
              <div className="mb-4 h-40 relative">
                <Image
                  src={`/${item.image}`}
                  alt={`Card ${item.title} image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex justify-center items-start text-red-600 mb-2">
                {item.display === 1 && <span className="text-4xl pt-4">$</span>}
                <span className="text-8xl leading-none">{item.price}</span>
              </div>
              <p className="text-2xl text-center text-red-600 mb-4">{item.offer}</p>
              <h3 className="font-semibold text-center lg mb-2">{item.fee}</h3>              
              <p className="mb-4 text-2xl text-center">{item.title}&reg;</p>
              <Link href={`/${item.link}`} className="text-center justify-center text-blue-600 hover:underline">
                {item.description}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
