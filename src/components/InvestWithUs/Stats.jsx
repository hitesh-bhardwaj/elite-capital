import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
    const { t } = useTranslation('invest');

    const text = t('stats', { returnObjects: true });

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

    return (
        <>
            <section className="relative bg-[#F2F2E9] overflow-hidden py-[5%] mobile:pb-[10%] tablet:py-[7%]">
                <div className="px-[3vw] flex items-center justify-between mobile:block tablet:flex-wrap tablet:gap-y-[2vw] ">
                    {text.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center w-[25%] mobile:w-full mobile:flex mobile:items-center mobile:gap-[5vw] mobile:py-[10vw] mobile:px-[2vw] tablet:w-[49%]">
                                <p data-para-anim className=" heading-1 mb-6 !leading-[1] mobile:mb-0 mobile:w-1/2 mobile:text-left mobile:leading-[1.2]">{item.number}</p>
                                <p data-para-anim className="content w-[75%] mx-auto  mobile:w-1/2  mobile:text-left">{item.text}</p>
                            </div>
                            <span className=" w-[90vw] hidden h-[1.5px] bg-black1 last:hidden   mobile:block" />
                            <span className={`block h-[25vw] w-[1.5px] bg-black1 last:hidden vlineDraw mobile:hidden  ${index==1?"tablet:hidden":""}`} />
                           

                        </React.Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stats;