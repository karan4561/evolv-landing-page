import React from "react";

function mainSection() {
  return (
    <div className="pt-[193px] md:pt-[170px] flex flex-col min-h-screen md:min-h-[1100px] md:pb-[252px] items-center md:justify-start md:items-start md:pl-[56px]">
      <p className="text-center font-sequel text-white text-3xl md:text-7xl md:leading-[100px]">
        Launch NFTs
      </p>
      <p className="text-center font-sequel text-white text-[32px] md:text-7xl md:leading">
        that drive
      </p>
      <p className="text-center text-primaryRed font-array animate-pulse md:leading-[100px] text-[62px] md:text-[90px]">
        change
      </p>

      <button className="md:hidden text-base font-satoshi border-2 mt-9 rounded-xl border-primaryRed px-[64px] py-2">
            <span className="text-white">Get Started</span>
        </button>

        <p className="md:hidden text-white pt-[46px] pb-[286px] w-[337px] md:w-[500px] font-satoshi text-lg text-center">
            Launch dynamic and immersive NFTs with Evolv that unlocks value for you
            and your holders.
        </p>
        

      <div className="hidden md:flex pt-[65px] items-center md:flex-row md:justify-start md:space-x-[45px]">
        {/* <button className="text-white rounded-lg mt-[68px] h-[56px] font-satoshi text-[20px] border-2 px-[64px] border-primaryRed py-[18px] md:hover:bg-primaryRed">
            Get Started
        </button> */}

        <button className="text-[20px] items-center h-[56px] font-satoshi border-2 rounded-xl hover:bg-primaryRed border-primaryRed px-[64px] py-[12px]">
            <span className="text-white">Get Started</span>
        </button>

        <p className="text-white md:w-[510px] xl:w-[637px] font-satoshi md:text-xl xl:text-[28px]  xl:leading-[36px] text-start">
            Launch dynamic and immersive NFTs with Evolv that unlocks value for you
            and your holders.
        </p>
      </div>
    </div>
  );
}

export default mainSection;
