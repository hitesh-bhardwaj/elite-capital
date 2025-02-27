import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/homepage/about.png"
import Image from "next/image";
import LineButton from "../ui/LineButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const { t } = useTranslation('common');
    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".about-image",{
            opacity:0,
            duration:2,
            ease:"power3.out",
            scrollTrigger:{
                trigger:".about-image",
                start:"top 40%",
            }
           })

        })
        return()=>ctx.revert()
    },[])

    return (
        <>
            <section className="relative min-h-screen bg-[#B1C3B7] overflow-hidden">
                <div className="relative z-10 px-[5vw] flex items-center justify-between h-screen">
                    <div className="text-black1 w-[55%]">
                        <h2 data-title-anim className="text-[5vw] font-display leading-1.15 font-bold mb-[3vw]">{t('aboutHead')}</h2>
                        <p data-para-anim className="mb-[3vw]">{t('aboutSub')}</p>
                        <LineButton href={"/about-us"} text={t('cta')} className="fadein"/>
                    </div>
                    <div className="w-1/2 flex h-full items-end justify-end about-image">
                        <Image 
                            className="w-[80%]"
                            src={aboutImage} 
                            alt="about image" 
                            // placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;