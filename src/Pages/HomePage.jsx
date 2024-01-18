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
      <div>
        <Header />
      </div>
      <div id="howItWork">
        <HowItWork />
      </div>
      <div id="Treasury">
        <Treasury />
      </div>
      <Markets />
      <Stats />
      <Investment />
      <div id="About">
        <About />
      </div>
      <Roadmap />
      <div id="faqs">
        <Faqs />
      </div>
      <div id="Fund">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
