import React from "react";
import SlideCard from "./cards/FansCard";
import revolution from "./revolution";
import EvolvStar from "../../../public/assets/svgs/EvolvStar.svg";
import Image from "next/image";

function fans() {
  return (
    <section>
      {/* Mobile Version */}
      <div className="md:hidden flex flex-col py-[164px] items-center">
        <p className="font-sequel text-white text-[36px] text-center">
          Come join the{" "}
          <span className="font-array text-primaryRed text-[39px]">
            revolution
          </span>
        </p>
        <div className="px-4 pt-[48px]">
          <SlideCard>
            <div className="flex flex-col items-center px-[32px] py-[76px]">
              <p className="font-sequel text-white text-center text-[30px] w-[280px]">
                For fans & collectors
              </p>
              <p className="font-satoshi text-[22px] py-[68px] text-white text-center">
                Join our community today and stay up-to-date with the latest,
                updates and drops.
              </p>
              {/* font-satoshi text-center border-2 rounded-xl hover:text-black hover:bg-[#39FECB] border-[#39FECB] px-[77px] py-[18px] text-white text-[20px] */}
              <button className="font-satoshi z-10 text-center rounded-xl border-2 cursor-pointer border-[#39fecb] px-[77px] py-[18px] text-white text-[20px]">
                Lets Talk
              </button>
            </div>
          </SlideCard>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex flex-col py-[290px] pl-16">
        <p className="text-start text-[64px] font-sequel leading-[80px] w-[772px] text-white">
          Come join the{" "}
          <span className="font-array text-[72px] text-primaryRed">
            revolution
          </span>
        </p>
        <div className="flex flex-row space-x-20 justify-between">
          <div className="pt-[48px]">
            <SlideCard>
              <div className="flex flex-col items-start pl-[32px] py-[70px]">
                <p className="font-sequel text-white text-start text-5xl w-[472px] leading-[67px]">
                  For brands & creators
                </p>
                <p className="font-satoshi text-3xl py-[32px] w-[460px] leading-[48px] text-white text-start">
                  Launch your own line of digital collectibles powered by
                  utilities, built by EVOLV.
                </p>
                {/* font-satoshi text-center border-2 rounded-xl hover:text-black hover:bg-[#39FECB] border-[#39FECB] px-[77px] py-[18px] text-white text-[20px] */}
                <button className="font-satoshi700 z-10 text-center rounded-xl border-2 cursor-pointer border-primaryRed hover:bg-primaryRed px-[77px] py-[18px] text-white text-[20px]">
                  Lets Talk
                </button>
              </div>
            </SlideCard>
          </div>
          <Image
            src={EvolvStar}
            alt=""
            width={380}
            height={375}
            className="animate-pulse"
          />
          <div className="pt-[48px] lg:pr-14">
            <SlideCard>
              <div className="flex flex-col items-start pl-[32px] py-[70px]">
                <p className="font-sequel text-white text-start text-5xl w-[472px] leading-[67px]">
                  For fans & collectors
                </p>
                <p className="font-satoshi text-3xl py-[32px] w-[460px] leading-[48px] text-white text-start">
                  Join our community today and stay up-to-date with the latest,
                  updates and drops.
                </p>
                {/* font-satoshi text-center border-2 rounded-xl hover:text-black hover:bg-[#39FECB] border-[#39FECB] px-[77px] py-[18px] text-white text-[20px] */}
                <button className="font-satoshi700 z-10 text-center font-bold rounded-xl border-2 cursor-pointer hover:text-black hover:bg-[#39FECB] border-[#39fecb] px-[77px] py-[18px] text-white text-[20px]">
                  Get Started
                </button>
              </div>
            </SlideCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default fans;
