import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsBg from "../../../public/assets/images/homepage/stats-bg.png";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useTranslation("home");
  const statsContent = t('stats', { returnObjects: true });
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const lineDraws = document.querySelectorAll(".vlineDraw");
  //     if (globalThis.innerWidth > 1024) {
  //       lineDraws.forEach((lineDraw) => {
  //         gsap.from(lineDraw, {
  //           scrollTrigger: {
  //             trigger: lineDraw,
  //             start: "top 80%",
  //           },
  //           scaleY: 0,
  //           transformOrigin: "top",
  //           duration: 2,
  //           stagger: 1,
  //           ease: "power4.out",
  //         });
  //       });

  //     }
  //     else {
  //       lineDraws.forEach((lineDraw) => {
  //         gsap.from(lineDraw, {
  //           scrollTrigger: {
  //             trigger: lineDraw,
  //             start: "top 80%",
  //           },
  //           scaleX: 0,
  //           transformOrigin: "left",
  //           duration: 2,
  //           stagger: 1,
  //           ease: "power4.out",
  //         });
  //       });

  //     }
  //     if (globalThis.innerWidth > 1024) {
  //       gsap.to(".stats-img", {
  //         yPercent: 70,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: "#stats",
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         }
  //       })
  //     }
  //   });
  //   return () => ctx.revert();

  // }, []);
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
  if (globalThis.innerWidth > 1023) {

    const counterClasses = [
      { selector: ".counter-3", top: "-125px", delay: 0.1 },
      { selector: ".counter-2", top: "-1030px", delay: -1.3 },
      { selector: ".counter-1", top: "-825px", delay: -1.3 },
    ];

    const countClasses = [
      { selector: ".count-4", top: "-140px", delay: 0.1 },
      { selector: ".count-3", top: "-525px", delay: -1.2 },
      { selector: ".count-2", top: "-423px", delay: -1.3 },
    ];

    const countNewClasses = [
      { selector: ".countnew-1", top: "-110px", delay: -0.2 },
      { selector: ".countnew-3", top: "-1030px", delay: -1.0 },
      { selector: ".countnew-2", top: "-519px", delay: -1.3 },
      { selector: ".countnew-4", top: "-113px", delay: -1.3 },
    ];
    const countLastClasses = [
      { selector: ".countlast-1", top: "-113px", delay: -0.2 },
      { selector: ".countlast-3", top: "-115px", delay: -1.0 },
      { selector: ".countlast-2", top: "-114px", delay: -1.3 },
      { selector: ".countlast-4", top: "-135px", delay: -1.3 },
    ];
    createTimeline(".countlast", countLastClasses, "top 90%", null);
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 90%", null);
    createTimeline(".count", countClasses, "top 90%", null);
  } else {

  }
  const text = t("stats", { returnObjects: true });

  return (
    <>
      <section className="relative h-[72vw] overflow-hidden py-[5%] mobile:h-[100vh] mobile:flex mobile:items-center mobile:justify-center tablet:h-[80vw]" id="stats">
        <div className="absolute top-0 left-0 h-full w-full z-0">
          <Image
            src={statsBg}
            alt="stats-bg"
            layout="fill"
            className="translate-y-[-30%] stats-img tablet:translate-y-0 mobile:translate-y-0"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="flex text-white w-full px-[5vw] items-center justify-between gap-[1vw] mobile:flex-col mobile:items-start tablet:flex-wrap tablet:gap-y-[4vw]">
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[23%] mobile:w-full tablet:w-[48%]">
            <div className="flex flex-col items-center gap-[2vw] mobile:flex-row  justify-center ">
              <div dir="ltr" className="counter mobile:hidden  mobile:justify-center rtl:mobile:w-[50%] tablet:hidden imac:!h-[5vw]">
                <div className="counter-1 digit font-semibold mobile:text-[12vw] tablet:text-[7vw]">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                  <div className="num">6</div>
                  <div className="num">7</div>
                  <div className="num rtl:leading-[1.2] ">8</div>
                </div>
                <div className="counter-2 digit font-semibold mobile:text-[12vw] tablet:text-[7vw]">
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
                  <div className="num rtl:leading-[1.2]">0</div>
                </div>
                <div className="counter-3 translate-y-[120%] digit font-semibold mobile:text-[12vw] tablet:text-[7vw] ">
                  <div className="num"><sup>+</sup></div>
                </div>
              </div>
              <div dir="ltr" className="hidden mobile:flex mobile:justify-center mobile:w-[40%] font-semibold mobile:text-[12vw] tablet:text-[7vw] mobile:text-white z-[10] tablet:flex tablet:justify-center tablet:w-[30%] rtl:tablet:items-start rtl:tablet:pr-[6vw]">
                <p data-para-anim>80+</p> </div>
              <p data-para-anim className="relative content z-[2] text-center  mobile:text-left mobile:w-[60%] rtl:mobile:w-[80%] rtl:tablet:pr-[9vw]">{statsContent[0].text}</p>
            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw" />

          <div className="flex flex-col gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[23%] mobile:w-full tablet:w-[48%]">
            <div className="flex flex-col gap-[2vw] items-center mobile:flex-row mobile:gap-[3vw]">
              <div dir="ltr" className="countnew mobile:w-[40%] mobile:hidden tablet:hidden">
                <div className="countnew-1 digit font-semibold translate-y-[100px] mobile:text-[12vw] tablet:text-[7vw] imac:!h-[5vw]">
                  <div className="num rtl:leading-[1.5]">$</div>
                </div>
                <div className="countnew-2 digit font-semibold mobile:text-[12vw] tablet:text-[7vw]">
                  <div className="num">0</div>
                  <div className="num text-center">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num rtl:leading-[1.5]">5</div>
                </div>
                <div className="countnew-3 digit font-semibold mobile:text-[12vw] tablet:text-[7vw]">
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
                  <div className="num rtl:leading-[1.5]">0</div>
                </div>
                <div className="countnew-4 digit font-semibold mobile:text-[12vw] tablet:text-[7vw]">
                  <div className="num ">A</div>
                  <div className="num rtl:leading-[1.5]">B</div>
                </div>
              </div>
              <div dir="ltr" className="hidden mobile:flex mobile:justify-center mobile:w-[40%] font-semibold mobile:text-[12vw] tablet:text-[7vw] mobile:text-white z-[10] tablet:flex tablet:justify-center tablet:w-[30%]">
                <p data-para-anim>$50B</p> </div>
              <p data-para-anim className="relative content z-[2] text-center  mobile:text-left mobile:w-[60%] ">{statsContent[1].text}</p>
            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw tablet:hidden" />
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[23%] mobile:w-full tablet:w-[48%]">
            <div className="flex flex-col gap-[2vw] items-center mobile:flex-row">
              <div dir="ltr" className="count mobile:w-[40%] mobile:text-[12vw] tablet:text-[7vw]  mobile:hidden tablet:hidden imac:!h-[5vw]">
                <div className="count-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num rtl:leading-[1.5]">4</div>
                </div>
                <div className="count-3 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num rtl:leading-[1.5]">5</div>
                </div>
                <div className="counter-3 translate-y-[120%] digit font-semibold mobile:text-[12vw] tablet:text-[7vw] ">
                  <div className="num"><sup>+</sup></div>
                </div>
              </div>
              <div dir="ltr" className="hidden mobile:flex mobile:justify-center mobile:w-[40%] font-semibold mobile:text-[12vw] tablet:text-[7vw] mobile:text-white z-[10] tablet:flex tablet:justify-center tablet:w-[30%] ">
                <p data-para-anim>45+</p> </div>
              <p data-para-anim className="relative content z-[2] text-center mobile:text-left  mobile:w-[60%] tablet:w-[60%] rtl:tablet:pl-[2vw]">{statsContent[2].text}</p>
            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw" />
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[23%] mobile:w-full tablet:w-[48%]">
            <div className="flex flex-col gap-[2vw] items-center mobile:flex-row">
              <div dir="ltr" className="countlast mobile:text-[12vw] mobile:w-[40%] tablet:text-[7vw] mobile:hidden tablet:hidden imac:!h-[5vw]">
                <div className="countlast-1 digit font-semibold translate-y-[100px]">
                  <div className="num rtl:leading-[1.5]">$</div>
                </div>
                <div className="countlast-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num text-center mobile:pl-[1.2vw] rtl:leading-[1.5]">1</div>
                </div>
                <div className="countlast-3 digit font-semibold">
                  <div className="num">A</div>
                  <div className="num rtl:leading-[1.5]">B</div>
                </div>
                <div className="counter-3 translate-y-[120%] digit font-semibold mobile:text-[12vw] tablet:text-[7vw] ">
                  <div className="num"><sup>+</sup></div>
                </div>
              </div>
              <div dir="ltr" className="hidden mobile:flex mobile:justify-center mobile:w-[40%] font-semibold mobile:text-[12vw] tablet:text-[7vw] mobile:text-white z-[10] tablet:flex tablet:justify-center tablet:w-[30%]">
                <p data-para-anim>$1B+</p> </div>
              <p data-para-anim className="relative content z-[2] text-center mobile:text-left mobile:w-[60%] ">{statsContent[3].text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
