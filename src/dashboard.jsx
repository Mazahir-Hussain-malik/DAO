import { useState } from "react";
import logo from "./assets/dashboard/mainlogo.svg";
import teligramicon from "./assets/dashboard/teligramicon.svg"
import discordicon from "./assets/dashboard/discordicon.svg"
import twittericon from "./assets/dashboard/twittericon.svg"
import githubicon from "./assets/dashboard/discordicon.svg"
import linkeddinicon from "./assets/dashboard/linkeddinicon.svg"
import facebookicon from "./assets/dashboard/facebookicon.svg"
import Homeicon from "./assets/dashboard/Homeicon.svg"
import swapIcon from "./assets/dashboard/swapIcon.svg"
import Stake from "./assets/dashboard/StakeIcon.svg"
import Bag from "./assets/dashboard/BagIcon.svg"
import Help from "./assets/dashboard/HelpIcon.svg"
import Voting from "./assets/dashboard/VotingIcon.svg"
import Marketplace from "./assets/dashboard/MarketplaceIcon.svg"
import HalfIcon from "./assets/dashboard/HalfIcon.svg"
import ArrowDown2 from "./assets/dashboard/ArrowDown2.png"
import DiamontIcon from "./assets/dashboard/DiamontIcon.svg"
import WalletIcon from "./assets/dashboard/WalletIcon.svg"
import { CiSearch } from "react-icons/ci";

