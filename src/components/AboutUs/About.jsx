import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useTranslation('about');
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-image", {
                scale: 1.3,
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: "#who-we-are",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })

        })
        return () => ctx.revert()
    }, [])

    return (
        <>
            <section className="relative h-fit pt-[5vw] overflow-hidden mobile:pt-[10vw] tablet:h-full dark bg-white" id="about">
                <div className="relative z-10  flex  items-center justify-between h-full mobile:flex-col-reverse mobile:gap-[10vw] ">

                    <div className="text-black1 w-full  px-[5vw] py-[3vw]  mobile:w-full mobile:space-y-[5vw] mobile:px-[5vw]">
                        <h2 data-title-anim className="text-[4.6vw] font-display leading-1.15  mb-[2vw] mobile:text-[12.5vw] tablet:text-[7vw]">{t('aboutHead')}</h2>
                        <p data-para-anim className="mb-[3vw] w-[98%] content mobile:text-[4.1vw] mobile:leading-[1.7] tablet:pl-[1vw]">{t('aboutSub')}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;