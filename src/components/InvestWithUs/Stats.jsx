import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsImg from "../../../public/assets/images/invest/stats-img.png";
import yellowRectangle from "../../../public/assets/images/homepage/yellow-rectangle.png";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useTranslation("invest");
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(".stats-img", 
         {
            scale:1.3,
            ease:"none",
            scrollTrigger:{
                trigger:"#stats",
                start:"top bottom",
                end:"bottom top",
                scrub:true
            }

        }
      )
    })
    return()=>ctx.revert()

},[])
  const createTimeline = (triggerClass, countClasses, start, end) => {
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerClass,
          start: start,
          end: end,
        },
      });
      countClasses.forEach((countClass) => {
        tl.to(countClass.selector, {
          top: countClass.top,
          stagger: 0.25,
          delay: countClass.delay,
          duration: 1.5,
          ease: "power2.inOut",
        });
      });
    });
  };

  const counterClasses = [
    { selector: ".counter-3", top: "-100px", delay: 0.1 },
    { selector: ".counter-2", top: "-520px", delay: -1.3 },
    { selector: ".counter-1", top: "-420px", delay: -1.3 },
  ];

  const countClasses = [
    { selector: ".count-1", top: "-210px", delay: -0.2 },
    { selector: ".count-2", top: "-620px", delay: -1.3 },
    { selector: ".count-4", top: "-110px", delay: -1.0 },
    { selector: ".count-3", top: "-100px", delay: -1.3 },
  ];

  const countNewClasses = [
    { selector: ".countnew-1", top: "-110px", delay: -0.2 },
    { selector: ".countnew-2", top: "-1030px", delay: -1.0 },
    { selector: ".countnew-3", top: "-100px", delay: -1.3 },
    { selector: ".countnew-4", top: "-100px", delay: -1.3 },
  ];
  const countLastClasses = [
    { selector: ".countlast-1", top: "-113px", delay: -0.2 },
    { selector: ".countlast-2", top: "-115px", delay: -1.0 },
    { selector: ".countlast-3", top: "-120px", delay: -1.3 },
    { selector: ".countlast-4", top: "-525px", delay: -1.3 },
    { selector: ".countlast-5", top: "-120px", delay: -1.3 },
    { selector: ".countlast-6", top: "-120px", delay: -1.3 },
  ];
  if (globalThis.innerWidth > 1023) {
    createTimeline(".countlast", countLastClasses, "top 90%", null);
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 90%", null);
    createTimeline(".count", countClasses, "top 90%", null);
  } else {
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  }
  return (
    <>
      <section className="relative bg-[#F4F4F4] h-[48vw] my-[3vw] overflow-hidden  mobile:pb-[10%] tablet:py-[7%]" id="stats">
        <div className="flex items-center justify-between h-full">
          <div className="w-1/2 h-full overflow-hidden">
            <Image
              src={statsImg}
              height={1280}
              width={929}
              alt="stats-img"
              className="h-full stats-img"
            />
          </div>

          <div className="flex pl-[3vw] w-1/2 flex-wrap items-center justify-between  gap-y-[6vw] gap-[4vw]">
            <div className="w-[45%]">
              <div className="flex w-full items-center justify-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
                <div className="">
                  <div className="counter !text-[#111111]">
                    <div className="counter-1 digit font-semibold">
                      <div className="num">0</div>
                      <div className="num">1</div>
                      <div className="num">2</div>
                      <div className="num">3</div>
                      <div className="num">4</div>
                    </div>
                    <div className="counter-2 digit font-semibold ">
                      <div className="num">0</div>
                      <div className="num">1</div>
                      <div className="num">2</div>
                      <div className="num">3</div>
                      <div className="num">4</div>
                      <div className="num">5</div>
                    </div>
                    <div className="counter-3 translate-y-[100%] digit font-semibold">
                      <div className="num">+</div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                data-para-anim
                className="content w-[75%] text-center mx-auto  mobile:w-1/2  mobile:text-left"
              >
                {t("stats1")}
              </p>
            </div>
            <div className="w-[45%]">
              <div className="flex w-full  items-center justify-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
                <div className="countnew !text-[#111111]">
                  <div className="countnew-1 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num text-center">1</div>
                  </div>
                  <div className="countnew-2 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="countnew-3 digit font-semibold translate-y-[100%]">
                    <div className="num">K</div>
                  </div>
                  <div className="countnew-4 digit font-semibold translate-y-[100%]">
                    <div className="num ">+</div>
                  </div>
                </div>
              </div>
              <p
                data-para-anim
                className="content w-[75%] mx-auto  mobile:w-1/2  mobile:text-left"
              >
                {t("stats2")}
              </p>
            </div>
            <div className="w-[45%]">
              <div className="flex w-full  items-center justify-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
                <div className="count !text-[#111111]">
                  <div className="count-1 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                  </div>
                  <div className="count-2 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                  </div>
                  <div className="count-3 digit font-semibold translate-y-[100%]">
                    <div className="num">M</div>
                  </div>
                  <div className="count-4 digit font-semibold translate-y-[100px]">
                    <div className="num">+</div>
                  </div>
                </div>
              </div>
              <p
                data-para-anim
                className="content w-[75%] mx-auto text-center  mobile:w-1/2  mobile:text-left"
              >
                {t("stats3")}
              </p>
            </div>
            <div className="w-[45%]">
              <div className="flex w-full  items-center justify-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
                <div className="countlast !text-[#111111]">
                  <div className="countlast-1 digit font-semibold translate-y-[100px]">
                    <div className="num">$</div>
                  </div>
                  <div className="countlast-2 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num text-center">1</div>
                  </div>
                  <div className="countlast-3 digit font-semibold translate-y-[100px]">
                    <div className="num">.</div>
                  </div>
                  <div className="countlast-4 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                  </div>
                  <div className="countlast-5 digit font-semibold">
                    <div className="num">A</div>
                    <div className="num">B</div>
                  </div>
                  <div className="countlast-6 digit font-semibold translate-y-[100px]">
                    <div className="num">+</div>
                  </div>
                </div>
              </div>
              <p
                data-para-anim
                className="content w-[75%] mx-auto text-center mobile:w-1/2  mobile:text-left"
              >
                {t("stats4")}
              </p>
            </div>
          </div>
          <div className="w-[10%] flex items-end justify-end pr-[3vw] h-full pb-[3vw]">
            <Image
              src={yellowRectangle}
              height={32}
              width={67}
              alt="yelllow-rectangle"
              className="blockAnim"
            />
          </div>
        </div>
        <span className="w-[45%] h-[1.5px] bg-black1 block absolute top-1/2 left-[48%] " />
        <span className="h-[80%] w-[1.5px] bg-black1 block absolute top-[10%] left-[68%]  " />
      </section>
    </>
  );
};

export default Stats;
