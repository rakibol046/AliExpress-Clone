import React from "react";
import { Link } from "react-router-dom";

const SupperDeal = () => {
  const products = [
    {
      image:
        "./images/7-In1-Multifunction-Handheld-Screwdriver-Tool-Ballpoint-Pen-Measure-Technic.webp",
      name: "US polo sports Cap",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/1-4Pcs-Kitchen-Towels-Dishcloths-Non-stick-Oil-Thickened-Table-Cleaning-Clo.webp",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/5-6PCS-3-4-5-6-7-inch-Polishing-Kit-Polishing-Pad-Car-Waxing-Sponge-Disk.jp.webp",
      name: "2pis Tens Adhesive Electrode Pads For Acupuncture Digital ",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/9H-Ceramic-Car-Coating-Paint-Care-300-100-50ml-Polishing-Paste-Nano-Product.webp",

      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
      name: "US polo sports Cap",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
    {
      image:
        "./images/2022-Fashion-Tea-Gradient-Sunglasses-Women-Ocean-Water-Cut-Trimmed-Lens-Met.webp",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "BDT 0.55",
      discount: "-99%",
      orders: "332 orders",
    },
  ];
  return (
    <div>
      <div className="products w-full mt-10 h-auto lg:rounded-lg  bg-white ">
        <div className="grid items-center   grid-cols-1 lg:grid-cols-3   h-auto lg:h-12 lg:rounded-lg w-full bg-white  clear-both ">
          <div className="text-center pt-2 lg:text-left px-8">
            <img
              src="https://ae01.alicdn.com/kf/H6a103b65f0b64afdaf4fa405254b44few/368x55.png_250x250.png_.webp"
              alt=""
            />
          </div>
          <div>
            <span className="text-sm">
              <span className="pl-7 lg:pl-0 lg:text-xl text-gray-500">
                Top Products, Incredible prices.{" "}
              </span>
              <span className="p-1 rounded-lg bg-black  text-white">00</span> :{" "}
              <span className="p-1 bg-black rounded-lg  text-white">00</span> :{" "}
              <span className="p-1 rounded-lg bg-black  text-white">00</span>
            </span>
          </div>
          <div className="hidden lg:block  text-right px-10">
            <Link className="  py-1 px-2" to="">
              View more
            </Link>
          </div>
        </div>

        <div className="product-cards px-5 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-1 clear-both ">
          {products.map((product, index) => (
            <Link to="">
              <div
                key={index}
                className="product-card bg-white shadow-sm  p-3 h-68"
              >
                <img
                  className="w-full object-cover  hover:opacity-80"
                  src={product.image}
                  alt=""
                />

                {/* <p className="">{product.name}</p> */}
                <p className="text-orange-600 text-lg mt-2">
                  {product.price}{" "}
                  <span className="bg-orange-600 text-white rounded-lg px-0.5 ">
                    {product.discount}
                  </span>{" "}
                </p>
                <p>{product.orders}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupperDeal;
