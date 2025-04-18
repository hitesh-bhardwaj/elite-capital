import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsBg from "../../../public/assets/images/homepage/stats-bg.png";
// import { parllaxAnim } from "../gsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  // parllaxAnim("#stats")
  const { t } = useTranslation("home");
  const statsContent = t('stats',{returnObjects:true});
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
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

        gsap.to(".stats-img",{
          yPercent:50,
          ease:"none",
          scrollTrigger:{
            trigger:"#stats",
            start:"top bottom",
            end:"bottom top",
            scrub:true,

          }
        })

      });
      return () => ctx.revert();
    }
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
    { selector: ".counter-3", top: "-100px", delay: 0.1 },
    { selector: ".counter-2", top: "-1030px", delay: -1.3 },
    { selector: ".counter-1", top: "-825px", delay: -1.3 },
  ];

  const countClasses = [
    { selector: ".count-4", top: "-120px", delay: 0.1 },
    { selector: ".count-3", top: "-1035px", delay: -1.2 },
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
    { selector: ".countlast-4", top: "-113px", delay: -1.3 },
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
  const text = t("stats", { returnObjects: true });

  return (
    <>
      <section className="relative h-[72vw] overflow-hidden py-[5%]" id="stats">
        <div className="absolute top-0 left-0 h-full w-full z-0">
          <Image
            src={statsBg}
            alt="stats-bg"
            layout="fill"
            className="translate-y-[-50%] stats-img"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* <div className="relative z-10 px-[3vw] flex items-center justify-between mobile:block tablet:flex-wrap tablet:gap-y-[4vw] ">
                            {text.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="text-center w-[25%] text-white   mobile:w-full mobile:flex  mobile:items-center mobile:gap-[5vw] mobile:py-[10vw] mobile:px-[2vw] tablet:w-[48.5%]">
                                        <p data-para-anim className="heading-1 mb-6 !font-body font-semibold mobile:font-bold  mobile:mb-0 mobile:w-[35%] mobile:text-left">{item.number}</p>
                                        <p data-para-anim className="content w-[85%] mx-auto  mobile:w-[65%] mobile:text-left">{item.text}</p>
                                    </div>
                                    <span className={` w-[80vw] hidden h-[1.5px] bg-white last:hidden mx-[1%]  mobile:block `}/>
                                    <span className={`block h-[20vw] w-[1.5px] bg-white last:hidden mx-[1%] vlineDraw mobile:hidden ${index==1?"tablet:hidden":""}`} />
                                    
        
                                </React.Fragment>
                            ))}
                        </div> */}
        <div className="flex text-white w-full px-[7vw] pl-[7vw] items-center justify-between gap-[2vw] mobile:grid mobile:grid-cols-2 mobile:items-start mobile:space-between mobile:w-full mobile:gap-y-[5vw]">
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[20%]">
            <div className="flex flex-col items-center gap-[2vw]">
              <div className="counter">
                <div className="counter-1 digit font-semibold">
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
                <div className="counter-2 digit font-semibold ">
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
                <div className="counter-3 translate-y-[100%] digit font-semibold">
                  <div className="num">+</div>
                </div>
              </div>
              <p data-para-anim className="relative content z-[2] text-center ">{statsContent[0].text}</p>
            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2]" />

          <div className="flex flex-col gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[20%]">
            <div className="flex flex-col gap-[2vw] items-center">
            <div className="countnew">
              <div className="countnew-1 digit font-semibold translate-y-[100px]">
                <div className="num">$</div>
              </div>
              <div className="countnew-2 digit font-semibold">
                <div className="num">0</div>
                <div className="num text-center">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
              </div>
              <div className="countnew-3 digit font-semibold">
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
              <div className="countnew-4 digit font-semibold">
                <div className="num ">A</div>
                <div className="num ">B</div>
              </div>
            </div>
            <p data-para-anim className="relative content z-[2] text-center ">{statsContent[1].text}</p>

            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2]" />
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[20%]">
            <div className="flex flex-col gap-[2vw] items-center">
            <div className="count">
              <div className="count-2 digit font-semibold">
                <div className="num">0</div>
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
              </div>
              <div className="count-3 digit font-semibold">
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
              <div className="count-4 digit font-semibold translate-y-[100px]">
                <div className="num">+</div>
              </div>
            </div>
            <p data-para-anim className="relative content z-[2] text-center ">{statsContent[2].text}</p>
            

            </div>
          </div>
          <div className="w-[1px] h-[22vw] bg-white relative z-[2]" />
          <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0 w-[20%]">
            <div className="flex flex-col gap-[2vw] items-center">
            <div className="countlast">
              <div className="countlast-1 digit font-semibold translate-y-[100px]">
                <div className="num">$</div>
              </div>
              <div className="countlast-2 digit font-semibold">
                <div className="num">0</div>
                <div className="num">1</div>
              </div>
              <div className="countlast-3 digit font-semibold">
                <div className="num">A</div>
                <div className="num">B</div>
              </div>
              <div className="countlast-4 digit font-semibold translate-y-[100px]">
                <div className="num">+</div>
              </div>
            </div>
            <p data-para-anim className="relative content z-[2] text-center ">{statsContent[3].text}</p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
