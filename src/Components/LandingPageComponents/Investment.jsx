import React from "react";
import IMEX from "../../assets/landingpage/IMEX.svg";
import ATTOKEN from "../../assets/landingpage/AITOKEN.svg";
import ETHERSCAN from "../../assets/landingpage/ETHERSCAN.svg";
import SONC from "../../assets/landingpage/SONC.svg";
import BINANCE from "../../assets/landingpage/BINANCE.svg";
import huobiwallet from "../../assets/landingpage/huobiwallet.svg";
import Near from "../../assets/landingpage/Near.svg";
import zerion from "../../assets/landingpage/zerion.svg";
import Btn from "../Btn";

const Investment = () => {
  const cards = [
    {
      id: 1,
      image: IMEX,
    },
    {
      id: 2,
      image: ATTOKEN,
    },
    {
      id: 3,
      image: ETHERSCAN,
    },
    {
      id: 4,
      image: SONC,
    },
    {
      id: 5,
      image: BINANCE,
    },
    {
      id: 6,
      image: huobiwallet,
    },
    {
      id: 7,
      image: Near,
    },
    {
      id: 8,
      image: zerion,
    },
  ];

  return (
    <div className="py-[2rem]">
      <div className="md:w-[80%] w-[85%] mx-auto ">
        <h2 className="md:text-[56px] text-[30px] text-center font-semibold leading-[44px] my-2">
          INVESTMENTS
        </h2>
        <br />
        <hr className="bg-[#33BC24] w-[100%] h-[3px] border-none shadow-xl my-[1rem]" />
      </div>

      <div className="cards grid grid-cols-4 gap-[2rem] md:w-[60%] w-[85%] mx-auto py-[3rem]">
        {cards.map(({ id, image }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center hover:scale-105 transition-all ease-in-out delay-150"
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="bg-[#33BC24] h-[3px] border-none shadow-xl my-[1rem] md:w-[80%] w-[85%] mx-auto" />
      <div className="w-[80%] mx-auto lg:text-[30px] text-[16px] font-normal py-[2rem] flex justify-between md:flex-row flex-col">
        <p>New investment opportunities are constantly evaluated.</p>
        <Btn
          text={"Apply For Funding"}
          style={"py-[8px] md:w-[25%] w-[100%] md:my-0 my-[1rem]"}
        />
      </div>
      <hr className="bg-[#33BC24] h-[3px] border-none shadow-xl my-[1rem] md:w-[80%] w-[85%] mx-auto" />
    </div>
  );
};

export default Investment;
