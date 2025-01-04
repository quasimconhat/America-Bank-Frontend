import React from 'react';

const Form3 = () => {
  return (
    <div className="bg-blue-600 px-[20%] py-[5%]">
      <h1 className="text-white text-center text-2xl mb-4">Ready to talk to a Merrill advisor? Let us connect you to one.</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name*"  style={{ padding: '10px' }} />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email Address*"  style={{ padding: '10px' }} />
          <label htmlFor="phone">Primary Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Primary Phone*"  style={{ padding: '10px' }} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name*"  style={{ padding: '10px' }} />
          <label htmlFor="confirmEmail">Confirm Email</label>
          <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Confirm Email*"  style={{ padding: '10px' }} />
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" id="zipCode" name="zipCode" placeholder="Zip Code*"  style={{ padding: '10px' }} />
        </div>
      </div>
      <h2 className="text-white py-[5%] text-xl text-center mt-4">Investment minimum Generally $250,000</h2>
      <p className="text-white">By providing your contact information above, you agree that a representative of Merrill, the Brokerage affiliate of Bank of America Corporation, may contact you via telephone and/or email to discuss and/or offer investment products and services that may be appropriate for you. You agree that you are providing to us your consent for us to contact you regardless of any Do Not Call or Do Not Email privacy choices you may have previously expressed until you revoke this consent, or up to 90 days. You may revoke your consent at any time by notifying the Merrill representative.</p>
      <div className="flex justify-center">
        <button className="bg-red-500 p-4 px-16 text-white mt-4">Submit</button>
      </div>
    </div>
  );
};

export default Form3;

