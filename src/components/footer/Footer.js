import React from "react";
import { BsCoin, BsCreditCard } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="lg:px-32 mt-5 bg-white py-16">
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  bg-white">
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <BsCoin className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Great Value</h3>
          <p className="text-xs text-gray-500">
            We offer competitive prices on over 100 million items.
          </p>
          <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-20 right-0"></div>
        </div>
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <FaCarSide className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Worldwide shopping</h3>
          <p className="text-xs text-gray-500">
            We ship to over 200 countries and regions, and our site comes in 12
            languages.
          </p>
          <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-20 right-0"></div>
        </div>
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <BsCreditCard className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Safe payment</h3>
          <p className="text-xs text-gray-500">
            Pay with the world’s most popular and secure payment methods.{" "}
          </p>
          <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-20 right-0"></div>
        </div>
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <MdOutlineVerifiedUser className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Shop with confidence</h3>
          <p className="text-xs text-gray-500">
            Our Buyer Protection policy covers your entire purchase journey{" "}
          </p>
          <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-20 right-0"></div>
        </div>
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <FiUsers className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Help center</h3>
          <p className="text-xs text-gray-500">
            Round-the-clock assistance for a smooth shopping experience.{" "}
          </p>
          <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-20 right-0"></div>
        </div>
        <div className="text-center w-full  p-3 relative">
          <div className="w-full flex justify-center pb-8">
            <AiFillAndroid className="  text-3xl" />
            <AiFillApple className="  text-3xl" />
          </div>
          <h3 className="pb-2 font-medium">Shop better</h3>
          <p className="text-xs text-gray-500">
            <a className="text-blue-400" href="#">
              {" "}
              Download the app
            </a>{" "}
            for mobile-only features such as image search and discount games.{" "}
          </p>
          {/* <div className="line hidden lg:block h-16 w-px absolute bg-gray-300 top-16 right-1"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