import DashboardComponent from "./components/Dashboard";
import SwapComponent from "./components/Swap";
import StakeComponent from "./components/Stake";

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <div>
      <div className="bg-[#121E2A] dark:bg-slate-900">
        <header className=" bg-black  sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
          <nav className="flex sm:flex-row flex-col basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
            <div className="me-5 lg:me-0 lg:hidden">
              <a className="flex-none py-[9px] lg:px-[33px] px-4 md:bg-[#1D253B] bg-black rounded-[8px] " href="#" aria-label="Brand">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-4 sm:justify-end justify-start lg:justify-between ">
              <div className="sm:hidden">
                <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </button>
              </div>

              <div className="">
                <div className="relative flex items-center flex-wrap md:space-x-4 space-x-0 gap-2 lg:space-y-0 space-y-2">

                  <div className="flex-none " href="#">
                    <h2 className="lg:py-[16px] py-2 md:px-[13px] px-2 font-medium lg:text-xl text-sm text-white bg-[#1D253B] rounded-[10px]">HOLDERS : &nbsp;&nbsp;&nbsp; <span className="text-[#0BDF0E]">3,9387</span></h2>
                  </div>
                  <div className="flex-none " href="#">

                    <h2 className="lg:py-[16px] py-2 md:px-[13px] px-2 font-medium lg:text-xl text-sm text-white bg-[#1D253B] rounded-[10px]">
                      <span className="mr-3">
                        <img src={DiamontIcon} className="inline-block" alt="" />
                      </span>2.33  /  0xETHDao
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center lg:justify-end justify-start gap-2 lg:space-y-0 space-y-2">
                <div className="relative">
                  <input type="text" placeholder="Search “Stake, Swap”" className=" focus:outline-none focus:ring-0 focus:border-transparent hover:border-gray-300 transition-all duration-300 text-white font-normal lg:text-xl text-sm lg:py-[12px] py-2 lg:px-[13px] px-2 bg-[#1D253B] rounded-[10px]" />
                  <a href="#" className="absolute lg:text-xl text-sm top-3 right-4  text-white">
                    <CiSearch />
                  </a>
                </div>
                <div className="relative">

                  <a href="#" className="lg:text-xl text-sm font-medium lg:py-[12px] py-2 md:px-[13px] px-2 bg-[#1D253B] rounded-[10px] text-white" style={{
                    background: 'linear-gradient(78deg, rgba(33, 231, 134, 0.40) 4.07%, rgba(36, 128, 37, 0.40) 97.61%)'
                  }}>
                    <span>
                      <img src={WalletIcon} className="w-[30px] h-[20px] inline-block" alt="" />
                    </span>
                    Connect Wallet
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            </button>

            <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                Application Layout

                <img src={Homeicon} className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" alt="" />
              </li>
              <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
                Dashboard
              </li>
            </ol>
            <div className="bg-black w-full">

              <div className={` ${isMenuOpen ? 'block' : 'hidden'} absolute bg-black left-0 right-0 top-[50px]`}>
                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                  <ul className="space-y-[10px]">
                    <li className="hs-accordion" id="account-accordion">

                      <a className={`flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-gradient-to-r from-green-400 via-green-500 to-green-600 ${activeSection === 'dashboard' ? 'text-blue-500' : ''
                        }`} href="#"
                        onClick={() => setActiveSection('dashboard')} >
                        <img src={Homeicon} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 font" alt="" />
                        Dashboard
                      </a>
                    </li>

                    <li className="hs-accordion" id="users-accordion">

                      <a className={`flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 ${activeSection === 'swap' ? 'text-blue-500' : ''
                        }`}
                        onClick={() => setActiveSection('swap')}
                        href="#" >
                        <img src={swapIcon} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Swap

                      </a>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                      <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                        <img src={Stake} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Stake

                      </a>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                      <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                        <img src={Bag} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Gift NFT

                      </a>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                      <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                        <img src={Help} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Help

                      </a>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                      <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                        <img src={Voting} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Voting

                      </a>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                      <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                        <img src={Marketplace} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                        Marketplace

                      </a>
                    </li>

                  </ul>
                  <li className="hs-accordion pt-6" id="account-accordion">
                    <a className="flex items-center space-x-2 gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 " href="#" >
                      <img src={HalfIcon} className="flex-shrink-0 overflow-visible w-[40px] h-[34px] dark:text-gray-600 " alt="" />
                      <div className="flex flex-col ">
                        <span className="font-normal text-xs text-[#575F6F]">Welcome,</span>
                        <p className="">  @0xlazytron</p>

                      </div>
                      <img src={ArrowDown2} className="ml-8" alt="" />
                    </a>

                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div id="" className="  hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#172231] pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
          <div className="px-6">
            <a className="flex-none" href="#" aria-label="Brand">

              <img src={logo} alt="logo" className=" py-[9px] px-[33px] bg-[#1D253B] rounded-[8px]" />
            </a>
            <div className="flex md:flex-row flex-col gap-2 md:space-y-0 space-y-1 items-center justify-center py-[22px] border-b-4 border-[#1D273C]">
              <a href="#">
                <img src={teligramicon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
              <a href="#">
                <img src={discordicon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
              <a href="#">
                <img src={twittericon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
              <a href="#">
                <img src={githubicon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
              <a href="#">
                <img src={linkeddinicon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
              <a href="#">
                <img src={facebookicon} className="w-[22px] h-[22px]" alt="icon" />
              </a>
            </div>
          </div>

          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="space-y-[20px]">
              <li className="hs-accordion" id="account-accordion">

                <a className={`flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 ${activeSection === 'dashboard' ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600' : ''
                  }`} href="#"
                  onClick={() => setActiveSection('dashboard')} >
                  <img src={Homeicon} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 font" alt="" />
                  Dashboard
                </a>
              </li>

              <li className="hs-accordion" id="users-accordion">

                <a className={`flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 ${activeSection === 'swap' ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600' : ''
                  }`}
                  onClick={() => setActiveSection('swap')} href="#" >
                  <img src={swapIcon} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Swap
                </a>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a className={`flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 ${activeSection === 'stake' ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600' : ''
                  }`}
                  onClick={() => setActiveSection('stake')} href="#" >
                  <img src={Stake} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Stake

                </a>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                  <img src={Bag} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Gift NFT

                </a>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                  <img src={Help} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Help

                </a>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                  <img src={Voting} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Voting

                </a>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a className="flex items-center gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600" href="#" >
                  <img src={Marketplace} className="flex-shrink-0 mx-3 overflow-visible w-[24px] h-[24px] dark:text-gray-600 " alt="" />
                  Marketplace

                </a>
              </li>

            </ul>
            <li className="hs-accordion pt-96" id="account-accordion">
              <a className="flex items-center space-x-2 gap-x-! py-2 px-2 font-medium text-base text-white bg- rounded-lg dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 " href="#" >
                <img src={HalfIcon} className="flex-shrink-0 overflow-visible w-[40px] h-[34px] dark:text-gray-600 " alt="" />
                <div className="flex flex-col ">
                  <span className="font-normal text-xs text-[#575F6F]">Welcome,</span>
                  <p className="">  @0xlazytron</p>

                </div>
                <img src={ArrowDown2} className="ml-8" alt="" />
              </a>

            </li>
          </nav>
        </div>
        <div className="">

          {activeSection === 'dashboard' && <DashboardComponent />}
          {activeSection === 'swap' && <SwapComponent />}
          {activeSection === 'stake' && <StakeComponent />}
        </div>
        
      </div>
    </div >
  )
}

export default Dashboard;