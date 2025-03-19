import { useTranslation } from "next-i18next";
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/advantage.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Advantage = () => {
    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".advantage-image",{
            scale:1.2,
            yPercent:-20,
            ease:"none",
            scrollTrigger:{
                trigger:".advantage-block",
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
    const advantage = t('advantage', { returnObjects: true });

    return (
        <section className="bg-[#93AE79] overflow-hidden  mobile:pb-[10vw]">
            <div className="flex items-center mobile:flex-col-reverse mobile:gap-[8vw]">
                <div className="text-black1 w-1/2 pl-[4vw] pr-[3.5vw] mobile:w-full mobile:px-[5vw] mobile:space-y-[8vw]">
                    <h3 data-title-anim className="text-[5vw] capitalize font-display mb-[4vw] leading-[1] mobile:text-[12.5vw] mobile:mb-[8vw]">{t('advantageHead')}</h3>
                    <div className="space-y-[2vw] mb-[3vw] mobile:text-[4.6vw] mobile:space-y-[4vw]">
                        {advantage.map((item, index) => (
                            <div data-para-anim key={index}  dangerouslySetInnerHTML={{__html:item.text}}/>
                        ))}
                    </div>
                    <LineButton text={t('advantageCta')} href="#" className="fadein "/>
                </div>
                <div className="w-1/2 overflow-hidden advantage-block mobile:w-full ">
                    <Image
                        className="object-cover w-full h-full advantage-image translate-y-[5%]"
                        src={image}
                        alt="advantage image"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default Advantage;