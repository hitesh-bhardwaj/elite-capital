import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/invest/about-img.png";
import yellowRectangle from "../../../public/assets/images/homepage/yellow-rectangle.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import ImageComponent from "../Common/ImageComponent";
import { SplitInChar, SplitInWord } from "../splitTextUtils";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useTranslation("invest");
    const aboutsub = t("aboutsub", { returnObjects: true });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const data = document.querySelectorAll(".about-content");
            data.forEach((content) => {
                SplitInWord(content);
                const parawords = content.querySelectorAll(".word");
                gsap.from(parawords, {
                    // x: 10,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: content,
                        start: "top 90%", 
                        end: "bottom 50%", 
                        scrub: 1, 
                        
                    },
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="relative h-full bg-[#FFFFFF] overflow-hidden mobile:py-[10vw] dark pt-[5vw] pb-[3vw]" id="about">
                <div className="relative z-10 px-[5vw] py-[5%] flex flex-col mobile:items-center justify-between h-full mobile:flex-col mobile:gap-[5vw]">
                    <div className="w-full flex items-center pl-[3vw] justify-start">
                        <Image src={yellowRectangle} height={52} width={77} alt="yellow-rectangle" className="blockAnim mobile:w-[10vw] mobile:h-[8vw]" />
                    </div>

                    <div className="space-y-[2vw] w-[80%] mb-[3vw] pr-[3vw] pl-[10vw] text-black1 py-[3vw] mobile:w-[98%] mobile:text-[4.6vw] mobile:px-[4vw] tablet:w-full tablet:pl-[4vw] tablet:pr-[3vw] ">
                        {aboutsub.map((item, index) => (
                            <div className="content about-content  mobile:leading-[1.6]" key={index}>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-full translate-x-[65%] rtl:translate-x-[-60%] mobile:translate-x-[20%] tablet:translate-x-[30%] rtl:tablet:translate-x-[-30%] rtl:mobile:translate-x-[-20%]">
                        <ImageComponent imgsrc={aboutImage} width={"w-[80%] mobile:w-[80%]"} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
