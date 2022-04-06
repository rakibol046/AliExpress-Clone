import react from "react";
import Slider from "react-slick";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const products = [
  {
    image: "./images/Hc80a4a5b862f44c8864e96c2949ee14cW.jpg_200x200Q90.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image:
      "./images/Professional-20X-Magnifier-Double-Eye-Glasses-Type-Watch-Repair-Jeweler-Ins.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image:
      "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image: "./images/Hc80a4a5b862f44c8864e96c2949ee14cW.jpg_200x200Q90.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image:
      "./images/Professional-20X-Magnifier-Double-Eye-Glasses-Type-Watch-Repair-Jeweler-Ins.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image:
      "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
  {
    image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
    productName: "Yellow (VF1100c)",

    price: "BDT 0.81",
    discount: "BDT 123",
  },
];

const ArrowRight = (props) => {
  return (
    <button {...props} style={{}} className="arrow-right">
      <BsArrowRight style={{ fontSize: "25px" }} className="arrow-right-icon" />
    </button>
  );
};

const ArrowLeft = (props) => {
  return (
    <button {...props} style={{}} className="arrow-left">
      <BsArrowLeft style={{ fontSize: "25px" }} className="arrow-left-icon" />
    </button>
  );
};

const ProductsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="mini-slider">
      <div className="single-slider">
        <div className="mini-slide-container   w-full  rounded-lg ">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="product-card h-full ">
                <div className="mini-card m-2 w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    className="  w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                  <div className="grid items-center justify-center">
                    <div className=" text-xs font-bold px-2 -mt-10 bg-red-500 text-white rounded-xl outline outline-1 outline-gray-300 shadow-md">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
