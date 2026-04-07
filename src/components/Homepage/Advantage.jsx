import { useTranslation } from "next-i18next";
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/advantage.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Advantage = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".advantage-image", {
                scale: 1.2,
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".advantage-block",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })
        })
        return () => ctx.revert()
    }, [])

    const { t } = useTranslation('home');
    const advantage = t('advantage', { returnObjects: true });

    return (
        <section className="bg-[#747977] overflow-hidden">
            {/* Key change: items-stretch so both columns fill equal height */}
            <div className="flex items-stretch mobile:flex-col-reverse tablet:flex-col">

                {/* Text column — padding added top & bottom, no longer drives height via gap */}
                <div className="text-white w-1/2 px-[4vw] py-[6vw] mobile:w-full mobile:px-[5vw] mobile:py-[10vw] tablet:w-full tablet:px-[5vw] tablet:py-[8vw] rtl:pr-[4.5vw] rtl:mobile:pr-[5vw] flex flex-col justify-center gap-[2.5vw] mobile:gap-[6vw]">
                    <h2 data-title-anim className="heading-1">{t('advantageHead')}</h2>
                    <div className="content space-y-[2vw] pr-[4.5vw] mobile:space-y-[4vw] rtl:pr-0">
                        {advantage.map((item, index) => (
                            <p data-para-anim key={index}>{item.text}</p>
                        ))}
                    </div>
                    <LineButton
                        text={t('advantageCta')}
                        href="/invest-with-us"
                        className="fadein text-white"
                        prefetch={false}
                    />
                </div>

                {/* Image column — self-stretch + h-full keeps it flush top-to-bottom */}
                <div className="w-1/2 overflow-hidden advantage-block self-stretch mobile:w-full mobile:h-[80vw] tablet:w-full tablet:h-[70vw]">
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