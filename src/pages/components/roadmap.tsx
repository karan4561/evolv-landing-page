import React, { useRef, useState } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { TbCircleDashed } from "react-icons/tb"
import SlideCard from "../../../src/pages/components/cards/SlideCard"
import { SwiperSlide } from "swiper/react"
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg"

const Roadmap = () => {
  const roadmapData = [
    {
      title: "The Vision",
      text: "Our objective is to revolutionize the NFT space. We are honouring NFTs as an asset class by adding intrinsic value through utilities. Our state-of-the-art infrastructure makes NFTs interactive & dynamic thus immortalizing them in the long run.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q2 2022",
    },
    {
      title: "The Concept",
      text: "Our NFTs make brand-consumer relationships symbiotic at its very core. Unlocking bilateral transfer of value allows both parties involved to build and sustain long-term relationships.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q2 2022",
    },
    {
      title: "The Idea",
      text: "Evolv's model adds a gamified layer to NFTs that makes the holding experience immersive. This is achieved by a unique mechanism of rewarding effort & commitment with real-life utility.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q3 2022",
    },
    {
      title: "The POC",
      text: "Our pilot project 'Demons' is built on the same concept of Evolv-ed NFTs. We received an extremely positive response, cementing the idea that utility plays an important role in an NFT model. ",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q3 2022",
    },
    {
      title: "The MVP",
      text: "We are replicating the same framework in the form of a no-code, DIY SaaS platform, thus giving brands an opportunity to build stronger communities.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q3 2022",
    },
    {
      title: "The Platform",
      text: " With our framework in place, we are building our platform that's currently a work in progress.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q4 2022",
    },
    {
      title: "Testing",
      text: "Once our product is ready, we'll begin with the beta testing phase. We'll incorporate any necessary changes received from our initial brands and community.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q4 2022",
    },
    {
      title: "Pilot Launch",
      text: "Once our testing is out of the way, we'll proceed with the official product launch.",
      icon: <AiFillCheckCircle size={25} />,
      time: "Q4 2022",
    },
  ]
  const params = {
    slidesPerView: 3,
    spaceBetween: 40,
    observer: true,
  }

  const rowRef = useRef<HTMLDivElement>(null)
  const [ismoved, setIsmoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsmoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }
  return (
    <section className="mt-16 px-8 md:px-20 snap-start overflow-hidden">
      <p className="text-white text-xl sm:!text-2xl text-left">
        How we&apos;ll do it
      </p>
      <h1 className="text-3xl sm:text-5xl md:text-[75px] mt-1 text-primaryRed font-array">
        The Roadmap
      </h1>
      <div className="group relative  ">
        <CgChevronDoubleLeft
          className={`absolute z-40 m-auto h-7 w-7 text-primaryRed cursor-pointer ${
            !ismoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center h-auto scrollbar-hide space-x-4 overflow-x-scroll overflow-y-hidden md:space-x-8 md:p-2"
        >
          {roadmapData.map((data, key) => (
            <SwiperSlide
              key={key}
              className="relative h-[500px] w-[304px] sm:h-[400px] sm:w-[350px] md:!h-[350px] md:w-[400px] cursor-pointer mt-10 md:mt-20"
            >
              <SlideCard>
                <div className="px-8 py-4 min-h-[450px]">
                  <div className="flex justify-between">
                    <div className="text-red">{data.icon}</div>
                    <div className="text-right text-grey">{data.time}</div>
                  </div>

                  <h1 className="text-xl sm:text-2xl font-sequel text-white mt-3">
                    {data.title}
                  </h1>
                  <p className="text-white text-base w-[250px] py-4 tracking-wider sm:text-lg">
                    {data.text}
                  </p>
                </div>
              </SlideCard>
            </SwiperSlide>
          ))}
        </div>

        <CgChevronDoubleRight
          className="absolute -right-7 z-40 m-auto h-7 w-7 text-primaryRedred cursor-pointer"
          onClick={() => handleClick("right")}
        />
      </div>
    </section>
  )
}

export default Roadmap
