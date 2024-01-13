import React from "react";
import binace from "../../assets/landingpage/binanceChain.svg";
import huobiwallet from "../../assets/landingpage/huobiwallet.svg";
import zerion from "../../assets/landingpage/zerion.svg";
import Near from "../../assets/landingpage/Near.svg";
import ATtoken from "../../assets/landingpage/ATtoken.svg";
import token from "../../assets/landingpage/token.svg";
import "./Styles.css";

const Markets = () => {
  const cardsData = [
    {
      id: 1,
      image: binace,
    },
    {
      id: 2,
      image: zerion,
    },
    {
      id: 3,
      image: huobiwallet,
    },
    {
      id: 4,
      image: ATtoken,
    },
    {
      id: 5,
      image: Near,
    },
  ];
  return (
    <div className="market md:py-[5rem] py-[2rem]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[#fff] flex items-center justify-center gap-[1rem] md:text-[56px] text-[30px] font-semibold leading-[44px]">
          <img src={token} alt="" className="md:w-auto w-[20%]" /> MARKETS
        </h2>
        <p className="md:text-[30px] text-[16px] md:text-base text-center w-[95%] mx-auto font-normal leading-[40px] md:tracking-[5.7px] tracking-[3px] md:my-[1rem] my-0 ">
          Buy NFT & Stake 0xETHDao Now
        </p>
        <p className="md:text-[20px] text-[14px] w-[95%] mx-auto font-normal tracking-[1.4px] leading-[20px] md:my-[1rem] my-[0.5rem] text-center ">
          <span className="text-[#33BC24]">0xETHDao</span> tokens can ONLY be
          staked to <span className="text-[#33BC24]">0xETHDao</span> NFT inside
          the <span className="text-[#33BC24]">0xETHDao</span>
        </p>
      </div>

      <div className="cards grid md:grid-cols-5 grid-cols-1 w-[80%] mx-auto py-4 px-8 gap-[2rem] items-center bg-[lightgray] rounded-[19px] ">
        {cardsData.map(({ id, image }) => {
          return (
            <div
              key={id}
              className=" bg-[#141B22] p-4 rounded-[14px] shadow-xl flex flex-col justify-center items-center"
              style={{
                background: "var(--Surface-main, #141B22)",
              }}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Markets;
