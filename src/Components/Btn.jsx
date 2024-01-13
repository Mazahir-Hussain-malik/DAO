import React from "react";

const Btn = ({ text, style }) => {
  return (
    <button
      className={`bg-[rgb(51,188,36)] text-[#fff] rounded-[10px] flex flex-col justify-center items-center text-[16px] font-bold px-[32px] lg:py-[12px] py-[12px] transition-all ease-in-out delay-150 hover:bg-black hover:border-2 hover:border-[rgb(51,188,36)] hover:text-[rgb(51,188,36)]  ${style}`}
    >
      {text}
    </button>
  );
};

export default Btn;
