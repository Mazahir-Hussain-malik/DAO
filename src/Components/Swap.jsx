import gifImage1 from "../assets/dashboard/gifImage1.gif"
import gifImage2 from "../assets/dashboard/gifImage2.gif"
import gifImage3 from "../assets/dashboard/gifImage3.gif"
import gifImage4 from "../assets/dashboard/gifImage4.gif"
import gifImage5 from "../assets/dashboard/gifImage5.gif"
import gifImage6 from "../assets/dashboard/gifImage6.gif"
import gifImage7 from "../assets/dashboard/gifImage7.gif"
import gifImage8 from "../assets/dashboard/gifImage8.gif"
import gifImage9 from "../assets/dashboard/gifImage9.gif"
import gifImage10 from "../assets/dashboard/gifImage10.gif"
import GitIconTop from "../assets/dashboard/gifImage1-icon.svg"
import { IoIosArrowDown } from "react-icons/io";
import lastButIcon from "../assets/dashboard/button-iconlast.png"
const CardsArray = [
    {
        image: gifImage5,
        Icon: GitIconTop,
        content: "Fish #1",
        number: "1 x"
    },
    {
        image: gifImage4,
        content: "Fish #2",
        number: "2 x"
    },
    {
        image: gifImage3,
        content: "Fish #3",
        number: "3 x"
    },
    {
        image: gifImage2,
        content: "Fish #4",
        number: "4 x",
    },
    {
        image: gifImage1,
        content: "Fish #5",
        number: "5 x"
    },
    {
        image: gifImage10,
        content: "Fish #6",
        number: "6 x"
    },
    {
        image: gifImage9,
        content: "Fish #7",
        number: "7 x"
    },
    {
        image: gifImage8,
        content: "Fish #8",
        number: "8 x"
    },
    {
        image: gifImage7,
        content: "Fish #9",
        number: "9 x"
    },
    {
        image: gifImage6,
        content: "Fish #10",
        number: "10 x"
    },
]
const SwapComponent = () => {
    return (
        <div>
            <div className="bg-black w-full pt-5 px-4 sm:px-6 md:px-8 lg:ps-72">

                <header>
                    <div className="w-full bg-[#7A7C9B] rounded-md flex flex-col items-center justify-center px-[70px] py-[20px]">
                        <h2 className="text-[#D9D2FF] text-4xl font-normal" style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}>SELECT NFT</h2>
                        <p className="font-normal text-sm my-4 text-[#fff]" style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}>To start earning you need to select and buy an NFT. Please click on the NFT of your choosing. The NFT will determine the multiplier you will receive.</p>
                        <h3 className="font-semibold text-xl text-[#fff]" style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}>To start, select your NFT level below</h3>
                    </div>
                    <div className="md:w-[80%] w-full mx-auto  my-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {
                                CardsArray.map((items, id) => (
                                    <div key={id} className="bg-[#1E283D]  relative py-[6px] px-2 rounded-[10px] flex flex-col justify-center items-center">
                                        <img src={items.Icon} className="absolute top-[-13px] right-[-13px]" alt="" />
                                        <img src={items.image} className="w-full rounded-lg" alt="gif loading" />
                                        <p className="my-[18px] text-[#D9D2FF] text-xl font-medium text-center">{items.content}</p>
                                        <span className="text-[#0BDF0E] text-xl font-med ium bg-[#121E2A] rounded-lg px-10 py-1">{items.number}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#4E527D] py-4 text-center rounded-md ">
                            <h2 className="font-semibold text-xl my-2 text-[#fff]" style={{
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}>As a bonus we will gift you 10% of the NFT value in tokens.</h2>
                            <p className="font-normal text-base my-1 text-[#fff]" style={{
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}><span className="text-[#C90000]"> NOTE :</span> &nbsp; &nbsp;&nbsp;   To increase your outcome, add additional tokens to your NFT</p>
                        </div>
                        <div className="md:w-[70%] w-[90%] mx-auto md:py-9 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            <div className="text-center py-4 bg-[#212F45] px-[22px] text-xl font-medium rounded-xl">
                                <h2 className="text-white">10,230 <br /><span>USDT</span> </h2>
                            </div>
                            <div className="text-center  py-4 px-[22px] text-xl font-medium rounded-xl bg-[#212F45]">
                                <h2 className="text-white">204,600 <br /> <span className="text-[#0BDF0E]"> USDT</span> </h2>
                            </div>
                            <div className="text-center  py-4 px-[22px] text-xl font-medium rounded-xl bg-[#212F45]" >
                                <h2 className="text-white">204,600 <br /> <span className="text-[#0BDF0E]"> USDT</span> </h2>
                            </div>
                            <div className="text-center  py-4 px-[22px] text-xl font-medium rounded-xl "  style={{
                                background: 'linear-gradient(72deg, rgba(33, 231, 134, 0.60) 2.9%, rgba(48, 131, 49, 0.60) 100%)'
                            }}>
                                <h2 className="text-white">102,300 <br /> <span className="text-[#0BDF0E]"> USDT</span> </h2>
                            </div>
                            <div className="text-center  py-4 px-[22px] text-xl font-medium rounded-xl bg-[#212F45]">
                                <h2 className="text-white">204,600 <br /> <span className="text-[#0BDF0E]"> USDT</span> </h2>
                            </div>
                        </div>
                        <div className="md:w-[70%] w-[90%] mx-auto mb-14 bg-gray-200 rounded-md dark:bg-gray-700">
                            <div className="bg-[#0E9219] text-xs font-medium text-blue-100 text-center p-0.2 leading-none rounded-full" style={{ width: '80%' }}> 10,230 USDT</div>
                        </div>
                    </div>
                    <div className="bg-[#212F45] md:w-[70%] mx-auto w-[90%] rounded-md py-7 px-4">
                        <h2 className="pt-7 pb-2 text-center font-medium md:text-3xl text-xl text-[#D9D2FF]">Current  selection</h2>
                        <div className="">
                            <div className="min-w-full bg-[#121E2A] rounded-md ">
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">NFT Price </p>
                                    <div className="px-6 py-4 flex items-center justify-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>300</p>
                                    </div>
                                </div>
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">Additional Tokens  </p>
                                    <div className="px-6 py-4 flex items-center justify-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">Total Price</p>
                                    <div className="px-6 py-4 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="pt-7 pb-2 text-center font-medium md:text-3xl text-xl text-[#D9D2FF]">You will get</h2>
                        <div className="">
                            <div className="min-w-full bg-[#121E2A] rounded-md ">
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">Multiplier Level </p>
                                    <div className="px-6 py-4 flex items-center justify-start gap-3">
                                        <p>2x</p>
                                    </div>
                                </div>
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">Total Token Staked  </p>
                                    <div className="px-6 py-4 flex items-center justify-start gap-3">

                                        <p>14.12 <span className="text-[#0BDF0E]">0xEthDao</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h2 className="pt-7 pb-2 text-center font-medium md:text-3xl text-xl text-[#D9D2FF]">Future Value</h2>
                        <div className="">
                            <div className="min-w-full bg-[#121E2A] rounded-md ">
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">6 Months </p>
                                    <div className="px-6 py-4 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>37</p>
                                    </div>
                                </div>
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">1 year</p>
                                    <div className="px-6 py-4 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>42</p>
                                    </div>
                                </div>
                                <div className="w-full text-white flex justify-between">
                                    <p className="px-6 py-4 whitespace-nowrap">2 year</p>
                                    <div className="px-6 py-4 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.65129 0.5H19.6295C19.9631 0.5 20.2712 0.678033 20.4375 0.966861L24.5099 8.03827C24.7211 8.405 24.6584 8.86785 24.3571 9.16523L13.1476 20.2311C12.7845 20.5896 12.2004 20.5896 11.8373 20.2311L0.642977 9.18018C0.334741 8.87589 0.277022 8.39955 0.503684 8.03053L4.85679 0.944173C5.02632 0.668193 5.32716 0.5 5.65129 0.5ZM17.8247 3.65714V5.64129H13.8428V7.01694C16.6394 7.16396 18.7376 7.76773 18.7532 8.49143L18.7531 10.0002C18.7375 10.7238 16.6394 11.3276 13.8428 11.4746V14.8507H11.1988V11.4746C8.40224 11.3276 6.30408 10.7238 6.28855 10.0002L6.2886 8.49143C6.30418 7.76773 8.40224 7.16396 11.1988 7.01694V5.64129H7.21699V3.65714H17.8247ZM12.5209 10.4382C15.5053 10.4382 17.9998 9.92762 18.6102 9.24581C18.0925 8.66764 16.22 8.21259 13.8428 8.08761V9.52795C13.4168 9.55035 12.9745 9.56215 12.5209 9.56215C12.0672 9.56215 11.6249 9.55035 11.1988 9.52795V8.08761C8.82162 8.21259 6.94911 8.66764 6.43144 9.24581C7.0419 9.92762 9.53639 10.4382 12.5209 10.4382Z" fill="#009393" />
                                        </svg>
                                        <p>46</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="bg-[#212F45] md:my-14 my-7 md:w-[70%] mx-auto w-[90%] rounded-md py-7 px-4">
                        <div className=" text-center ">
                            <h2 className="pt-3 pb-2 text-center font-medium md:text-3xl text-xl text-[#D9D2FF]">Select your username
                            </h2>
                            <p className="text-md mb-2 font-normal text-[#d9d2ff]" style={{
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}>Please select your username, which you can later share with friends and earn rewards!</p>
                            <textarea className="w-full text-white my-2 bg-[#121E2A] rounded-md py-4 px-3" name="" id="" cols="60" rows="1" placeholder="@0xlazytron" ></textarea>
                        </div>

                    </div>
                    <div className="bg-[#212F45] md:my-14 my-7 md:w-[70%] mx-auto w-[90%] rounded-md py-7 px-4">
                        <div className=" text-center ">
                            <h2 className="pt-3 pb-2 text-center font-medium md:text-3xl text-xl text-[#D9D2FF]">Did you get invited to <span className="text-[#0BDF0E]">0xEthDao</span> ?
                            </h2>
                            <p className="text-md mb-2 font-normal text-[#d9d2ff]" style={{
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}>If so, please enter your referrals username below!</p>
                            <textarea className="w-full text-white my-2 bg-[#121E2A] rounded-md py-4 px-3" name="" id="" cols="60" rows="1" placeholder="https://0xethdao.io/ref=?@0xlazytron" ></textarea>
                        </div>

                    </div>
                    <div className="flex justify-center pb-16">
                        <button className="text-white md:text-xl text-sm font-medium px-4 py-3 bg-[#FB3640] rounded-[10px] flex justify-center">
                            <span className="flex gap-1 items-center border-r-[3px] px-3">
                                <img src={lastButIcon} alt="" />
                                <span>USDT</span>
                                <IoIosArrowDown />
                            </span>
                            <span className="px-3">Insufficient balance</span>
                        </button>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default SwapComponent