import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import statsBg from "../../../public/assets/images/homepage/stats-bg.png";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function renderDigits(value) {
    return value.split('').map((char, i) => {
        return /\d/.test(char)
            ? <DigitScroller key={i} digit={char} />
            : <span key={i}>{char}</span>;
    });
}

export default function Counter() {
    const { t } = useTranslation("home");
    const statsContent = t("stats", { returnObjects: true });

    const [values, setValues] = useState(["00", "00", "00", "0"]); // match digits of 80, 50, 45, 1

    useEffect(() => {
        setTimeout(() => {
            setValues(["80", "50", "45", "1"]);
        }, 500);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lineDraws = document.querySelectorAll(".vlineDraw");
            if (globalThis.innerWidth > 1024) {
                lineDraws.forEach((lineDraw) => {
                    gsap.from(lineDraw, {
                        scrollTrigger: {
                            trigger: lineDraw,
                            start: "top 80%",
                        },
                        scaleY: 0,
                        transformOrigin: "top",
                        duration: 2,
                        stagger: 1,
                        ease: "power4.out",
                    });
                });

            }
            else {
                lineDraws.forEach((lineDraw) => {
                    gsap.from(lineDraw, {
                        scrollTrigger: {
                            trigger: lineDraw,
                            start: "top 80%",
                        },
                        scaleX: 0,
                        transformOrigin: "left",
                        duration: 2,
                        stagger: 1,
                        ease: "power4.out",
                    });
                });

            }
            if (globalThis.innerWidth > 1024) {
                gsap.to(".stats-img", {
                    yPercent: 70,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#stats",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                })
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="stats">
            <div className="py-[5%] px-[5vw] h-[70vw] relative tablet:h-[80vw] mobile:h-screen overflow-hidden">
                <Image
                    src={statsBg}
                    alt="Stats Background"
                    quality={95}
                    placeholder="blur"
                    fill
                    className="object-cover tablet:brightness-75 mobile:brightness-75 translate-y-[-30%] stats-img tablet:translate-y-0 mobile:translate-y-0"
                />

                <div className="relative z-[1] mobile:h-full mobile:w-full mobile:flex mobile:items-center mobile:justify-center">
                    <div className="flex text-white text-center gap-[2vw] tablet:flex-wrap tablet:gap-x-0 tablet:gap-y-12 mobile:flex-col mobile:text-left">
                        {/* Stat 1 */}
                        <div className="flex w-[25%] gap-[2vw] tablet:w-1/2 tablet:gap-0 mobile:w-full mobile:flex-col">
                            <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                                    {renderDigits(values[0])}<sup>+</sup>
                                </h3>
                                <p data-para-anim className="content mobile:w-[65%]">{statsContent[0].text}</p>
                            </div>
                            <span className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw tablet:mx-[2vw] tablet:w-[2px]" />
                        </div>

                        {/* Stat 2 */}
                        <div className="flex w-[25%] gap-[2vw] tablet:w-1/2 tablet:gap-0 mobile:w-full mobile:flex-col">
                            <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                                    <span>$</span>{renderDigits(values[1])}<span>B</span>
                                </h3>
                                <p data-para-anim className="content mobile:w-[65%]">{statsContent[1].text}</p>
                            </div>
                            <span className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw tablet:hidden" />
                        </div>

                        {/* Stat 3 */}
                        <div className="flex w-[25%] gap-[2vw] tablet:w-1/2 tablet:gap-0 mobile:w-full mobile:flex-col">
                            <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                                    {renderDigits(values[2])}<sup>+</sup>
                                </h3>
                                <p data-para-anim className="content mobile:w-[65%]">{statsContent[2].text}</p>
                            </div>
                            <span className="w-[1px] h-[22vw] bg-white relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw tablet:mx-[2vw] tablet:w-[2px]" />
                        </div>

                        {/* Stat 4 */}
                        <div className="flex w-[25%] gap-[2vw] tablet:w-1/2 tablet:gap-0 mobile:w-full mobile:flex-col">
                            <div className="flex flex-col items-center justify-start pt-[2.5vw] gap-[1vw] w-full mobile:flex-row mobile:justify-between mobile:pl-[4vw] mobile:gap-[4vw]">
                                <h3 dir="ltr" className="font-semibold text-[5vw] leading-[1.2] flex items-center tablet:text-[7vw] mobile:text-[12vw]">
                                    <span>CA$</span>{renderDigits(values[3])}B<sup>+</sup>
                                </h3>
                                <p data-para-anim className="content mobile:w-[65%]">{statsContent[3].text}</p>
                            </div>
                            <span className="w-[1px] h-[22vw] bg-transparent relative z-[2] mobile:h-[1.5px] mobile:w-full mobile:my-[4vw] vlineDraw tablet:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DigitScroller({ digit, duration = 2 }) {
    const containerRef = useRef();

    useEffect(() => {
        const digitIndex = parseInt(digit, 10);
        gsap.to(containerRef.current, {
            y: `-${digitIndex * 10}%`,
            duration,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#stats",
                start: "top 80%",
            }
        });
    }, [digit, duration]);

    return (
        <div className="overflow-hidden h-[6vw] mb-[0.9vw] tablet:h-[8.8vw] mobile:h-[14.4vw] mobile:mb-[2.1vw] leading-[1.4] inline-block relative w-[0.6em]">
            <div ref={containerRef} className="flex flex-col">
                {[...Array(10).keys()].map((d) => (
                    <span key={d} className="h-fit text-inherit">{d}</span>
                ))}
            </div>
        </div>
    );
}