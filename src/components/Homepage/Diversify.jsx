
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/diversify-image.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Diversify = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".diversify-image", {
                scale: 1.2,
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".diversify-block",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })
        })
        return () => ctx.revert();
    }, []);


    return (
        <section className="bg-[#F2F2E9] overflow-hidden h-full mobile:pb-[10vw] tablet:pt-0 dark">
            <div className="flex items-center mobile:flex-col mobile:gap-[8vw] tablet:flex-col ">
                <div className="w-1/2 h-[58vw] overflow-hidden diversify-block mobile:w-full mobile:h-[60vh]  tablet:w-full tablet:h-[70vw]">
                    <Image
                        className="object-cover w-full h-full diversify-image translate-y-[5%]"
                        src={image}
                        alt="advantage image"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="text-black1 w-1/2 pl-[4vw] py-[5vw] mobile:w-full mobile:px-[5vw] mobile:space-y-[8vw] tablet:w-full rtl:pr-[4.5vw] rtl:mobile:pr-[5vw]">
                    <h3 data-title-anim className="heading-2 w-[85%] !leading-[1.2] rtl:!leading-[1.5] mb-[4vw] mobile:mb-[8vw] mobile:!leading-[1.4]">Diversify your portfolio with highly attractive Canadian real estate</h3>
                    <div className=" content space-y-[3vw] pr-[4.5vw]   mb-[3vw] rtl:pr-0">
                        <div className=" content space-y-[1vw] mobile:space-y-[8vw]" />
                        <p>Elite Capital investors will gain access to a curated and exclusive pipeline of over 45 community-focused developments across Ontario, Canada. The pipeline includes several shovel ready purpose-built development projects, each having undergone an extensive development and permitting process.</p>
                        <p>This exclusive pipeline, combined with our rigorous due-diligence process and hands-on asset management, is geared to deliver strong, risk adjusted returns to our investors.</p>
                    </div>
                      <LineButton text={"View More"} href="/invest-with-us" className="fadein " prefetch={false}/>
                </div>

            </div>
        </section>
    )
}

export default Diversify;