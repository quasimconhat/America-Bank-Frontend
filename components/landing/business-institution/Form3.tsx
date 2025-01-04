import Image from 'next/image';
import Link from 'next/link';

const items = [
    {
        image: "assets/business-institution/1.svg",
        title: "CashPro®",
        description: "Manage working capital from anywhere"
    },
    {
        image: "assets/business-institution/2.svg",
        title: "BofA Mercury®",
        description: "Insights and tools to help optimize your trading strategies"
    },
    {
        image: "assets/business-institution/3.svg",
        title: "Global Digital Disbursements",
        description: "Fast, secure mobile B2C payments"
    }
]

const Component = () => {
    return (
        <div className="flex flex-col bg-blue-500 text-white">
            <div className="flex px-[10%] py-[3%]">
                <div className="w-[30%] p-4">
                    <h2 className="text-4xl font-bold p-4">What should the world expect from a bank?</h2>
                    <p className="text-lg p-4">Economies fluctuate but values don’t. Find the tools and insights you need to succeed. Our only ambition is to help you fulfill yours.</p>
                    <Link href="/learn-more" className="text-lg p-4 hover:underline">Learn more about our story</Link>
                </div>
                <div className="w-[70%] p-4">
                    <video src="/video.mp4" controls className="h-full w-full"></video>
                </div>
            </div>
            <div className="bg-white">
                <div className="text-black w-full justify-center">
                    <h2 className="text-4xl jusifont-bold p-4">Solutions</h2>
                    <p className="text-lg p-4">
                        Data and technology driven solutions and services designed for business and life.
                    </p>
                </div>
                <div className="px-[30%] flex justify-between">
                    {items.map((item) => (
                        <div className="w-30% ">
                            <Image src={`/${item.image}`} className="justify-center items-center" alt="Image" width={20} height={20} />
                            <h3 className="text-blue-500 p-4">{item.title}</h3>
                            <p className="p-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Component;
