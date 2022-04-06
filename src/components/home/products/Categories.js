import React from "react";
import { TiDeviceLaptop } from "react-icons/ti";

const Categories = () => {
  const homeImage = [
    "./images/H07fe0fd7f0954c2d94d11764beae5680J.jpg_100x100Q90.jpg_.webp",
    "./images/H384053a7889c4e93b6972e437400ccf2b.jpg_120x120Q90.jpg_.webp",
    "./images/F9-Wireless-Earphones-Bluetooth-Stereo-Headphones-Sport-Waterproof-Noise-Re.webp",
  ];
  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className="title mb-3 flex justify-items-center items-center h-12 lg:h-20">
          <div className="lg:w-40 h-px bg-gray-300 "></div>

          <h1 className="px-5 font-bold">Featured Categories</h1>

          <div className="lg:w-40 h-px bg-gray-300 "></div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Fashion</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Home</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Kids</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Man's</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Vehicles</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Mantancence & Rapairs</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Sports</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-2 mt-5 lg:mt-0 lg:rounded-lg">
          <h4 className="font-bold mb-1">Women's</h4>

          <div className="images p-2 grid grid-cols-3 gap-2 justify-between w-full">
            {homeImage.map((image, index) => (
              <img
                className=" rounded-lg float-left object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
