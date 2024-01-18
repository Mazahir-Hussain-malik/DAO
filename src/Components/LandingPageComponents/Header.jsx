import React from "react";
import "./Styles.css";
import Btn from "../Btn";
import socialIcon1 from "../../assets/landingpage/scial1.svg";
import socialIcon2 from "../../assets/landingpage/scial2.svg";
import socialIcon3 from "../../assets/landingpage/scial3.svg";
import socialIcon4 from "../../assets/landingpage/scial4.svg";
import socialIcon5 from "../../assets/landingpage/scial5.svg";
import socialIcon6 from "../../assets/landingpage/scial6.svg";

const Header = () => {
  const socialImages = [
    socialIcon1,
    socialIcon2,
    socialIcon3,
    socialIcon4,
    socialIcon5,
    socialIcon6,
  ];
  return (
    <>
      <div className=" headerBgimage lg:h-[860px] h-auto py-[3rem]">
        <div className="md:w-[70%] w-[95%] mx-auto  flex flex-col items-center justify-end lg:h-[500px] h-auto ">
          <h2 className="text-white  text-center font-clash-display md:text-[56px] text-[20px] font-semibold leading-[40px]">
            <span className="text-[#19FF00]"> One NFT {">>>"} </span> Unlimited
            Investment Opportunities
          </h2>
          <p className="md:text-[20px] text-[14px] font-normal md:leading-[15px] leading-[20px] lg:my-8 my-2">
            <span className="text-[#33BC24]"> 0xEthDao </span> aspires to be the
            world’s #1 Metaverse and Web3 incubator, sharing the returns with
            you!
          </p>
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[95%]  mx-auto my-5 grid lg:grid-cols-5  grid-cols-1 gap-[2rem]">
          <div
            className=" w-[95%] lg:col-span-2 col-span-5 md:h-[100px] h-auto flex items-center justify-center md:flex-row flex-col md:gap-[1rem] gap-[0rem] rounded-[10px] shadow-lg px-2"
            style={{
              background:
                "linear-gradient(138.02deg, rgba(255,255,255,0.4) 16.28%, rgba(255,255,255,0.1) 94.86%)",
            }}
          >
            <p className="opacity-30 md:text-[80px] text-[40px] font-semibold text-center text-[#33bc24]">
              01
            </p>
            <p className=" text-sm  text-white">
              Our NFTs Multiply 0xEth Tokens and give you a claim on Treasury
              assets
            </p>
          </div>
          <div
            className="w-[95%] lg:col-span-3 col-span-5 md:h-[100px] h-auto flex items-center justify-center md:flex-row flex-col md:gap-[1rem] gap-[0rem] rounded-[10px] shadow-lg"
            style={{
              background:
                "linear-gradient(138.02deg, rgba(255,255,255,0.4) 16.28%, rgba(255,255,255,0.1) 94.86%)",
            }}
          >
            <p className="opacity-30 md:text-[80px] text-[40px] font-semibold text-center text-[#33bc24]">
              02
            </p>
            <p className=" text-sm md:text-left text-white py-1 text-center">
              Why invest in one project when you can invest in many and leverage
              the deal flow and investment expertise of{" "}
              <span className="text-[#33BC24]">0xEthDAO?</span>
            </p>
          </div>
          <div
            className="w-[95%] lg:col-span-5 col-span-5 md:h-[100px] h-auto flex items-center justify-center md:flex-row flex-col md:gap-[1rem] gap-[0rem] rounded-[10px] shadow-lg"
            style={{
              background:
                "linear-gradient(138.02deg, rgba(255,255,255,0.4) 16.28%, rgba(255,255,255,0.1) 94.86%)",
            }}
          >
            <div className="flex items-center md:flex-row flex-col  lg:gap-[2rem] md:gap-[0.5rem] gap-[0rem]">
              <p className="opacity-30 md:text-[80px] text-[40px] font-semibold text-center text-[#33bc24]">
                03
              </p>
              <p className=" text-sm text-left text-white">
                Why invest in one project when you can invest in many and
                leverage the deal flow and investment expertise of{" "}
                <span className="text-[#33BC24]">0xEthDAO?</span>
              </p>
            </div>
            <div className=" md:w-[25%] w-[100%]">
              <Btn
                text={"Watch short Video"}
                style={"w-[100%] md:py-[12px] py-[8px] my-1 "}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-[4%] md:w-[10%] w-[15%] mainDiv flex flex-col justify-center items-center gap-[2rem] fixed top-[20%] lg:left-[2%] right-[2%] rounded-[30px] py-[2rem] shadow-lg z-[999]  hover:bg-[#474646] delay-150 cursor-auto">
        {socialImages.map((items, index) => {
          return (
            <div key={index} className="">
              <img
                src={items}
                alt=""
                className="w-[120%] hover:scale-150 transition-all ease-in-out delay-300 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
