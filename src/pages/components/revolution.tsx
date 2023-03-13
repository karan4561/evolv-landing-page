import React from "react";
import Image from "next/image";

function revolution() {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center pt-[227px] md:pt-[250px] md:pb-[90px]">
      <p className="font-sequel sm:w-[500px] text-white text-center text-[32px] sm:text-[44px] md:[64px]">
        It’s time for an NFT
        <span className="font-array text-[40px] sm:text-[52px] md:text-[70px] text-primaryRed">
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
        <p className="md:hidden pt-[44px] px-5 font-satoshi text-[20px] text-center text-white">
            We believe NFTs can be a lot more. Introducing immersive NFTs on Evolv,
            amplify your NFT holding experience with interactive, gamified NFTs.
        </p>

      <div className="hidden md:flex md:flex-row justify-between items-center space-x-[182px]">
        <div className="border-2 rounded-full h-[275px] w-[275px] mt-[120px] border-primaryRed p-[12.27px]">
            <Image
            className="relative top-[30%] left-[30%]"
            src={"/assets/svgs/EvolvStar.svg"}
            width={100}
            height={100}
            alt=""
            />
        </div>
        <p className="font-satoshi text-[28px] pt-28 w-[402px] text-start text-white">
            We believe NFTs can be a lot more. Introducing immersive NFTs on Evolv,
            amplify your NFT holding experience with interactive, gamified NFTs.
        </p>
      </div>
    </div>
  );
}

export default revolution;
