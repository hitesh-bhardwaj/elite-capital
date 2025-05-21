import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsImg from "../../../public/assets/images/invest/stats-img.png";
gsap.registerPlugin(ScrollTrigger);

function renderDigits(value) {
  return value.split('').map((char, i) => {
    return /\d/.test(char)
      ? <DigitScroller key={i} digit={char} />
      : <span key={i}>{char}</span>;
  });
}
const Stats = () => {
  const { t } = useTranslation("invest");
  const statsContent = t("stats", { returnObjects: true });
  const [values, setValues] = useState(["00", "00", "00", "0"]);
  useEffect(() => {
    setTimeout(() => {
      setValues(["45", "10", "26", "1"]);
    }, 500);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-img",
        {
          scale: 1.3,
          ease: "none",
          scrollTrigger: {
            trigger: "#stats",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="relative bg-[#F4F4F4] h-[40vw] overflow-hidden  mobile:pb-[10%] tablet:pb-[7%] mobile:h-full dark tablet:h-full" id="stats">
        <div className="flex items-center justify-between h-full mobile:flex-col tablet:flex-col">
          <div className="w-1/2  h-full overflow-hidden mobile:w-full mobile:h-[100vw] tablet:h-[70vw] tablet:w-full">
            <Image
              src={statsImg}
              height={1280}
              width={929}
              alt="stats-img"
              className="h-full stats-img w-full"
            />
          </div>

          <div className="flex pl-[3vw]  rtl:mr-[3vw] mobile:px-[5vw] w-1/2 flex-wrap items-center justify-center  gap-y-[6vw] gap-[4vw] mobile:w-full mobile:py-[5vw] mobile:gap-y-[4vw] tablet:h-[60vw] tablet:w-[80%] ">
            <div className="flex w-[45%] gap-[2vw] tablet:w-[40%] tablet:gap-0 mobile:w-full mobile:flex-col">
              <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw] rtl:pt-[5vw] rtl:tablet:pt-[5vw]">
                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                  {renderDigits(values[0])}<sup>+</sup>
                </h3>
                <p data-para-anim className="content mobile:w-[50%] w-[80%] text-center mobile:text-left ">{statsContent[0].text}</p>
              </div>
            </div>
            <div className="w-full h-[1px] hidden mobile:block bg-black" />
            <div className="flex w-[45%] gap-[2vw] tablet:w-[50%] tablet:gap-0 mobile:w-full mobile:flex-col">
              <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                  {renderDigits(values[1])}<span>K</span><sup>+</sup>
                </h3>
                <p data-para-anim className="content mobile:w-[50%] w-[80%] text-center mobile:text-left ">{statsContent[1].text}</p>
              </div>

            </div>
            <div className="w-full h-[1px] hidden mobile:block bg-black" />

            <div className="flex w-[45%] gap-[2vw] tablet:w-[40%] tablet:gap-0 mobile:w-full mobile:flex-col">
              <div className="flex flex-col items-center justify-start  gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw] rtl:tablet:pt-[5vw] rtl:imac:pt-[2vw]">
                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                  {renderDigits(values[2])}<span>M</span><sup>+</sup>
                </h3>
                <p data-para-anim className="content mobile:w-[50%] w-[80%] text-center mobile:text-left ">{statsContent[2].text}</p>
              </div>

            </div>

            <div className="w-full h-[1px] hidden mobile:block bg-black" />

            <div className="flex w-[45%] gap-[2vw] tablet:w-1/2 tablet:gap-0 mobile:w-full mobile:flex-col">
              <div className="flex flex-col items-center justify-start  gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                  <span>CA$</span>{renderDigits(values[3])}B<sup>+</sup>
                </h3>
                <p data-para-anim className="content mobile:w-[50%] w-[80%] text-center mobile:text-left ">{statsContent[3].text}</p>
              </div>
            </div>
            <div className="w-full h-[1px] hidden mobile:block bg-black" />

          </div>
          <div className="w-[10%] flex items-end justify-end pr-[3vw] rtl:pl-[3vw] rtl:pr-0 h-full pb-[3vw] mobile:hidden tablet:hidden">
            <Image
              src={"/icons/yellow-rectangle-mask.svg"}
              height={32}
              width={55}
              alt="yelllow-rectangle"
              className="blockAnim object-contain w-[6vw]"
            />
          </div>
        </div>
        <span className="w-[45%] h-[1.5px] bg-black1 block absolute top-1/2 left-[48%] mobile:hidden  rtl:right-[46%] rtl:top-[55%] tablet:left-[12%] tablet:top-[75%] rtl:tablet:right-[10%] rtl:tablet:top-[73%] tablet:w-[78%] " />
        <span className="h-[85%] w-[1.5px] bg-black1 block absolute top-[10%] left-[70%] rtl:right-[67%]  mobile:hidden tablet:h-[40%] tablet:top-[55%] rtl:tablet:right-[50%]  tablet:left-[52%]" />
      </section>
    </>
  );
};

export default Stats;

function DigitScroller({ digit, duration = 2 }) {
  const containerRef = useRef();

  useEffect(() => {
    const digitIndex = parseInt(digit, 10);
    gsap.to(containerRef.current, {
      y: `-${digitIndex * 10}%`,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#stats",
        start: "top 80%",
      }
    });
  }, [digit, duration]);

  return (
    <div className="overflow-hidden h-[6vw] mb-[0.9vw] tablet:h-[8.8vw] mobile:h-[14.4vw] mobile:mb-[2.1vw] leading-[1.4] inline-block relative w-[0.6em]">
      <div ref={containerRef} className="flex flex-col items-center">
        {[...Array(10).keys()].map((d) => (
          <span key={d} className="h-fit text-inherit">{d}</span>
        ))}
      </div>
    </div>
  );
}