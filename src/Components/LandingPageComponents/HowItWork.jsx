import React from "react";
import "./Styles.css";
import global from "../../assets/landingpage/Planet.svg";
import leftVectore from "../../assets/landingpage/Vector33.svg";
import rightvectore from "../../assets/landingpage/Vector34.svg";

const HowItWork = () => {
  return (
    <div className=" py-[2rem]">
      <h2 className="shadow-lg lg:text-[56px] md:text-[30px] text-[18px] font-semibold leading-[44px] py-4 text-center">
        HOW IT WORKS
      </h2>
      {/* cards first row is here */}
      <div className=" howItWork h-[1000px] relative ">
        <div className="  h-[500px]  py-[1rem]   ">
          <div className="flex justify-between lg:flex-row flex-col w-[90%] mx-auto   ">
            <div className="relative py-[4rem] lg:w-[45%] w-[95%] lg:mx-0 mx-auto  ">
              <img
                src={leftVectore}
                alt=""
                className="absolute lg:left-[38%] right-[0%] top-[15%]"
              />
              <div className=" border-[1px] border-[#21E786] lg:w-[60%] w-[95%] py-2 px-8 rounded-[10px] shadow-xl flex flex-col justify-center  bg-[#ffffff0d] hover:bg-[#9080800d] h-[170px]">
                <h2 className="text-[#fff] md:text-[32px] text-[24px] ">01</h2>
                <p className="text-[#B4C5CB] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae
                  non semper quis. Morbi sed aliquet donec facilisis. Senectus
                  eget.
                </p>
              </div>
            </div>
            <div className="relative flex justify-end lg:flex-row flex-col lg:w-[45%] w-[90%] lg:mx-0 mx-auto  items-center ">
              <img
                src={rightvectore}
                alt=""
                className="absolute lg:left-[38%] left-[-5%] lg:top-[15%]  top-[-10%]"
              />
              <div className=" border-[1px] border-[#21E786] lg:w-[60%] w-[95%] py-2 px-8 rounded-[10px] shadow-xl flex flex-col justify-center  bg-[#ffffff0d] hover:bg-[#9080800d] h-[170px] ">
                <h2 className="text-[#fff] md:text-[32px] text-[24px] ">02</h2>
                <p className="text-[#B4C5CB] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae
                  non semper quis. Morbi sed aliquet donec facilisis. Senectus
                  eget.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* global image is here */}

        <div className="absolute top-[0%] bottom-0 left-[20%] lg:block hidden">
          <p className="text-[16px] text-[#fff] absolute top-[33%]  w-[30%] p-4  left-[38%] z-[999] font-semibold leading-[35px] text-justify">
            The higher your NFT the faster your 0xEth tokens multiply and the
            greater your share of the treasury assets from the Web3 projects
            MetFi invests in.
          </p>

          <div className="roateImage">
            <img src={global} alt="globe image is here " className="w-[100%]" />
          </div>
        </div>

        {/* cards second row is here */}

        <div className="  h-[500px]  py-[1rem]   ">
          <div className="flex justify-between lg:flex-row flex-col w-[90%] mx-auto   ">
            <div className="relative py-[4rem] lg:w-[45%] w-[95%] lg:mx-0 mx-auto  ">
              <img
                src={leftVectore}
                alt=""
                className="absolute lg:left-[38%] right-[0%] top-[15%]"
              />
              <div className=" border-[1px] border-[#21E786] lg:w-[60%] w-[95%] py-2 px-8 rounded-[10px] shadow-xl flex flex-col justify-center  bg-[#ffffff0d] hover:bg-[#9080800d] h-[170px]">
                <h2 className="text-[#fff] md:text-[32px] text-[24px] ">03</h2>
                <p className="text-[#B4C5CB] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae
                  non semper quis. Morbi sed aliquet donec facilisis. Senectus
                  eget.
                </p>
              </div>
            </div>
            <div className="relative flex justify-end lg:flex-row flex-col lg:w-[45%] w-[90%] lg:mx-0 mx-auto  items-center ">
              <img
                src={rightvectore}
                alt=""
                className="absolute lg:left-[38%] left-[-5%] lg:top-[15%]  top-[-10%]"
              />
              <div className=" border-[1px] border-[#21E786] lg:w-[60%] w-[95%] py-2 px-8 rounded-[10px] shadow-xl flex flex-col justify-center  bg-[#ffffff0d] hover:bg-[#9080800d] h-[170px] ">
                <h2 className="text-[#fff] md:text-[32px] text-[24px] ">04</h2>
                <p className="text-[#B4C5CB] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae
                  non semper quis. Morbi sed aliquet donec facilisis. Senectus
                  eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
