import React from "react";
import {
  Navbar,
  Header,
  HowItWork,
  Treasury,
  Markets,
  Investment,
} from "../Components/index";
import Stats from "../Components/LandingPageComponents/Stats";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWork />
      <Treasury />
      <Markets />
      <Stats />
      <Investment />
    </div>
  );
};

export default HomePage;
