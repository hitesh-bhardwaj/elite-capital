import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/invest/about-img.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const { t } = useTranslation('invest');
    const aboutsub = t('aboutsub', { returnObjects: true });

    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".about-image",{
            scale:1.3,
            // yPercent:-10,
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
            <section className="relative h-full bg-[#F2F2E9] overflow-hidden mobile:py-[10vw]" id="who-we-are">
                <div className="relative z-10  flex  items-center justify-between h-full mobile:flex-col-reverse mobile:gap-[5vw]">
                    <div className="space-y-[2vw] mb-[3vw] text-black1 w-[50%]  px-[6vw] py-[3vw] mobile:w-full mobile:text-[4.6vw] mobile:px-[5vw] tablet:w-[60%] tablet:pl-[4vw] tablet:pr-[3vw]">
                        {aboutsub.map((item, index) => (
                            <div className="content" data-para-anim key={index}  dangerouslySetInnerHTML={{__html:item.text}}/>
                        ))}
                    </div>
                    <div className="w-1/2 flex items-start justify-between overflow-hidden mobile:w-[90%] mobile:h-full ">
                        <Image 
                            className="about-image tablet:h-[70vw]"
                            src={aboutImage} 
                            alt="about image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;