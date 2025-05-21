
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
        <div className=" mobile:space-y-[12vw]">
          <h2

            className="text-[4.6vw] font-display mb-[3vw] mobile:text-[12.5vw] tablet:text-[6vw] tablet:mt-[5vw]  tablet:mb-[5vw] mobile:leading-[1.2] pl-[4vw] rtl:pr-[4vw]"
          >
            {t("teamSub3")}
          </h2>
          <TeamAccordion members={shariahMembers} />
          {mobileWidth && (
            <div className="pb-[2vw] mobile:block text-black text-[5vw] font-bold px-[5vw]">
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
                          content={`${item.features.join("<br/> <br/>")}`}
                        />
                      ))}
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          )}
          <div
            className="content mt-[5vw] space-y-[2vw] fadeUp mobile:space-y-[7vw] mobile:w-[95%] tablet:mt-[7vw] px-[4vw]"
            dangerouslySetInnerHTML={{ __html: t("shariahSub") }}
          />
        </div>
      </section>
    </>
  );
};

const SingleAccordion = ({ id, title, des, content, className }) => {
  return (
    <AccordionItem value={id} className={`w-full ${className} mobile:space-y-[2vw] tablet:space-y-[4vw] tablet:mt-[5vw] tablet:text-[2.7vw]`}>
      <AccordionTrigger
        data-para-anim
        className="text-left mobile:text-[6.2vw] mobile:flex mobile:w-full tablet:text-[5vw] tablet:text-left text-body rtl:mobile:gap-[8vw] font-display font-normal py-[1.5%] mobile:pt-[10%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white"
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.2vw] tracking-[0.5px] leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4.1vw] mobile:font-normal mobile:space-y-[4vw] tablet:text-[2.7vw]  pt-[3vw] mobile:leading-[1.2] font-body tablet:font-normal tablet:w-full ">
        <div className="fadeIn mobile:text-[4.8vw] mobile:mt-[-2vw]">{des}</div>
        <div className="fadeIn mobile:text-[4.1vw] !space-y-[4vw] tablet:text-[2.5vw]  tablet:leading-[1.4] mobile:leading-[1.6]" dangerouslySetInnerHTML={{ __html: content }} />
      </AccordionContent>
      <div className="w-full bg-black lineDraw h-[1px] !mt-[7vw] mobile:block tablet:block"></div>
    </AccordionItem>
  );
};


const TeamAccordion = ({ members }) => {
  const [openedIndex, setOpenedIndex] = useState(null);
  const { t } = useTranslation("about");

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full flex flex-wrap justify-start mobile:hidden tablet:hidden"
    >
      {members.map((item, index) => {
        const visibleCount = Math.ceil(item.features.length / 2);
        const firstHalf = item.features.slice(1, visibleCount);
        const secondHalf = item.features.slice(visibleCount);

        return (
          <div key={index} className="w-full">
            <AccordionItem
              value={`item-${index}`}
              className={`w-full flex flex-col gap-[5vw] transition-transform py-[2vw] tablet:flex-col ${index % 2 === 0 ? "bg-[#BCBCBC]" : ""}`}
            >
              <div className="w-full h-full flex justify-between gap-[1vw] fadeUp px-[4vw] py-[4vw]">
                {/* Left Column */}
                <div className="space-y-[0.5vw] w-[45%] mobile:w-full">
                  <p data-para-anim className="text-[2.5vw] leading-[1.2] font-display">
                    {item.name}
                  </p>
                  <p data-para-anim className="h-[5vw]">{item.des}</p>
                </div>

                {/* Right Column */}
                <div className="w-[50%] mobile:w-[90%]">
                  <div className="transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw]">
                    {item.features.slice(0, 2).map((feature, i) => (
                      <p key={i} className="text-[1.3vw]">
                        {feature}
                      </p>
                    ))}
                  </div>
                  <AccordionContent className="space-y-[1vw] pt-[1vw]">
                    {item.features.slice(2).map((feature, i) => (
                      <p key={i} className="text-[1.3vw] leading-[1.5] tablet:text-[2.5vw]">
                        {feature}
                      </p>
                    ))}
                  </AccordionContent>
                  {index < members.length - 2 && (
                    <AccordionTrigger
                      hide={true}
                      onClick={() =>
                        setOpenedIndex((prev) => (prev === index ? null : index))
                      }
                      className="text-[1.3vw] mt-[2vw] !w-[5vw] tablet:text-[2.5vw] text-left font-normal"
                    >
                      {openedIndex === index ? (
                        <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%-1rem)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                          {t("readLess")}
                        </p>
                      ) : (
                        <p className="after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%-1rem)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                          {t("readMore")}
                        </p>
                      )}
                    </AccordionTrigger>
                  )}

                </div>
              </div>
            </AccordionItem>

          </div>
        );
      })}
    </Accordion>
  );
};


export default ShariahBoard;


