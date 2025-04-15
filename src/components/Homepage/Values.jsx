import { useTranslation } from "next-i18next";
import valuesBg from "../../../public/assets/images/homepage/values-bg.png"
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const Values = () => {
    const { t } = useTranslation('home');
    const values = t('values', { returnObjects: true });

    return (
        <section className="h-[75vw] w-screen relative pb-[8vw] pt-[5vw] mobile:py-[10vw]"> 
        <div className="absolute top-0 left-0 h-full w-full z-0">
            <Image
              src={valuesBg}
              alt="stats-bg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
            <div className="px-[8%] ">
                <div className="space-y-[6vw]">
                    <h2 data-title-anim className="text-[5vw] font-display  mb-[4vw] mobile:text-[12.5vw]">{t('valuesHead')}</h2>
                    <div className=" w-full relative z-10 mobile:block mobile:space-y-[10vw] tablet:grid-cols-2">
                       <Accordion type="single" collapsible defaultValue="item-1" className="w-[70%] flex flex-wrap justify-between gap-y-[3vw]">
                       {values.map((item,index) => (
                         <SingleAccordion
                           key={index}
                           id={`item-${index}`}
                           title={item.valueTitle}
                           content={item.valueContent}
                           // btnLink={service.link}
                         />
                       ))}
                     </Accordion>
                 
               </div>
                </div>
            </div>
        </section>
    )
}

const SingleAccordion = ({ id, title, content }) => {
  return (
    <AccordionItem value={id} className="w-[43%]">
      {/* <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden" linecenter={1.38} /> */}
      
      <AccordionTrigger data-para-anim className="heading-2 text-left mobile:text-[5vw] mobile:flex mobile:w-full tablet:text-[4vw] tablet:text-left  font-display font-normal py-[1.5%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.25vw] tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-full mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] tablet:text-[2.7vw] tablet:w-[90%] pt-[3vw]">
        <div
          className="fadeIn"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AccordionContent>
      <div className="w-full bg-black lineDraw h-[1px] mt-[2vw] mobile:block tablet:block"></div>
    </AccordionItem>
  )
}

export default Values;