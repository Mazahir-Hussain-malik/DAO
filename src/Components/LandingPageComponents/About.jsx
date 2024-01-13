import React from "react";
import token from "../../assets/landingpage/token.svg";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col md:w-[70%] w-[95%] mx-auto">
        <h2 className="text-[#fff] flex items-center justify-center gap-[1rem] md:text-[56px] text-[30px] font-semibold leading-[44px] my-[1rem] py-[1rem]">
          <img src={token} alt="" className="md:w-auto w-[20%]" /> ABOUT
        </h2>

        <p className="md:text-[24px] text-[14px] font-normal my-[1rem] md:text-center text-justify leading-[50px]">
          <span className="text-[#33BC24]">0xEthDao</span> is the world’s 1st
          DeFi utility NFT ecosystem focused on investing in and incubating
          Metaverse and Web3 unicorns and aspires to be the world’s #1 Metaverse
          and Web3 incubator. <span className="text-[#33BC24]">0xEthDao</span>{" "}
          is a DAO that sees Metaverse and Web3 projects through a corporate and
          institutional lens so <span className="text-[#33BC24]">0xEthDao</span>{" "}
          invests in and incubates projects to that level by introducing them to
          its community and global network of advisors spanning multiple
          disciplines and verticals.{" "}
          <span className="text-[#33BC24]">0xEthDao</span> is focused on you,
          the member, and together as a DAO we invest in multiple Web3 projects
          - flipping the entire angel investor and venture capital model on its
          head by tightly aligning, and constantly recalibrating, the desires of
          the project with those of our community into one synergistic,
          frictionless ecosystem where everybody wins.{" "}
          <span className="text-[#33BC24]">0xEthDao</span> DAO owns and controls
          its own liquidity, giving it enormous flexibility to move swiftly on
          investment opportunities and adapt to prevailing market conditions.
        </p>
      </div>
    </div>
  );
};

export default About;
