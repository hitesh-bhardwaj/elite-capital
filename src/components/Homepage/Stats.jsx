import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".vlineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 80%",
          },
          scaleY: 0,
          transformOrigin: "top",
          duration: 2,
          // yPercent: 100,
          stagger: 1,
          ease: "power4.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);
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
    { selector: ".counter-3", top: "-1020px", delay: 0.1 },
    { selector: ".counter-2", top: "-815px", delay: -1.3 },
    { selector: ".counter-1", top: "-215px", delay: -1.3 },
  ];

  const countClasses = [
    { selector: ".count-3", top: "-510px", delay: 0.1 },
    { selector: ".count-2", top: "-410px", delay: -1.3 },
  ];
  const countFourthClasses = [
    { selector: ".counter-4", top: "-510px", delay: 0.1 },
    { selector: ".counter-5", top: "-1020px", delay: -1.3 },
  ];

  const countNewClasses = [
    { selector: ".countnew-3", top: "-508px", delay: 0.1 },
    { selector: ".countnew-2", top: "-102px", delay: -1.3 },
  ];

  if (globalThis.innerWidth > 1023) {
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countFourthClasses, "top 80%", "bottom 80%");
  } else {
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  }

  const text = t("stats", { returnObjects: true });

  return (
    <>
      <section className="relative bg-[#F2F2E9] overflow-hidden py-[8%]">
        <div className="px-[5vw] flex items-center justify-between">
                    {text.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center w-[25%]">
                                <h3 className="text-[4vw] font-display font-bold mb-6">{item.number}</h3>
                                <p data-para-anim className="w-[75%] mx-auto">{item.text}</p>
                            </div>
                            <span className="block h-[25vw] w-[1.5px] bg-black1 last:hidden mx-[2%] vlineDraw" />
                        </React.Fragment>
                    ))}
                </div>
        {/* <div className="flex justify-between items-end mobile:flex-col mobile:items-start mobile:gap-[10vw] mobile:mt-[10vw]">
          <div className="flex items-center justify-start gap-[2vw] mobile:grid mobile:grid-cols-2 mobile:items-start mobile:space-between mobile:w-full mobile:gap-y-[5vw]">
            <div className="flex  flex-col items-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="font-display ">
                <div className="counter ">
                  <div className="counter-2 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                  </div>
                  <div className="counter-3 digit font-semibold ">
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
                  <div className="counter-4 digit ">
                  </div>
                    <div className="num font-semibold mt-[0.1vw]">+</div>
                </div>
              </div>
              <p
                data-para-anim
                className="font-medium w-[75%] text-center mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0"
              >
                Years of Combined Experience
              </p>
            </div>
            <div className="h-[20vw] w-[1px] bg-black vlineDraw">

            </div>
            <div className="flex flex-col items-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="countnew font-display">
                <div className="font-semibold fadeUp">C</div>
                <div className="font-semibold fadeUp">A</div>
                <div className="font-semibold fadeUp">$</div>
                <div className="countnew-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num text-center">1</div>
                </div>
                <div>.</div>
                <div className="countnew-3 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                </div>
                <div className="font-semibold fadeUp">B</div>
                <div className="countnew-4 digit">
                  <p className="font-semibold mt-[0.1vw] fadeUp">+</p>
                </div>
              </div>
              <p
                data-para-anim
                className="font-medium w-[75%] text-center mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0"
              >
                Equity Investment Opportunity
              </p>
            </div>
            <div className="h-[20vw] w-[1px] bg-black vlineDraw"></div>
            <div className="flex flex-col items-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="count font-display">
                <div className="count-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                </div>
                <div className="count-3 digit font-semibold ">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                </div>
              </div>
              <p
                data-para-anim
                className="font-medium  w-[75%] text-center mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0"
              >
                Active Projects in Canada
              </p>
            </div>
            <div className="h-[20vw] w-[1px] bg-black vlineDraw"></div>
            <div className="flex flex-col items-center gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="count font-display">
                <div className="font-semibold fadeUp">$</div>
                <div className="counter-4 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                </div>
                <div className="counter-3 digit font-semibold ">
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
                <div className="font-semibold fadeUp">B</div>
              </div>
              <p
                data-para-anim
                className="font-medium  w-[75%] text-center mb-[15px] mobile:text-[5vw] tablet:text-[2vw] mobile:mb-0"
              >
               Equity investment potential of our exclusive pipeline
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Stats;
