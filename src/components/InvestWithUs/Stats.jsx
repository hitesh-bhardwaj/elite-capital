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
            <section className="relative bg-[#F2F2E9] overflow-hidden py-[5%]">
                <div className="px-[3vw] flex items-center justify-between">
                    {text.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center w-[25%]">
                                <h3 data-para-anim className="text-[4vw] font-display font-bold mb-6">{item.number}</h3>
                                <p data-para-anim className="w-[75%] mx-auto">{item.text}</p>
                            </div>
                            <span className="block h-[25vw] w-[1.5px] bg-black1 last:hidden mx-[2%] vlineDraw" />
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stats;