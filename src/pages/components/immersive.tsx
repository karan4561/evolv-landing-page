import React from "react";
import Image from "next/image";
import Vector from "../../../public/assets/svgs/Vector.png";
import { useState } from "react";
import star from "../../../public/assets/svgs/Star 6.png";
import SomeCard from "../components/cards/SomeCard";
import SlideCard from "./cards/SlideCard";

function Immersive() {
  const [selected, setSelected] = useState("interaction");

  const immersive = (
    <div className="">
      <p className="font-sequel text-[34px] md:text-[40px] w-[356px] md:w-[723px] text-center mx-auto text-[#F0EFF4]">
        Evolv layer makes NFT
      </p>
      <div className="pt-[40px] md:hidden">
        <Image src={Vector} height={401} width={405} alt="" />
      </div>
      <div className="pt-[40px] md:h-[550px] md:w-[555px] lg:h-[701px] lg:w-[705px] pl-12  hidden md:flex">
        <Image src={Vector} height={651} width={655} alt="" />
      </div>
    </div>
  );

  const slider = (
    <div className="md:flex md:flex-col md:items-start">
      <div className="flex flex-row pl-6 space-x-[38px] md:pl-14 md:space-x-[45px] ">
        {selected === "interaction" ? (
          <div className="flex flex-row space-x-[9px]">
            <Image src={star} alt="" />
            <h1
              className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-primaryRed"
              onClick={() => setSelected("interaction")}
            >
              Interaction
            </h1>
          </div>
        ) : (
          <h1
            className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-[#959CAB]"
            onClick={() => setSelected("interaction")}
          >
            Interaction
          </h1>
        )}

        {selected === "value" ? (
          <div className="flex flex-row space-x-[9px]">
            <Image src={star} alt="" />
            <h1
              className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-primaryRed"
              onClick={() => setSelected("value")}
            >
              Value
            </h1>
          </div>
        ) : (
          <h1
            className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-[#959CAB]"
            onClick={() => setSelected("value")}
          >
            Value
          </h1>
        )}
        {selected === "experience" ? (
          <div className="flex flex-row space-x-[9px]">
            <Image src={star} alt="" />
            <h1
              className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-primaryRed"
              onClick={() => setSelected("experience")}
            >
              Experience
            </h1>
          </div>
        ) : (
          <h1
            className="font-satoshi text-[20px] md:text-[26px] cursor-pointer text-[#959CAB]"
            onClick={() => setSelected("experience")}
          >
            Experience
          </h1>
        )}
      </div>
      <div className="pt-[28px] mx-[20px] w-[353px] h-[494px] md:h-[701px] md:w-[505px]">
        <SomeCard>
          {selected === "interaction" && (
            <div className="flex flex-col text-center p-[24px] items-center">
              <h1 className="text-[#F0EFF4] font-sequel text-[24px] md:text-[32px]">
                <span className="text-primaryRed">Sustained </span>NFT
                interaction
              </h1>
              <p className="font-satoshi text-[16px] md:text-[24px] text-[#F0EFF4]">
                <p className="pt-[36px]">
                  Build, sustain and reward long-term relationships. Go beyond
                  the one-way, top-down approach
                </p>
                <p className="pt-[22px]">
                  With unique NFT infrastructure that creates an interactive
                  loop between a you and your users, we’re Evolv-ing the current
                  NFT model. Evolv makes the engagement deriving mechanism
                  seamless by replacing the single-point interaction framework
                  with a multi-point one.
                </p>
              </p>
            </div>
          )}
          {selected === "value" && (
            <div className="flex flex-col text-center p-[24px] items-center">
              <h1 className="text-[#F0EFF4] font-sequel text-[24px] md:text-[32px]">
                <span className="text-primaryRed">Bilateral </span>exchange of
                Value
              </h1>
              <p className="font-satoshi text-[16px] md:text-[24px] text-[#F0EFF4]">
                <p className="pt-[36px]">
                  Evolv model benefits you and your NFT holders alike. By
                  incentivizing both parties to engage and interact, the model
                  enables bilateral transfer of value.
                </p>
                <p className="pt-[22px]">
                  Creators receive organic engagement, feedback and a dynamic
                  product-market fit while holders gain access to DeFi
                  utilities, perks and a closely-knit community as a part of the
                  same deal.
                </p>
              </p>
            </div>
          )}
          {selected === "experience" && (
            <div className="flex flex-col text-center p-[24px] items-center">
              <h1 className="text-[#F0EFF4] font-sequel text-[24px] md:text-[32px]">
                One word <span className="text-primaryRed">Gamified </span>
              </h1>
              <div className="font-satoshi text-[16px] md:text-[24px] text-[#F0EFF4]">
                <p className="pt-[36px]">
                  Expecting interaction without incentives is unfair from a
                  users pov. Evolv allows the NFT holder to experience what it
                  feels like to be on the receiving end of value transfer.
                </p>
                <p className="pt-[22px]">
                  Consumer satisfaction is accomplished by integrating utility
                  in the Evolv model. At the end of the day, an experience worth
                  remembering is crypto well spent!
                </p>
              </div>
            </div>
          )}
        </SomeCard>
      </div>
    </div>
  );
  return (
    <div>
      <div className="md:hidden flex flex-col items-center pb-[164px]">
        {immersive}
        {slider}
      </div>
      <div className="hidden md:flex flex-row pb-20 pl-12 pr-40 justify-between items-center">
        {immersive}
        <div>{slider}</div>
      </div>
    </div>
  );
}

export default Immersive;