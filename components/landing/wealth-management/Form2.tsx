import Image from 'next/image';
import Link from 'next/link';

const cards = [
    {
      image: "assets/wealth-management/Tile-1-Solutions-Desktop-416x189.jpg",
      title: "Looking to work with an advisor?",
      description: "With Merrill Lynch Wealth Management, you’ll work closely with a dedicated advisor to help you create a personalized financial strategy.",
      link: "New to Merrill? Have an advisor contact you.",
      price: "Investment minimum: Generally $250,000",
      button: "Explore more"
    },
    {
      image: "assets/wealth-management/Tile-2-Solutions-Mobile-327x162.jpg",
      title: "Your investment goals, your way",
      description: "With Merrill Edge® Self-Directed you get personalized investing insights, guidance and digital tools to confidently put your investing ideas into action.",
      link: "No investment minimum",
      price: "Investment minimum as low as $1,000; with an advisor as low as $20,000",
      button: "Learn more"
    },
    {
      image: "assets/wealth-management/Tile-3-Solutions-Desktop-416x189.jpg",
      title: "Navigating more complex needs",
      description: "From trust and estate planning to philanthropy services and beyond, Bank of America Private Bank can help you and your family manage the complexities of substantial wealth.",
      link: "",
      price: "Investment minimum: $3,000,000",
      button: "Learn more"
    },

]

const Form = () => {
  return (
    <div className="flex px-6 flex-col md:flex-row w-full">
      {/* Left Section */}
      

      {/* Right Section */}
      {/* <div className="w-full items-center ml-0 md:ml-8"> */}
        <div className="flex grid-cols-1 mt-2 md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md ">
              <div className="mb-4 h-80 relative">
                <Image
                  src={`/${item.image}`}
                  alt={`Card ${item.title} image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-2xl text-center text-red-600 mb-4">{item.title}</p>
              <h3 className="font-semibold text-center lg mb-2">{item.description}</h3>              
              <p className="mb-4 text-2xl text-center">{item.price}</p>
              <div className="flex justify-center items-start">
                <button className="bg-red-600 p-4">{item.button}</button>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Form;
