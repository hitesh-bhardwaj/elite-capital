import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { NextButton, PreviousButton } from "../Common/SliderButtons";


const BoardofDirectors = () => {
  const { t } = useTranslation("about");
  const [openedIndex, setOpenedIndex] = useState(null);
  const [openedIndexinvestment, setOpenedIndexinvestment] = useState(null);
  const [openedIndexadviser, setOpenedIndexadviser] = useState(null);
  const boardMembers = t("boardMembers", { returnObjects: true });
  const adviserMembers = t("adviserMembers", { returnObjects: true });
  const investmentMembers = t("investmentMembers", { returnObjects: true });
  const [mobileWidth, setIsMobileWidth] = useState(false)
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobileWidth(globalThis.innerWidth <= 541);
      };
  
      checkMobile(); 
      window.addEventListener("resize", checkMobile); 
  
      return () => window.removeEventListener("resize", checkMobile); 
    }, []);

  return (
    <>
      <section className="w-screen h-full bg-[#ffffff]  pb-[5vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%] pt-[7vw]">
        <div className=" mobile:space-y-[5vw] ">
          <h2
            data-title-anim
            className="text-[4.6vw] font-display mb-[2vw] mobile:w-[90%] mobile:text-[12.5vw] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-0 pl-[5vw] mobile:mb-[7vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub")}
          </h2>
          <div>
            <div className="w-full h-full flex flex-wrap justify-start mobile:hidden ">
              {boardMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  transition-transform hover:scale-[1.02] tablet:w-full w-full px-[5vw] py-[2vw] tablet:flex-col ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease tablet:h-[40vw] tablet:w-[30vw]">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className="flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%] tablet:w-full"
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[5vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[3vw] w-[60%] leading-[1.2] tablet:w-full "
                    >
                      {item.des}
                    </p>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndex === index ? "h-[30vw] tablet:h-[65vw]" : "h-[8vw] rtl:h-[4vw] tablet:h-[10vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw] tablet:text-[2.5vw]  ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative  tablet:text-[2vw]"
                      onClick={() =>
                        setOpenedIndex(openedIndex === index ? null : index)
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndex === index ? "Read less -" : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {mobileWidth && (
  <MobileSwiper members={boardMembers}/>
)}
          </div>
        </div>
        <div className=" mobile:space-y-[5vw] pt-[8vw]">
          <h2
            data-title-anim
            className="text-[4.6vw] font-display  mobile:text-[12.5vw] mobile:w-[70%] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-0 pl-[5vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub1")}
          </h2>
          <div >
            <div className="w-full h-full flex flex-wrap justify-start mobile:hidden  ">
              {adviserMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  tablet:flex-col transition-transform hover:scale-[1.02] tablet:w-full w-full px-[5vw] py-[2vw] ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease tablet:h-[40vw] tablet:w-[30vw]">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className="flex flex-col mt-[2vw] gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%] tablet:w-full"
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[5vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[3vw] w-[50%] leading-[1.2]"
                    >
                      {item.des}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndexadviser === index ? "h-[25vw] tablet:h-[55vw]" : "h-[8vw] rtl:h-[4vw] tablet:h-[10vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw] tablet:text-[2.5vw] ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>

                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative tablet:text-[2vw]"
                      onClick={() =>
                        setOpenedIndexadviser(
                          openedIndexadviser === index ? null : index
                        )
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndexadviser === index
                          ? "Read less -"
                          : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {mobileWidth && (
  <MobileSwiper members={adviserMembers}/>
)}
          </div>
        </div>
        <div className="pt-[8vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[4.6vw] font-display  mobile:text-[12.5vw] mobile:w-[70%] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-0 pl-[5vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub2")}
          </h2>
          <div >
            <div className="w-full h-fit flex flex-wrap justify-start mobile:hidden tablet:gap-y-[7vw] tablet:flex-col">
              {investmentMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  transition-transform hover:scale-[1.02] tablet:w-full tablet:flex-col w-full px-[5vw] py-[2vw] ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease tablet:h-[40vw] tablet:w-[30vw]">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className={`flex flex-col mt-[2vw] py-[2vw] mobile:space-y-[2vw] w-[70%] transition-all duration-500 ease-in-out tablet:w-full`}
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[5vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[3vw] w-[30%]"
                    >
                      {item.des}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndexinvestment === index
                          ? "h-[25vw] tablet:h-[60vw]"
                          : "h-[10vw] rtl:h-[6vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw] tablet:text-[2.5vw] ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>

                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative tablet:text-[2vw]"
                      onClick={() =>
                        setOpenedIndexinvestment(
                          openedIndexinvestment === index ? null : index
                        )
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndexinvestment === index
                          ? "Read less -"
                          : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {mobileWidth && (
  <MobileSwiper members={investmentMembers}/>
)}
          </div>
        </div>

      </section>
    </>
  );
};


const MobileSwiper = ({ members }) => {
  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  onSwiper={(swiper) => (swiperRef.current = swiper)} breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}>
      {members.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`h-full flex gap-[5vw] fadeUp mobile:w-full transition-transform hover:scale-[1.02] tablet:w-[70vw] tablet:h-[180vw] w-full px-[5vw] py-[10vw] bg-[#BCBCBC] mobile:flex-col mobile:items-center mobile:h-full mobie:py-[4vw]  tablet:flex-col `}
          >
            <div className="h-[28vw] w-[22vw] mobile:w-[80vw] mobile:ml-[-10vw] mobile:h-[90vw] mobile:rounded-[3.5vw] overflow-hidden group transition-all duration-500 ease rounded-[2vw] tablet:w-[50vw] tablet:h-[50vw] rtl:mobile:ml-[10vw]">
              <Image
                src={item.img}
                height={626}
                width={535}
                alt="team"
                className="w-full h-full object-cover transition-all duration-500 ease "
              />
            </div>
            <div className="flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%] mobile:w-full tablet:w-full">
              <p
                data-para-anim
                className="text-[2.5vw] leading-[1.2] font-display mobile:text-[7.2vw] tablet:text-[5vw]"
              >
                {item.name}
              </p>

              <p
                data-para-anim
                className="mobile:text-[4.8vw] tablet:text-[3vw] w-[30%] mobile:w-full tablet:w-full"
              >
                {item.des}
              </p>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] mobile:h-[160vw]  `}
              >
                {item.features.map((feature, i) => (
                  <p
                    key={i}
                    className={`text-[1.3vw] space-y-[1vw] mobile:text-[4.1vw] tablet:text-[2.5vw] ${
                      i === 0 ? "mt-[2vw]" : ""
                    }`}
                  >
                    {feature}
                  </p>
                ))}
              </div>
             
            </div>
          </div>
        </SwiperSlide>
      ))}
       <div className='flex gap-2 mt-6 items-end justify-end pr-[3vw] rtl:flex-row-reverse rtl:justify-start rtl:pl-[3vw]'> 
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>
    </Swiper>
  );
};

export default BoardofDirectors;
