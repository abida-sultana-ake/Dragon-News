import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-5 text-xl text-gray-400">Find Us On</h1>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start">
            <MdFacebook size={24} /> Facebook
          </button> 
          <button className="btn join-item bg-base-100 justify-start">
            <FaXTwitter size={24} />
            Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <IoLogoInstagram size={24} /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
