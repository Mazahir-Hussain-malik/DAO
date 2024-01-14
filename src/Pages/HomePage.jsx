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
  Faqs,
  Footer,
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
      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
