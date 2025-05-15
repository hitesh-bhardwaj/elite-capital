import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NextButton, PreviousButton } from "../Common/SliderButtons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const BoardofDirectorsCopy = () => {
  const { t } = useTranslation("about");
  const boardMembers = t("boardMembers", { returnObjects: true });
  const adviserMembers = t("adviserMembers", { returnObjects: true });
  const investmentMembers = t("investmentMembers", { returnObjects: true });
  const [mobileWidth, setIsMobileWidth] = useState(false);

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

            className="text-[4.6vw] font-display mb-[2vw] mobile:w-[90%] mobile:text-[12.5vw] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-[5vw] pl-[5vw] mobile:mb-[7vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub")}
          </h2>
          <div>
            <TeamAccordion members={boardMembers} />
            {mobileWidth && <MobileSwiper members={boardMembers} />}
          </div>
        </div>

        <div className=" mobile:space-y-[5vw] pt-[5vw]">
          <h2

            className="text-[4.6vw] font-display mb-[2vw]  mobile:text-[12.5vw] mobile:w-[70%] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-[5vw] pl-[5vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub1")}
          </h2>
          <div>
            <TeamAccordion members={adviserMembers} />
            {mobileWidth && <MobileSwiper members={adviserMembers} />}
          </div>
        </div>
        <div className="pt-[5vw] mobile:space-y-[5vw]">
          <h2

            className="text-[4.6vw] font-display mb-[2vw]  mobile:text-[12.5vw] mobile:w-[70%] mobile:leading-[1.2] tablet:text-[7vw] tablet:mb-[5vw] pl-[5vw] rtl:pr-[4.5vw]"
          >
            {t("teamSub2")}
          </h2>
          <div>
            <TeamAccordion members={investmentMembers} />
            {mobileWidth && <MobileSwiper members={investmentMembers} />}
          </div>
        </div>
      </section>
    </>
  );
};

const MobileSwiper = ({ members }) => {
  const swiperRef = useRef(null);
  const [openedIndex, setOpenedIndex] = useState(null);
  const { t } = useTranslation("about");

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      breakpoints={{
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
      }}
    >
      {members.map((item, index) => {
        const visibleCount = Math.ceil(item.features.length / 3);
        const firstHalf = item.features.slice(0, visibleCount);
        const secondHalf = item.features.slice(visibleCount);
        const isOpen = openedIndex === index;

        return (
          <SwiperSlide key={index}>
            <div className="h-full flex gap-[5vw] mobile:w-full transition-transform hover:scale-[1.02] tablet:w-[70vw] tablet:h-[180vw] w-full px-[5vw] py-[10vw] bg-[#BCBCBC] mobile:flex-col mobile:items-center mobile:h-full tablet:flex-col">
              {/* Image */}
              <div className="h-[28vw] w-[22vw] mobile:w-[80vw] mobile:ml-[-10vw] mobile:h-[90vw] overflow-hidden group transition-all duration-500 ease rounded-[2vw] tablet:w-[50vw] tablet:h-[50vw] rtl:mobile:ml-[10vw]">
                <Image
                  src={item.img}
                  height={626}
                  width={535}
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%] mobile:w-full tablet:w-full">
                <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[7.2vw] tablet:text-[5vw]">
                  {item.name}
                </p>
                <p className="mobile:text-[4.8vw] tablet:text-[3vw] w-[30%] mobile:w-full tablet:w-full">
                  {item.des}
                </p>


                <div className="space-y-[1vw] pt-[1vw]">
                  {firstHalf.map((feature, i) => (
                    <p
                      key={i}
                      className="text-[1.3vw] tablet:text-[2.5vw]  mobile:text-[4.1vw]"
                    >
                      {feature}
                    </p>
                  ))}
                </div>
                {isOpen && (
                  <div className="space-y-[1vw] pt-[1vw]">
                    {secondHalf.map((feature, i) => (
                      <p
                        key={i}
                        className="text-[1.3vw] leading-[1.5] tablet:text-[2.5vw]  mobile:text-[4.1vw]"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {secondHalf.length > 0 && (
                  <div
                    onClick={() =>
                      setOpenedIndex(isOpen ? null : index)
                    }
                    className="text-[1.3vw] mt-[2vw] tablet:text-[2.5vw] font-normal cursor-pointer mobile:pt-[5vw]"
                  >
                    {openedIndex === index ? (
                      <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(25%-1rem)] after:h-[1.5px]  mobile:text-[3.5vw] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(25%+1rem)] rtl:after:right-0">
                        {t('readLess')}
                      </p>
                    ) : (
                      <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(25%-1rem)] after:h-[1.5px]  mobile:text-[3.5vw] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(25%+1rem)] rtl:after:right-0">
                        {t('readMore')}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="flex gap-2 mt-6 items-end justify-end pr-[3vw] rtl:flex-row-reverse rtl:justify-start rtl:pl-[7vw]">
        <PreviousButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
      </div>
    </Swiper>
  );
};

const TeamAccordion = ({ members }) => {
  const [openedIndex, setOpenedIndex] = useState(null);
  const { t } = useTranslation("about");

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full flex flex-wrap justify-start mobile:hidden"
    >
      {members.map((item, index) => {
        const visibleCount = Math.ceil(item.features.length / 3);
        const firstHalf = item.features.slice(0, visibleCount);
        const secondHalf = item.features.slice(visibleCount);

        return (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`w-full flex gap-[5vw] transition-transform px-[5vw] py-[2vw] tablet:flex-col tablet:pt-[5vw] ${index % 2 === 0 ? "bg-[#BCBCBC]" : ""
              }`}
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
            <div className="flex flex-col gap-[0.5vw] rtl:gap-[1vw] py-[2vw] w-[60%] mobile:w-full tablet:w-full">
              <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[5vw]">
                {item.name}
              </p>
              <p className="mobile:text-[4.6vw] tablet:text-[3vw] w-full leading-[1.2] tablet:w-full">
                {item.des}
              </p>

              <div className="space-y-[1vw] pt-[1vw]">
                {firstHalf.map((feature, i) => (
                  <p
                    key={i}
                    className={`text-[1.3vw] tablet:text-[2.5vw] ${i === 0 ? "mt-[2vw]" : ""}`}
                  >
                    {feature}
                  </p>
                ))}
              </div>

              <AccordionContent className="space-y-[1vw] pt-[1vw]">
                {secondHalf.map((feature, i) => (
                  <p
                    key={i}
                    className="text-[1.3vw] leading-[1.5] tablet:text-[2.5vw]"
                  >
                    {feature}
                  </p>
                ))}
              </AccordionContent>

              {secondHalf.length > 0 && (
                <AccordionTrigger
                  hide={true}
                  onClick={() => {
                    setOpenedIndex((prev) => (prev === index ? null : index));
                  }}
                  className="text-[1.3vw] mt-[2vw] !w-[5vw] tablet:text-[2.5vw] text-left font-normal "
                >
                  {openedIndex === index ? (
                    <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%-1rem)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(100%+1rem)]">
                      {t('readLess')}
                    </p>
                  ) : (
                    <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%-1rem)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(100%+1rem)]">
                      {t('readMore')}
                    </p>
                  )}
                </AccordionTrigger>
              )}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default BoardofDirectorsCopy;
