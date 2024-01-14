import React from "react";
import { useState } from "react";

const Faqs = () => {
  const [open, setIsOpen] = useState(0);

  function handlePopUp(index) {
    setIsOpen(open === index ? null : index);
  }

  const data = [
    {
      id: 1,
      heading: "What are the NFTs?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 2,
      heading: "How do i get NFTs?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 3,
      heading: "Where we can buy and sell NFts ?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 4,
      heading: "Where we can buy and sell NFts ?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 5,
      heading: "Where we can buy and sell NFts ?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 6,
      heading: "Where we can buy and sell NFts ?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 7,
      heading: "Where we can buy and sell NFts ?",
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
  ];

  return (
    <div className="py-[3rem]">
      <h2 className="md:text-[56px] text-[30px] font-semibold text-[#fff] text-center my-[2rem]">
        FAQS
      </h2>
      <div className="flex justify-center flex-col items-center gap-[1rem] md:w-[60%] w-[98%]  mx-auto ">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="shadow-xl bg-[#141B22] rounded-[10px] p-[1.5rem] w-full "
            >
              <h2
                className="md:text-[30px] text-[24px] shadow-2xl  font-semibold  "
                onClick={() => handlePopUp(index)}
              >
                {items.heading}
              </h2>
              {open === index && (
                <div className="text-[#C2C3C5] md:text-[18px] text-[14px] font-normal py-[1rem] transition-all ease-in-out delay-150 ">
                  <hr className="bg-[#C2C3C5]" />
                  <p className="md:w-[60%] w-[100%] my-[1rem]">
                    {items.paragraph}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
