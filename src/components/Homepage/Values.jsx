import { useTranslation } from "next-i18next";
import valuesBg from "../../../public/assets/images/homepage/values-bg.png"
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
// import { parllaxAnim } from "../gsapAnimations";


const Values = () => {
  // parllaxAnim("#values")
  const { t } = useTranslation('home');
  const values = t('values', { returnObjects: true });
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        gsap.to(".values-img", {
          yPercent: 120,
          ease: "none",
          scrollTrigger: {
            trigger: "#values",
            start: "top bottom",
            end: "bottom top",
            scrub: true,

          }
        })

      }

    });
    return () => ctx.revert();
  })

  if(globalThis.innerWidth<1024){
    useEffect(() => {
      const ctx = gsap.context(() => {
          gsap.from(".values-img", {
              scale: 1.2,
              yPercent: -20,
              ease: "none",
              scrollTrigger: {
                  trigger: ".values-block",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
              }
          })
      })
      return () => ctx.revert()
  }, [])
  }

  return (
    <section className="h-[75vw] w-screen relative pb-[8vw] pt-[5vw]  mobile:pt-0 overflow-hidden mobile:h-full mobile:flex-col mobile:flex tablet:h-full tablet:pt-0 dark mobile:pb-[10vw]" id="values">
      <div className="absolute top-0 left-0 h-full w-full z-0 mobile:relative mobile:h-[60vh] tablet:relative tablet:h-[50vw] values-block ">
        <Image
          src={valuesBg}
          alt="stats-bg"
          layout="fill"
          className="values-img translate-y-[-60%] w-full h-full object-cover mobile:translate-y-0 tablet:translate-y-0  rtl:scale-x-[-1]"
          quality={100}
        />
      </div>
      <div className="px-[8%] mobile:py-[5%] tablet:py-[10%] ">
        <div className="space-y-[6vw]">
          <h2 data-title-anim className="text-[5vw] font-display  mb-[4vw] mobile:text-[12.5vw] tablet:text-[7vw]">{t('valuesHead')}</h2>
          <div className=" w-full relative z-10 mobile:block mobile:space-y-[10vw] tablet:grid-cols-2">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-[70%] flex flex-wrap justify-between gap-y-[3vw] mobile:w-full tablet:w-full">
              <div className="flex w-full gap-[5vw] mobile:flex-col tablet:flex-col tablet:gap-0 mobile:gap-0">
                <div className="flex flex-col w-[50%] mobile:w-full tablet:w-full">
                  {values.map((item, index) => (
                    <SingleAccordion
                      key={index}
                      id={`item-${index}`}
                      title={item.valueTitle}
                      content={item.valueContent}
                      className={`${index % 2 == 0 ? "" : "hidden"}`}
                    />
                  ))}

                </div>
                <div className="flex flex-col w-[50%] mobile:w-full tablet:w-full">
                  {values.map((item, index) => (
                    <SingleAccordion
                      key={index}
                      id={`item-${index}`}
                      title={item.valueTitle}
                      content={item.valueContent}
                      className={`${index % 2 == 0 ? "hidden" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

const SingleAccordion = ({ id, title, content, className }) => {
  return (
    <AccordionItem value={id} className={`w-full  ${className}`}>
      <AccordionTrigger data-para-anim className="text-[2.5vw] text-left mobile:flex mobile:w-full mobile:text-[7vw] tablet:text-[4vw] tablet:text-left  font-display font-normal py-[1.5%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.25vw] tracking-[0.5px] leading-[1.4] space-y-[1.5vw] w-full  mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%] pt-[2vw] mobile:leading-[1.6]">
        {content}
      </AccordionContent>
      <div className="w-full bg-black lineDraw h-[1px] my-[2vw] mobile:block tablet:block"></div>
    </AccordionItem>
  )
}

export default Values;