import React from "react";
import Image from "next/image";

function revolution() {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center pt-[127px] md:pt-[100px] md:pb-[90px]">
      <p className="font-sequel w-[80%] sm:w-[900px] text-white text-center text-3xl sm:text-5xl md:text-5xl xl:text-7xl md:leading-[57px]">
        It’s time for an NFT
        <span className="font-array text-[40px] sm:text-[52px] md:text-6xl xl:text-8xl md:animate-pulse text-primaryRed">
          {" "}
          revolution
        </span>
      </p>

      <div className="md:hidden border-2 rounded-full h-[155px] w-[155px] mt-[120px] border-primaryRed p-[11px]">
            <Image
            className="relative top-[30%] left-[30%]"
            src={"/assets/svgs/EvolvStar.svg"}
            width={55}
            height={55}
            alt=""
            />
        </div>
        <p className="md:hidden pt-[44px] px-5 font-satoshi text-lg w-[85%] text-center text-white">
            We believe NFTs can be a lot more. Introducing immersive NFTs on Evolv,
            amplify your NFT holding experience with interactive, gamified NFTs.
        </p>

      <div className="hidden md:flex md:flex-row justify-between items-center space-x-[212px]">
        <div className="border-2 rounded-full h-[300px] w-[300px] mt-[120px] border-primaryRed p-[8.27px]">
            <Image
            className="relative top-[30%] left-[30%]"
            src={"/assets/svgs/EvolvStar.svg"}
            width={120}
            height={120}
            alt=""
            />
        </div>
        <p className="font-satoshi text-2xl leading-[40px] pt-28 w-[390px] tracking-wider text-start text-white">
            We believe NFTs can be a lot more. Introducing immersive NFTs on Evolv,
            amplify your NFT holding experience with interactive, gamified NFTs.
        </p>
      </div>
    </div>
  );
}

export default revolution;