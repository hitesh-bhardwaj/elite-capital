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
        <section className="bg-[#747977] overflow-hidden h-full mobile:pb-[10vw] tablet:pt-[7%]">
            <div className="flex items-center mobile:flex-col-reverse mobile:gap-[8vw] tablet:flex-col tablet:gap-[7vw]">
                <div className="text-white w-1/2 pl-[4vw] mobile:w-full mobile:px-[5vw] mobile:space-y-[8vw] tablet:w-full rtl:pr-[4.5vw] rtl:mobile:pr-[5vw]">
                    <h2 data-title-anim className="heading-1 mb-[5vw] mobile:mb-[8vw]">Canada's real estate investment opportunity</h2>
                    <div className=" content space-y-[2vw] pr-[4.5vw]   mb-[5vw] mobile:space-y-[4vw] rtl:pr-0">
                        <p data-para-anim className="">Canada stands out as a prime G7 investment destination due to its stable economy, abundance of natural resources, AAA credit rating and rapidly rising population. The population is expected to grow by 11.6 million people by 2050, driving sustained demand across key sectors - particularly housing.</p>
                       <p data-para-anim className="">Rapid population growth, combined with a projected shortfall of over 3.5 million homes by 2030, has created a supply gap and presents a compelling and long-term opportunity for residential real estate investment in Canada.</p>
                    </div>
                    <LineButton text={"View More"} href="/invest-with-us" className="fadein text-white" prefetch={false}/>
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