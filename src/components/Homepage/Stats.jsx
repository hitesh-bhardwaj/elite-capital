import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsBg from "../../../public/assets/images/homepage/stats-bg.png"
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useTranslation("home");
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
    });
    return () => ctx.revert();
  }
  }, []);
  const text = t("stats", { returnObjects: true });
 
  return (
    <>
      <section className="relative h-[72vw] overflow-hidden py-[5%]">
      <div className="absolute top-0 left-0 h-full w-full z-0">
    <Image
      src={statsBg}
      alt="stats-bg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
        <div className="relative z-10 px-[3vw] flex items-center justify-between mobile:block tablet:flex-wrap tablet:gap-y-[4vw] ">
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
                        </div>
      </section>
    </>
  );
};

export default Stats;
