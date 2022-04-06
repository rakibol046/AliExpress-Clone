import React from "react";

const LoveToMore = () => {
  const products = [
    {
      image: "./images/Hc80a4a5b862f44c8864e96c2949ee14cW.jpg_200x200Q90.jpg",
      productName: "Yellow (VF1100c)",

      price: "81.0",
      discount: "22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/Professional-20X-Magnifier-Double-Eye-Glasses-Type-Watch-Repair-Jeweler-Ins.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "",
      sold: "176",
      rating: "4.5",
      shippingFee: "",
    },
    {
      image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
      productName: "Yellow (VF1100c)",

      price: "  0.81",
      discount: "22",
      offer: "Limited Offer",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image: "./images/Hc80a4a5b862f44c8864e96c2949ee14cW.jpg_200x200Q90.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/Professional-20X-Magnifier-Double-Eye-Glasses-Type-Watch-Repair-Jeweler-Ins.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
      productName: "Yellow (VF1100c)",

      price: "  0.81",
      discount: " 22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "",
    },
    {
      image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
      productName: "Yellow (VF1100c)",

      price: "  0.81",
      discount: "22",
      offer: "Limited Offer",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image: "./images/Hc80a4a5b862f44c8864e96c2949ee14cW.jpg_200x200Q90.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/Professional-20X-Magnifier-Double-Eye-Glasses-Type-Watch-Repair-Jeweler-Ins.jpg",
      productName: "Yellow (VF1100c)",

      price: "0.81",
      discount: "22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
    {
      image:
        "./images/60pcs-Super-Strong-Double-Sided-Adhesive-Nano-Tape-Mounting-Fixing-Pad-Self.jpg",
      productName: "Yellow (VF1100c)",

      price: "  0.81",
      discount: " 22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "",
    },
    {
      image: "./images/H2c44798c61b94ce590cbc2461f49491c7.jpg",
      productName: "Yellow (VF1100c)",

      price: "  0.81",
      discount: " 22",
      offer: "New User Bonus",
      sold: "123",
      rating: "4.5",
      shippingFee: "Free Shipping",
    },
  ];
  return (
    <div className="mt-5">
      <div className="products">
        <div className=" w-full flex justify-center items-center">
          <div className="title mb-3 flex justify-items-center items-center h-12 lg:h-20">
            <div className="lg:w-40 h-px bg-gray-300 "></div>

            <h1 className="px-5 font-bold">More to Love</h1>

            <div className="lg:w-40 h-px bg-gray-300 "></div>
          </div>
        </div>
        <div className="product-cards grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-3  ">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white shadow-sm hover:shadow-md lg:rounded-lg h-80 relative"
            >
              <img
                className="h-44 w-full object-cover"
                src={product.image}
                alt=""
              />

              <div className="px-2 text-xs text-gray-500 pt-2 absolute bottom-3">
                <p className="">{product.productName}</p>
                <p className="text-black font-bold text-lg">
                  {" "}
                  <span className="text-xs">BDT</span> {product.price}
                </p>
                <p>
                  <span className="line-through">
                    {"BDT"}
                    {product.discount}{" "}
                  </span>
                  <span className="text-orange-500 pl-2">
                    {"-"}
                    {product.discount}
                  </span>
                </p>
                <p className="text-orange-500">{product.offer}</p>
                <p>
                  {"Sold "}
                  {product.sold}{" "}
                  <span className="text-orange-500">
                    {" "}
                    &#9733; <span>{product.rating}</span>{" "}
                  </span>{" "}
                </p>
                <p>{product.shippingFee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveToMore;
