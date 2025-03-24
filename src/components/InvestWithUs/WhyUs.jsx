import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhyUS = () => {
    const { t } = useTranslation('invest');
    const whyus = t('whyUs', { returnObjects: true });

    useEffect(() => {
        const ctx = gsap.context(() => {
          const lineDraws = document.querySelectorAll(".hlineDraw");
          lineDraws.forEach((lineDraw) => {
            gsap.from(lineDraw, {
              scrollTrigger: {
                trigger: lineDraw,
                start: "top 80%",
              },
              scaleX: 0,
              transformOrigin: "left",
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
        <section className="bg-[#B1C3B7] py-[7vw] mobile:py-[10vw]"> 
            <div className="px-[8%] mobile:px-[5%]">
                <div className="">
                    <h3 data-title-anim className="text-[5vw] font-display   mb-[6vw] mobile:text-[12.5vw] mobile:leading-[1.2]">{t('whyUsHead')}</h3>
                    <div className="flex flex-col  gap-y-[4vw] mobile:gap-y-[8vw]">
                        {whyus.map((item, index) => (
                            <>
                            <div key={index} className="flex items-center justify-between mobile:block">
                                <span className="text-[1.25vw] mb-2 fadeUp block mobile:text-[4.6vw]">{item.num}.</span>
                                <h4 data-para-anim className="text-[2.9vw] font-display  font-bold mb-4 w-[60%] mobile:text-[8.2vw] mobile:w-full">{item.title}</h4>
                                <p data-para-anim className="text-[1.25vw] w-1/3 mobile:text-[4.6vw] mobile:w-full">{item.para}</p>
                            </div>
                            <span className="w-full bg-black h-[1px] hlineDraw"/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUS;