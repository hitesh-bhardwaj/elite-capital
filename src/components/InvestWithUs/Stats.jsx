import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import statsImg from "../../../public/assets/images/invest/stats-img.png"
import yellowRectangle from "../../../public/assets/images/homepage/yellow-rectangle.png"
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useTranslation('invest');
  const text = t('stats', { returnObjects: true });

  return (
    <>
      <section className="relative bg-[#F4F4F4] h-[45vw] overflow-hidden  mobile:pb-[10%] tablet:py-[7%]">
        <div className="flex items-center justify-between h-full">
          <div className="w-1/2 h-full">
<Image src={statsImg} height={1280} width={929} alt="stats-img" className="h-full"/>
          </div>

          <div className="px-[3vw] w-1/2 flex flex-wrap gap-[2vw] gap-y-[6vw] items-center justify-between mobile:block tablet:flex-wrap tablet:gap-y-[2vw] ">
            {text.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-center w-[45%] mobile:w-full mobile:flex mobile:items-center mobile:gap-[5vw] mobile:py-[10vw] mobile:px-[2vw] tablet:w-[49%]">
                  <p data-para-anim className=" heading-1 mb-6 !leading-[1] !font-body !font-semibold mobile:mb-0 mobile:w-1/2 mobile:text-left mobile:leading-[1.2]">{item.number}</p>
                  <p data-para-anim className="content w-[75%] mx-auto  mobile:w-1/2  mobile:text-left">{item.text}</p>
                </div>
                {/*  */}
                {/* <span className=" w-[90vw] hidden h-[1.5px] bg-black1 last:hidden   mobile:block" />
                <span className={`block h-[25vw] w-[1.5px] bg-black1 last:hidden vlineDraw mobile:hidden  ${index == 1 ? "tablet:hidden" : ""}`} /> */}
              </React.Fragment>
            ))}
          </div>
           <div className="w-[10%] flex items-end justify-end pr-[3vw] h-full pb-[3vw]">
                                  <Image src={yellowRectangle} height={32} width={67} alt="yelllow-rectangle" />
                              </div>
        </div>
        <span className="w-[45%] h-[1.5px] bg-black1 block absolute top-1/2 left-[48%] "/>
        <span className="h-[80%] w-[1.5px] bg-black1 block absolute top-[10%] left-[68%]  "/>
      </section>
    </>
  )
}

export default Stats;