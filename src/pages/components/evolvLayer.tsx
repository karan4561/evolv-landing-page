import React, { useEffect, useState } from "react";
import SlideCard from "./cards/SlideCard";
import Image from 'next/image';
import EvolvEarth from '../../../public/assets/svgs/EvolvEarth.png'

function EvolvLayer() {
  const [selected, setSelected] = useState("creators");

  // useEffect(() => {
  //   console.log(selected);
  // });
  const creatorText = [
    "Build stronger communities",
    "Achieve a dynamic product market fit",
    "Unlock true royalties",
  ];
  const collectorText = [
    "Get rewarded for your effort",
    "Intimate connection with your favourite brands",
    "Contribute-to-earn",
  ];
  return (
    <div className="flex flex-col items-center pt-12 sm:pt-36 pb-[100px] md:pb-[200px]">
      <p className="font-satoshi700 text-[24px] sm:text-[32px] sm:w-[80%] pb-14 pt-28 md:pt-[58px] md:4xl xl:text-[48px] md:pb-[30px] md:w-[1340px] text-center w-[345px] font-[400px] text-[#E2E4E8]">
        A Dynamic NFT infrastructure which creates value for
      </p>
      {/* Mobile Version */}
      <div className="md:hidden px-[24px]">
        <div className="flex flex-row space-x-[40px] px-[24px] text-primaryRed font-array text-[24px]">
          <h1
            className=" cursor-pointer"
            onClick={() => setSelected("creators")}
          >
            Creators
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={() => setSelected("collectors")}
          >
            Collectors
          </h1>
        </div>
        <div className="mt-7 h-full">
          <SlideCard>
            <div className="p-[20px]">
              <ul className="text-lg list-disc pl-4 font-satoshi tracking-widest text-white">
                {selected === "creators" &&
                  creatorText.map((item) => <li key={item}>{item}</li>)}
                {selected === "collectors" &&
                  collectorText.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </SlideCard>
        </div>
      </div>
      {/* Desktop Version */}
      <div className="hidden md:flex flex-col items-center">
        <div className="flex flex-row font-array md:pt-10 text-5xl xl:text-6xl pb-5 space-x-[312px] text-primaryRed">
          <p className="-ml-[44px]">Creators</p>
          <p className="pl-[170px]">Collectors</p>
        </div>
        <div className="flex flex-row space-x-40">
          <div className="w-[553px]">
            <SlideCard>
              <div className="">
                <ul className="xl:text-[32px] text-2xl text-gray-100 list-disc text-left px-12 leading-9 py-4 tracking-wider">
                  {creatorText.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SlideCard>
          </div>
          <div className="w-[593px] ">
            <SlideCard>
              <ul className="xl:text-[32px] text-[22px] text-gray-100 list-disc text-left pl-10 leading-9 py-4 tracking-wider">
                {collectorText.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SlideCard>
          </div>
        </div>
      </div>
      <div className="relative min-h-[215px] w-[180%] flex justify-center items-center sm:min-h-[400px] sm:-mt-[100px] md:h-[500px] md:-mt-[100px] md:w-[100%] md:mx-auto">
        <Image src={EvolvEarth} alt="evolv" className="object-contain md:-mt-5 md:mr-8 md:w-[650px] md:h-[650px] sm:h-[50%] sm:w-[50%] h-[70%] w-[70%]" />
        <div className="absolute text-center top-30% md:top-[32%] md:pr-7">
          <h6 className="font-satoshi text-[20px] text-gray-100 md:text-2xl">
            WE CALL IT THE
          </h6>
          <h1 className="font-array text-6xl text-gray-100 uppercase leading-[60.5px] sm:text-64 sm:leading-[70px] md:text-[80px] md:leading-[75px]">
            Evolv
            <br /> Layer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EvolvLayer;
