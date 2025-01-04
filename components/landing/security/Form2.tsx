import React from 'react';
import Image from 'next/image'
import protectImage from '@/public/assets/security/protect.jpg'
import Link from 'next/link'

const NextComponent = () => {
  return (
    <div className="container mx-auto px-4 items-center">
      <h2 className="text-4xl text-center py-[5%]">
        <span className="text-[#c41230] font-[700]">Trending Now:</span> 
        <Link href="/security-center/avoid-bank-scams/" className="underline text-blue-500" data-aaclickevent="true">Learn</Link> 
        how imposters trick you in to sending money to them.
      </h2>
      <div className="flex justify-center items-center">
        <div className="order-1 flex-1 text-right" style={{height: '300'}}>
            <p className="text-2xl font-bold">How we help protect you</p>
            <p className="text-2xl p-4">Help Fight Fraud</p>
            <p className="text-2xl p-4">Think you have experienced fraud? Report Now</p>
            <p className="text-2xl p-4">Resources for Parents, Caregivers, and Businesses</p>
        </div>
        <div className="order-2 flex-1 text-center">
          <Image src={protectImage.src} alt="Middle Image" layout="responsive" objectFit="cover" width={200} height={100} />
        </div>
        <div className="order-3 flex-1 text-left">
            <p className="text-2xl font-bold">How to help protect yourself</p>
            <p className="text-2xl p-4">Help protect your money. Pause, verify, help prevent scams</p>
            <p className="text-2xl p-4">Check out our Fraud Checklist</p>
            <p className="text-2xl p-4">Help prevent Identity theft</p>
        </div>
      </div>
    </div>
  );
};

export default NextComponent;
