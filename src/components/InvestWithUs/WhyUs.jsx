import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import invest1 from "../../../public/assets/images/invest/invest-1.png"
import invest2 from "../../../public/assets/images/invest/invest-2.png"
import invest3 from "../../../public/assets/images/invest/invest-3.png"
import invest4 from "../../../public/assets/images/invest/invest-4.png"
import invest5 from "../../../public/assets/images/invest/invest-5.png"
import { useEffect } from "react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const images = [invest1, invest2, invest3, invest4, invest5]

const WhyUS = () => {
    const { t } = useTranslation('invest');
  const text = t('whyUs', { returnObjects: true });
    return (
        <section className="bg-[#FFFFFF] py-[7vw] mobile:py-[10vw]"> 
            <div className="px-[5%] mobile:px-[5%]">
                <div className="">
                    <h2 data-title-anim className="heading-1 mb-[6vw]  mobile:leading-[1.2] tablet:!text-[5vw]">{t('whyUsHead')}</h2>
                    <div className="flex items-center gap-[2vw] mobile:gap-y-[8vw]">
                      {text.map((item,index)=>(<>
                        <div className="w-[22vw] h-full relative group transition-all duration-500 ease">
                            <Image key={index} src={images[index]} alt="invest-1" height={446} width={324} className="relative"/>
                        
                          <span className="w-full h-full absolute top-0 left-0 opacity-0 bg-[#F2F2E9] group-hover:opacity-[1] transition-all duration-500 ease"></span>
                          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-[1] transition-all duration-500 ease py-[1vw] flex flex-col justify-between h-full pr-[1.5vw]">
                            <div className="flex justify-center gap-[10vw] px-[1vw]">
                            <p>{item.num}</p>
                            <span className="rounded-full border p-3 h-10 w-10 flex items-center border-black1 justify-end">
                              <Image src={"/icons/plus.svg"} height={20} width={20} alt="plus"/>
                            </span>
                            </div>
                            <p className="text-[2.5vw] px-[0.5vw] !leading-[1.2] !font-display text-black1 transform -translate-y-[80px] opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
     {item.title}
    </p>
                          </div>
                          </div>
                          </>
                          ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUS;