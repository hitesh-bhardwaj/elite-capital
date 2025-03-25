import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/homepage/about.png"
import Image from "next/image";
import LineButton from "../ui/LineButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const { t } = useTranslation('home');
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
            <section className="relative min-h-screen bg-[#B1C3B7] overflow-hidden  mobile:min-h-fit mobile:pt-[10vw] tablet:min-h-fit tablet:pt-[10vw]" >
                <div className="relative z-10 px-[5vw] flex items-center justify-between h-screen mobile:flex-col mobile:justify-center mobile:h-full tablet:h-full">
                    <div className="text-black1 w-[55%] mobile:w-full tablet:w-full tablet:pb-[10vw]">
                        <h2 data-title-anim className="heading-1  mb-[3vw]">{t('aboutHead')}</h2>
                        <p data-para-anim className="content mb-[3vw]">{t('aboutSub')}</p>
                        <LineButton href={"/about-us"} text={t('cta')} className="fadeUp"/>
                    </div>
                    <div className="w-1/2 flex h-full items-end justify-end about-image mobile:w-full tablet:w-full">
                        <Image 
                            className="w-[80%] tablet:w-full"
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