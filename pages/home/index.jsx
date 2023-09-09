import React from "react";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Reservation from "../../components/Reservation";

const Index = () => {
  return (

    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>

  );
};

export default Index;