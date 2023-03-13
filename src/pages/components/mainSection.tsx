import React from "react";

function mainSection() {
  return (
    <div className="pt-[193px] flex flex-col min-h-[700px] md:pb-[222px] items-center md:justify-start md:items-start md:pl-[56px]">
      <p className="text-center font-sequel text-white text-[32px] md:text-[60px]">
        Launch NFTs
      </p>
      <p className="text-center font-sequel text-white text-[32px] md:text-[60px]">
        that drive
      </p>
      <p className="text-center text-primaryRed font-array text-[62px] md:text-[90px]">
        change
      </p>

      <button className="md:hidden text-[20px] font-satoshi border-2 rounded-xl border-primaryRed px-[64px] py-[16px]">
            <span className="text-white">Get Started</span>
        </button>

        <p className="md:hidden text-white pt-[46px] pb-[286px] w-[337px] font-satoshi text-[18px] text-center">
            Launch dynamic and immersive NFTs with Evolv that unlocks value for you
            and your holders.
        </p>
        

      <div className="hidden md:flex pt-[105px] md:flex-row md:justify-start md:space-x-[45px]">
        {/* <button className="text-white rounded-lg mt-[68px] h-[56px] font-satoshi text-[20px] border-2 px-[64px] border-primaryRed py-[18px] md:hover:bg-primaryRed">
            Get Started
        </button> */}

        <button className="text-[20px] items-center h-[56px] font-satoshi border-2 rounded-xl hover:bg-primaryRed border-primaryRed px-[64px] py-[12px]">
            <span className="text-white">Get Started</span>
        </button>

        <p className="text-white  w-[337px] font-satoshi text-[18px] text-start">
            Launch dynamic and immersive NFTs with Evolv that unlocks value for you
            and your holders.
        </p>
      </div>
    </div>
  );
}

export default mainSection;
