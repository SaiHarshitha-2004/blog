import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 mb-6 flex flex-col justify-center items-center w-full">
      <div className="relative bg-[#0F051D] text-gray-400 flex justify-center items-center flex-col w-full">
        <div
          aria-hidden="true"
          className="absolute right-0 w-32 rounded-full bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90"
        ></div>
        <div
          aria-hidden="true"
          className="absolute left-0 w-32 rounded-full bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90"
        ></div>
        <div className="flex flex-row justify-center flex-wrap space-x-5 mb-10">
          <p>Have questions? </p>
          <p>Reach out to us at </p>
          <a href="mailto:saiharshithamandapalli@gmail.com">
            saiharshithamandapalli@gmail.com
          </a>
          <h3>Community</h3>
          <p>Blog</p>
          <p>Learners</p>
          <p>Teaching Center</p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <p className="border border-gray-400 w-full lg:w-1/2 mb-6"></p>
      <div className="flex lg:w-1/2 w-full text-gray-400 flex-col lg:flex-row items-center justify-between">
       <p>&copy; 2023 Aura. All rights reserved.</p>
        <div className="flex flex-row space-x-5 items-center justify-center">
          <p className="">privacy policy</p>
          <p>Terms Of use</p>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Footer;
