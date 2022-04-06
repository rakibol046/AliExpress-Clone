import React from "react";
import { Link } from "react-router-dom";

const TopSection = () => {
  const products = [
    {
      image: "./images/H0d2ea6c0397e4424b2b4488948b079e5T.png",
      name: "US polo sports Cap",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/2022-T9-0mm-Professional-Hair-Clipper-Beard-Trimmer-Electric-Rechargeable-M.webp",
      name: "US polo sports Cap solid red green ",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/H00ce6e3c89514a26a561b5b945ae2786s.png_300x300.png_.webp",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
  ];
  return (
    <div>
      <div className="products bg-white  w-full  h-auto lg:rounded-lg">
        <div className="grid items-center  px-2 grid-cols-2 lg:grid-cols-2 lg:px-6  w-full bg-white lg:rounded-lg ">
          <div className="text-xl  py-2 font-bold ">Top Section</div>
          {/* <div>
            <span className="">
              <span className="text-xl text-gray-500">
                Top Products, Incredible prices.{" "}
              </span>
              <span className="p-1 rounded-lg bg-black  text-white">00</span> :{" "}
              <span className="p-1 bg-black rounded-lg  text-white">00</span> :{" "}
              <span className="p-1 rounded-lg bg-black  text-white">00</span>
            </span>
          </div> */}
          <div className="  text-right">
            <Link className="  py-1 " to="">
              View more
            </Link>
          </div>
        </div>

        <div className="top-secttion-cards px-5 grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 clear-both ">
          {products.map((product, index) => (
            <Link to="">
              <div
                key={index}
                className="top-section-card bg-white shadow-sm  p-3 h-68"
              >
                <img
                  className="w-full object-cover hover:opacity-80"
                  src={product.image}
                  alt=""
                />

                <p className="text-sm pt-1 overflow-hidden whitespace-nowrap">
                  {product.name.length > 22
                    ? product.name.substring(0, 22) + "..."
                    : product.name}
                </p>
                <p className="text-orange-600 text-lg mt-2">
                  {product.price}{" "}
                  <span className="bg-orange-600 text-white rounded-lg px-0.5 ">
                    {product.discount}
                  </span>{" "}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
const NewArrivals = () => {
  const products = [
    {
      image:
        "./images/H00b55815faf249fcbdb5a9087b63aa22M.jpg_100x100Q90.jpg_.webp",
      name: "US polo sports Cap",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
      name: "US polo sports Cap",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/H2dc95f5a8ad942fdb6cc71224ac435c6W.jpg_200x200Q90.jpg_.webp",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
  ];
  return (
    <div>
      <div className="products bg-white  w-full  h-auto lg:rounded-lg">
        <div className="grid items-center px-2 grid-cols-2 lg:grid-cols-2 lg:px-6  w-full bg-white lg:rounded-lg">
          <div className="text-xl  py-2 font-bold ">New Arrivals</div>
          {/* <div>
            <span className="">
              <span className="text-xl text-gray-500">
                Top Products, Incredible prices.{" "}
              </span>
              <span className="p-1 rounded-lg bg-black  text-white">00</span> :{" "}
              <span className="p-1 bg-black rounded-lg  text-white">00</span> :{" "}
              <span className="p-1 rounded-lg bg-black  text-white">00</span>
            </span>
          </div> */}
          <div className="  text-right">
            <Link className="  py-1 " to="">
              View more
            </Link>
          </div>
        </div>

        <div className="top-secttion-cards px-5 grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 clear-both ">
          {products.map((product, index) => (
            <Link to="">
              <div
                key={index}
                className="top-section-card bg-white shadow-sm  p-3 h-68"
              >
                <img
                  className="w-full object-cover hover:opacity-80"
                  src={product.image}
                  alt=""
                />

                <p className="text-sm pt-1 overflow-hidden whitespace-nowrap">
                  {product.name.length > 22
                    ? product.name.substring(0, 22) + "..."
                    : product.name}
                </p>
                <p className="text-orange-600 text-lg mt-2">
                  {product.price}{" "}
                  <span className="bg-orange-600 text-white rounded-lg px-0.5 ">
                    {product.discount}
                  </span>{" "}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const TopSectionAndNewArrivals = () => {
  return (
    <div>
      <div className=" w-full my-5 h-auto rounded-lg   grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-5">
        <div>
          <TopSection />
        </div>
        <div className="mt-5 lg:mt-0">
          <NewArrivals />
        </div>
      </div>
    </div>
  );
};

export default TopSectionAndNewArrivals;
