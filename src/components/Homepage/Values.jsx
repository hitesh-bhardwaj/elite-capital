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
    useEffect(()=>{
      const ctx = gsap.context(() => {
       
        gsap.to(".values-img",{
          yPercent:100,
          ease:"none",
          scrollTrigger:{
            trigger:"#values",
            start:"top bottom",
            end:"bottom top",
            scrub:true,

          }
        })

      });
      return () => ctx.revert();
    })

    return (
        <section className="h-[75vw] w-screen relative pb-[8vw] pt-[5vw] mobile:py-[10vw] overflow-hidden" id="values"> 
        <div className="absolute top-0 left-0 h-full w-full z-0">
            <Image
              src={valuesBg}
              alt="stats-bg"
              layout="fill"
              className="values-img translate-y-[-50%]"
              objectFit="cover"
              quality={100}
            />
          </div>
            <div className="px-[8%] ">
                <div className="space-y-[6vw]">
                    <h2 data-title-anim className="text-[5vw] font-display  mb-[4vw] mobile:text-[12.5vw]">{t('valuesHead')}</h2>
                    <div className=" w-full relative z-10 mobile:block mobile:space-y-[10vw] tablet:grid-cols-2">
                       <Accordion type="single" collapsible defaultValue="item-0" className="w-[70%] flex flex-wrap justify-between gap-y-[3vw]">
                        <div className="flex w-full gap-[5vw]">
                       <div className="flex flex-col w-[50%]">
                        {values.map((item,index) => (
                         <SingleAccordion
                           key={index}
                           id={`item-${index}`}
                           title={item.valueTitle}
                           content={item.valueContent}
                           className={`${index%2==0?"":"hidden"}`}
                           // btnLink={service.link}
                         />
                       ))}
                        
                        </div>
                        <div className="flex flex-col w-[50%]">
                        {values.map((item,index) => (
                         <SingleAccordion
                           key={index}
                           id={`item-${index}`}
                           title={item.valueTitle}
                           content={item.valueContent}
                           className={`${index%2==0?"hidden":""}`}
                           // btnLink={service.link}
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

const SingleAccordion = ({ id, title, content , className}) => {
  return (
    <AccordionItem value={id} className={`w-full  ${className}`}>
      {/* <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden" linecenter={1.38} /> */}
      
      <AccordionTrigger data-para-anim className="heading-2 text-left mobile:text-[5vw] mobile:flex mobile:w-full tablet:text-[4vw] tablet:text-left  font-display font-normal py-[1.5%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.25vw] tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-full  mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%] pt-[1vw]">
        <div
          className="fadein"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AccordionContent>
      <div className="w-full bg-black lineDraw h-[1px] my-[2vw] mobile:block tablet:block"></div>
    </AccordionItem>
  )
}

export default Values;