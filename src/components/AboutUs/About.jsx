import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/about/about.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const { t } = useTranslation('about');
    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".about-image",{
            scale:1.3,
            yPercent:-10,
            ease:"none",
            scrollTrigger:{
                trigger:"#who-we-are",
                start:"top bottom",
                end:"bottom top",
                scrub:true,
                // markers:true

            }
           })

        })
        return()=>ctx.revert()
    },[])

    return (
        <>
            <section className="relative min-h-screen bg-[#F2F2E9] overflow-hidden mobile:pt-[10vw]" id="who-we-are">
                <div className="relative z-10  flex  items-center justify-between h-full mobile:flex-col-reverse mobile:gap-[10vw]">
                    <div className="w-1/2 flex items-start justify-between overflow-hidden mobile:w-full">
                        <Image 
                            className="w-[95%] about-image scale-[1.1]"
                            src={aboutImage} 
                            alt="about image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                    <div className="text-black1 w-[50%]  px-[3vw] py-[3vw] mobile:w-full mobile:space-y-[5vw] mobile:px-[5vw]">
                        <h2 data-title-anim className="text-[5vw] font-display leading-1.15  mb-[6vw] mobile:text-[12.5vw]">{t('aboutHead')}</h2>
                        <p data-para-anim className="mb-[3vw] w-[98%] text-[1.8vw] mobile:text-[4.6vw]">{t('aboutSub')}</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;