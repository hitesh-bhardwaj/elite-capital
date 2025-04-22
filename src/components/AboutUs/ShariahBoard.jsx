
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ShariahBoard = () => {
  const { t } = useTranslation("about");
  const [openedIndex, setOpenedIndex] = useState(null);
  const shariahMembers = t("shariahMembers", { returnObjects: true });
  const [mobileWidth, setIsMobileWidth] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileWidth(globalThis.innerWidth <= 1024);
    };

    checkMobile(); 
    window.addEventListener("resize", checkMobile); 

    return () => window.removeEventListener("resize", checkMobile); 
  }, []);


  return (
    <>
      <section className="w-screen h-full bg-[#ffffff]  pb-[5vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%]">
        <div className="p-[5vw] mobile:space-y-[12vw]">
          <h2
            data-title-anim
            className="text-[4.6vw] font-display mb-[5vw] mobile:text-[10vw] tablet:text-[6vw] tablet:mt-[5vw]  tablet:mb-[5vw] mobile:leading-[1.2]"
          >
            {t("teamSub3")}
          </h2>
          <div className=" mobile:px-0 mobile:w-screen mobile:h-full mobile:pb-[5vw] mobile:hidden tablet:hidden">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[2vw] mobile:w-fit mobile:flex-nowrap mobile:flex-col">
              {shariahMembers.map((item, index) => (
                <>
                  <div
                    className="w-full h-full flex justify-between gap-[1vw] fadeUp mobile:flex-col tablet:w-[43vw] mobile:w-full"
                    key={index}
                  >
                    <div className="space-y-[0.5vw] w-[30%] mobile:w-full">
                      <p
                        data-para-anim
                        className="text-[2.5vw] leading-[1.2] font-display mobile:text-[7.2vw] tablet:text-[3vw]"
                      >
                        {item.name}
                      </p>
                      <p
                        data-para-anim
                        className="h-[5vw] mobile:text-[4.8vw] mobile:h-[20vw] tablet:text-[2vw]"
                      >
                        {item.des}
                      </p>
                    </div>
                    <div key={index} className="w-[55%] mobile:w-[90%]">
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                          openedIndex === index ? "h-[35vw]" : "h-[9vw]"
                        }`}
                      >
                        {item.features.map((feature, i) => (
                          <p key={i} className="text-[1.3vw] mobile:text-[4.1vw]">
                            {feature}
                          </p>
                        ))}
                      </div>

                      {openedIndex !== index ? (
                        <p
                          className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                          onClick={() => setOpenedIndex(index)}
                        >
                          <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                            Read more +
                          </span>
                        </p>
                      ) : (
                        <p
                          className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                          onClick={() => setOpenedIndex(null)}
                        >
                          <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                            Read less -
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-black my-[1.5vw] lineDraw"></div>
                </>
              ))}
            </div>
          </div>
          {mobileWidth && (
          <div className="pb-[2vw] mobile:block text-black text-[5vw] font-bold">
             <div className=" w-full mobile:block mobile:space-y-[10vw] tablet:grid-cols-2 tablet:space-y-[5vw]">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full flex flex-wrap justify-between gap-y-[3vw]"
            >
              <div className="flex-col w-full gap-0 ">
                <div className="flex flex-col w-full">
                  {shariahMembers.map((item, index) => (
                    <SingleAccordion
                      key={index}
                      id={`item-${index}`}
                      title={item.name}
                      des={item.des}
                      content={`${item.features.join("\n")}`}
                    />
                  ))}
                </div>
              </div>
            </Accordion>
          </div>
          </div>
        )}
          <div
            className="text-[1.9vw] mt-[5vw] space-y-[2vw] fadeUp mobile:space-y-[4vw] mobile:text-[4.6vw] mobile:w-[90%] tablet:mt-[7vw] tablet:!text-[3vw]"
            dangerouslySetInnerHTML={{ __html: t("shariahSub") }}
          />
        </div>
       

      </section>
    </>
  );
};

const SingleAccordion = ({ id, title,des,content ,className}) => {
  return (
    <AccordionItem value={id} className={`w-full ${className} mobile:space-y-[2vw] tablet:space-y-[4vw] tablet:mt-[5vw]`}>
      {/* <AccordionLine className="relative z-[-1] my-[1vw] tablet:hidden mobile:hidden" linecenter={1.38} /> */}

      <AccordionTrigger
        data-para-anim
        className="text-left mobile:text-[6.2vw] mobile:flex mobile:w-full tablet:text-[5vw] tablet:text-left text-body font-display font-normal py-[1.5%] mobile:pt-[10%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white"
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.2vw] tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:pl-[2vw] mobile:w-full mobile:text-[4.1vw] mobile:font-normal mobile:space-y-[4vw] tablet:text-[2.7vw]  pt-[3vw] mobile:leading-[1.2] font-body tablet:font-normal tablet:w-full">
      <div className="fadeIn mobile:text-[4.8vw]">{des}</div>
        <div className="fadeIn mobile:text-[4.1vw] !space-y-[4vw] tablet:text-[2.5vw]  tablet:leading-[1.4]" dangerouslySetInnerHTML={{ __html: content }} />
      </AccordionContent>
      <div className="w-full bg-black lineDraw h-[1px] !mt-[7vw] mobile:block tablet:block"></div>
    </AccordionItem>
  );
};

export default ShariahBoard;

