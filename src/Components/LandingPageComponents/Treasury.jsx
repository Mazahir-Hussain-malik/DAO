import React from "react";
import trasuryBgimage from "../../assets/landingpage/trasuryBgimage.svg";
import star from "../../assets/landingpage/star.svg";
import cube from "../../assets/landingpage/cube.svg";
import "./Styles.css";

const Treasury = () => {
  return (
    <div className=" relative treasury h-screen mt-[4rem]">
      <div className="absolute md:block hidden lg:right-[12%] md:right-[0%] right-[-20%] md:top-[-10%] top-[-4%] z-[1]">
        <img src={star} alt="" className=" w-[100%]" />
      </div>

      <div className="lg:w-[65%] md:w-[85%] w-[95%] md:h-[80vh] h-auto  rounded-[14px] shadow-xl mx-auto md:p-[3rem] p-[1rem]  mainDiv md:my-0 my-[2rem] ">
        <h2 className="text-white text-center text-shadow-lg font-Clash font-semibold lg:text-[60px] md:text-[30px] text-[20px] leading-10 py-[2rem]">
          TREASURY
        </h2>
        <p className="text-white font-Clash lg:text-[24px] text-[14px]  md:leading-[46px] leading-[24px] py-[1rem] text-justify font-semibold ">
          Profits from NFT and <span className="text-[#33BC24]">0xETHDao</span>{" "}
          token sales are sent to the treasury for investment in Metaverse and
          Web3 projects, some could become unicorns! All NFT and{" "}
          <span className="text-[#33BC24]">0xETHDao</span> holders
          proportionally own and control DAO and vote on all important matters
          including which Web3 projects to invest in and how much to invest. The
          higher your NFT and the more{" "}
          <span className="text-[#33BC24]">0xETHDao</span>
          that you hold the more governance voting power you have over DAO and
          the greater your share of treasury assets. Your proportional share
          changes based on your actions and the actions of others. If another
          person sells their <span className="text-[#33BC24]">0xETHDao</span> or
          makes a treasury claim and you don’t share of the DAO increases –
          upgrading NFTs before others is another strategy to increase your
          power.
        </p>
      </div>
      <div className=" absolute md:block hidden lg:bottom-0 md:bottom-[-8%] bottom-[8%] lg:left-[8%] left-[-8%]">
        <img src={cube} alt="" className="md:w-[100%] w-[40%]" />
      </div>
    </div>
  );
};

export default Treasury;
