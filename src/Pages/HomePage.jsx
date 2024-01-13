import React from "react";
import {
  Navbar,
  Header,
  HowItWork,
  Treasury,
  Markets,
  Investment,
  About,
  Roadmap,
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
      <About />
      <Roadmap />
    </div>
  );
};

export default HomePage;
