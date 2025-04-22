import { useTranslation } from "next-i18next";
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/diversify-image.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Diversify = () => {
    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".diversify-image",{
            scale:1.2,
            yPercent:-20,
            ease:"none",
            scrollTrigger:{
                trigger:".diversify-block",
                start:"top bottom",
                end:"bottom top",
                scrub:true,
                // markers:true

            }
           })

        })
        return()=>ctx.revert()
    },[])
    const { t } = useTranslation('home');

    return (
        <section className="bg-[#F2F2E9] overflow-hidden h-full mobile:pb-[10vw] tablet:pt-0">
            <div className="flex items-center mobile:flex-col mobile:gap-[8vw] tablet:flex-col ">
            <div className="w-1/2 h-[55vw] overflow-hidden diversify-block mobile:w-full mobile:h-[60vh]  tablet:w-full tablet:h-[70vw]">
                    <Image
                        className="object-cover w-full h-full diversify-image translate-y-[5%]"
                        src={image}
                        alt="advantage image"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="text-black1 w-1/2 pl-[4vw] py-[5vw] mobile:w-full mobile:px-[5vw] mobile:space-y-[8vw] tablet:w-full">
                    <h3 data-title-anim className="heading-2  !leading-[1.2] mb-[5vw] mobile:mb-[8vw] mobile:!leading-[1.4]">{t('diversifyHead')}</h3>
                    <div className=" content space-y-[4vw] pr-[4.5vw]   mb-[3vw]">
                  <div className=" content space-y-[2vw] mobile:space-y-[8vw]"  dangerouslySetInnerHTML={{__html:t('diversify')}}/> 
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Diversify;