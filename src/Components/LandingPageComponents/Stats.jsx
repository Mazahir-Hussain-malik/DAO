import React from "react";
import "./Styles.css";
import Rectangle3 from "../../assets/landingpage/Rectangle3.svg";
import Rectangle2 from "../../assets/landingpage/Rectangle2.svg";
import Rectangle1 from "../../assets/landingpage/Rectangle1.svg";
import Rectangle from "../../assets/landingpage/Rectangle.svg";
import border2 from "../../assets/landingpage/border2.svg";
import border1 from "../../assets/landingpage/border1.svg";
import Btn from "../Btn";

const Stats = () => {
  const CardsData = [
    {
      id: 1,
      image: Rectangle,
      owner: "NFT Owners",
      btnText: "3,8580 ",
      border1: border1,
      border2: border2,
    },
    {
      id: 2,
      image: Rectangle1,
      owner: "Average Multiplier",
      btnText: "3.14x ",
      border1: border1,
      border2: border2,
    },
    {
      id: 3,
      image: Rectangle1,
      owner: "Treasury Assets Value",
      btnText: "14,510,522",
      border1: border1,
      border2: border2,
    },
    {
      id: 4,
      image: Rectangle1,
      owner: "Total value Locked",
      btnText: "195,456,052",
      border1: border1,
      border2: border2,
    },
  ];

  return (
    <div className="stats lg:h-screen h-auto py-[3rem]">
      <div>
        <h2 className="md:text-[56px] text-[20px] text-center font-semibold leading-[60px] my-[1rem]">
          STATS
        </h2>
        <p className="my-[1rem] md:text-[30px] text-[14px] md:tracking-[5px] tracking-[3px] text-center ">
          STATS OF <span className="text-[#33BC24]">0xETHDao</span> TOKEN
        </p>
      </div>

      {/* cards are here */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-[85%] md:w-[90%] w-[95%] mx-auto shadow-xl md:gap-[2rem] gap-[1rem] text-center my-[4rem] py-[2rem]">
        {CardsData.map(({ id, image, owner, btnText, border1, border2 }) => {
          return (
            <div
              key={id}
              style={{
                borderRadius: "14px",
                background: "var(--Surface-main, #141B22)",
              }}
              className="text-center relative md:p-[3rem] p-[1rem] hover:scale-105 transition-all ease-in-out delay-150 md:w-[100%] w-[95%] mx-auto"
            >
              <img
                src={border1}
                alt=""
                className=" absolute top-[-5%] left-[-3%]"
              />
              <div className="my-[1rem]">
                <img src={image} alt="" className="mx-auto" />
              </div>
              <h2 className=" font-semibold text-[20px] capitalize">{owner}</h2>
              <Btn text={btnText} style={"w-[40%] mx-auto my-[1rem]"} />
              <img
                src={border2}
                alt=""
                className=" absolute right-[-4%] bottom-[-5%]"
              />
            </div>
          );
        })}
      </div>
      <div>
        <p className="md:text-[30px] text-[14px] text-[#fff] text-center font-normal tracking-[1.2px]">
          For More Visit Comprehensive
          <span className="text-[#33BC24]"> Statistic page</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Stats;
