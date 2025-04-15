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
        <section className="bg-[#747977] overflow-hidden h-full mobile:pb-[10vw] tablet:pt-[7%]">
            <div className="flex items-center mobile:flex-col-reverse mobile:gap-[8vw] tablet:flex-col tablet:gap-[7vw]">
                <div className="text-white w-1/2 pl-[4vw] mobile:w-full mobile:px-[5vw] mobile:space-y-[8vw] tablet:w-full">
                    <h2 data-title-anim className="heading-1  !leading-[1] mb-[4vw] mobile:mb-[8vw]">{t('advantageHead')}</h2>
                    <div className=" content space-y-[4vw] pr-[4.5vw]   mb-[3vw] mobile:space-y-[4vw]">
                        {advantage.map((item, index) => (
                            <div data-para-anim key={index}  dangerouslySetInnerHTML={{__html:item.text}}/>
                        ))}
                    </div>
                    <LineButton text={t('advantageCta')} href="#" className="fadein text-white"/>
                </div>
                <div className="w-1/2 overflow-hidden advantage-block mobile:w-full  tablet:w-full tablet:h-[70vw]">
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