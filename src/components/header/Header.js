import React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { BsSearch } from "react-icons/bs";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header z-100 sticky bg-white top-0">
        <div className="logo">
          <a href="">
            <img
              src="https://ae01.alicdn.com/kf/H1674ac74299a489f8e2995c8b73006ceJ.png"
              alt=""
            />
            <span className="text-xs text-gray-500">
              Smarter Shopping, Better Living!
            </span>
          </a>
        </div>
        <div className="search-area ">
          <form action="" className="">
            <input
              className=""
              type="search"
              placeholder="Search for Products"
            />

            <select className="text-sm text-gray-500 hidden  lg:block">
              <option value="All Categories">All Categories</option>
              <option value="saab">Food </option>
              <option value="vw">Computer </option>
              <option value="audi">home & Applications</option>
              <option value="audi">Automobiles & Motorcycle</option>
              <option value="audi">Education & Office Supplier</option>
              <option value="audi">Mother & kids</option>
              <option value="audi">Home & Graden</option>
              <option value="audi">Toy & hobbies</option>
              <option value="audi">Electronics</option>
              <option value="audi">Light & Lighting </option>
              <option value="audi">Bueaty & Health </option>
              <option value="audi">home & Applications</option>
              <option value="audi">Automobiles & Motorcycle</option>
              <option value="audi">Education & Office Supplier</option>
              <option value="audi">Mother & kids</option>
              <option value="audi">Home & Graden</option>
              <option value="audi">Toy & hobbies</option>
              <option value="audi">Electronics</option>
              <option value="audi">Light & Lighting </option>
              <option value="audi">Bueaty & Health </option>
            </select>

            <button>
              <BsSearch />
            </button>
          </form>
          <div className="link hidden lg:block">
            <ul className="text-xs text-gray-500 pt-2">
              <li className="">
                <Link to="">watch for men</Link>
              </li>
              <li>
                <Link to="">sunglasses for men</Link>
              </li>
              <li>
                <Link to="">headphones</Link>
              </li>
              <li>
                <Link to="">mobile phones</Link>
              </li>
              <li>
                <Link to="">smart watch</Link>
              </li>
              <li>
                <Link to="">iphone 13 pro max</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="icon">
          <div className=" -mt-5 mx-10">
            <Stack spacing={4} direction="row">
              <Badge color="error" badgeContent={0} showZero>
                <AddShoppingCartIcon className="cart" />
              </Badge>
            </Stack>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
