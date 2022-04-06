import React from "react";
import Nav from "./nav/Nav";
import Categories from "./products/Categories";
import SupperDeal from "./products/SupperDeal";
import TopSectionAndNewArrivals from "./products/TopSectionAndNewArivals";
import LoveToMore from "./products/LoveToMore";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="lg:px-32">
        <SupperDeal />
        <TopSectionAndNewArrivals />
        <Categories />
        <LoveToMore />
      </section>
    </>
  );
};

export default Home;
