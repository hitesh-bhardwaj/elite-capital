import { useTranslation } from "next-i18next";
import factorImage from "../../../public/assets/images/invest/exclusive.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


const Exclusive = () => {
    useEffect(()=>{
        const ctx = gsap.context(()=>{
          gsap.from(".exclusive-img", 
             {
                scale:1.3,
                ease:"none",
                scrollTrigger:{
                    trigger:"#factors",
                    start:"top bottom",
                    end:"bottom top",
                    scrub:true
                }

            }
          )
        })
        return()=>ctx.revert()

    },[])
    const { t } = useTranslation('invest');
    return (
        <>
            <section className="relative h-[38vw] bg-[#F2F2E9] overflow-hidden mobile:h-full mobile:pb-[10%] tablet:h-[60vw]" id="factors">
                <div className="relative z-10  flex  items-center justify-between h-full mobile:block mobile:space-y-[5vw] tablet:items-start">
                <div className="w-[45%] h-[38vw] mobile:h-[120vw] flex items-start justify-between overflow-hidden mobile:w-full tablet:h-[60vw]">
                        <Image 
                            className="factor-image h-full w-full  tablet:h-full exclusive-img mobile:h-full"
                            src={factorImage} 
                            alt="factor image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                    <div className=" mb-[3vw] text-black1 w-[55%] pl-[7vw] pr-[7vw] py-[3vw] mobile:text-[4.6vw] mobile:w-full  tablet:mb-0 tablet:h-full tablet:flex tablet:items-center ">
                    <p  data-para-anim className="content w-[90%]">{t('exclusiveSub')}</p>
                     
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Exclusive;