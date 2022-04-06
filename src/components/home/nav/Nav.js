import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import Slider from "../carousel/Slider";
import MiniSlider from "../carousel/MiniSlider";
import { TiDeviceLaptop } from "react-icons/ti";

const Nav = () => {
  return (
    <div>
      <div className="menu-container  w-full my-5 lg:grid lg:gap-3 lg:grid-cols-5 lg:px-32">
        <nav className="nav-area hidden shadow-md text-sm lg:block rounded-lg ">
          <ul className="">
            <p className="text-black px-4 py-2 bg-gray-100 text-lg  font-bold">
              Categories
            </p>
            <li>
              <Link to="">Women's Fashion</Link>
            </li>
            <li>
              <Link to="">Men's Fashion</Link>
            </li>
            <li>
              <Link to="">Phones & Telecommunication</Link>
            </li>
            <li>
              <Link to="">Computer</Link> , <Link to=""> Office</Link> &{" "}
              <Link to=""> Security</Link>
            </li>
            <li>
              <Link to="">Consumer Electronics</Link>
            </li>
            <li>
              <Link to="">Jewelry </Link> & <Link to=""> Watches</Link>
            </li>
            <li>
              <Link to="">Home </Link>, <Link to=""> Pet </Link> &{" "}
              <Link to=""> Appliances</Link>
            </li>
            <li>
              <Link to="">Bags </Link> & <Link to=""> Shoes</Link>
            </li>
            <li>
              <Link to="">Toys</Link>, <Link to=""> Kids & Babies</Link>
            </li>
            <li>
              <Link to="">Outdoor Fun & Sports</Link>
            </li>
            <li>
              <Link to="">Beauty, Health </Link> & <Link to=""> Hair</Link>
            </li>
            <li>
              <Link to="">Automobiles & Motorcycles</Link>
            </li>
            <li>
              <Link to="">Home improvement</Link> & <Link to=""> Tools</Link>
            </li>
          </ul>
        </nav>

        <div className="carousel-area col-span-3 ">
          <Carousel />
          <Slider />
        </div>
        <div className="bg-white rounded-lg right-slide hidden lg:block">
          <div className="top h-2/5 relative grid justify-center items-center leading-10">
            <img
              className="w-full  object-cover absolute top-0"
              src="https://ae01.alicdn.com/kf/He1ffbc1d340f4be8a0a6d07641c58180t.png_.webp"
              alt=""
            />
            <div className="absolute w-full text-center  ">
              <div className="w-full flex justify-center text-center">
                <img
                  className="w-16 h-16 "
                  src="https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"
                  alt=""
                />
              </div>
              <h2 className="">Wellcome to AliExpress</h2>
              <div className="mt-4">
                <Link
                  to=""
                  className="bg-red-500 m-2 p-2 px-8 font-bold rounded-3xl  "
                >
                  Join
                </Link>
                <Link
                  to=""
                  className="bg-gray-200 m-2 p-2 px-5 font-bold rounded-3xl"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom   h-3/5 relative ">
            <div className="p-2 w-full h-full relative rounded-lg overflow-hidden">
              <img
                className=" rounded-lg  object-cover  "
                src="https://ae01.alicdn.com/kf/H4d1fc82a600f4c51b3a3b4c7a5edb3a6G.jpg_Q90.jpg_.webp"
                alt=""
              />
              <div className="absolute w-full top-1 p-2 text-white">
                <p>Exclusive offers </p>
                <p className="text-md font-bold pt-3">
                  Just for new AliExpress members!
                </p>
              </div>
            </div>
            <div className="w-full p-2 absolute bottom-0 hidden lg:block ">
              <MiniSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
