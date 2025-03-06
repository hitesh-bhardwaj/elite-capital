import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/about/section-break.png"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react";
const SectionBreak = () => {
    const { t } = useTranslation('invest');
    useEffect(() => {

   
        gsap.fromTo(
          ".break-image",
          {
            yPercent: -40,
          },
          {
            yPercent: 40,
            ease: "none",
            scrollTrigger: {
              trigger: "#section-break",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, []);

    return (
        <section className="h-screen" id="section-break">
            <div className="w-full h-full overflow-hidden relative">
                <Image 
                    src={image}
                    alt="Success"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="absolute z-[1] top-0 left-0 object-cover w-full h-full break-image"
                />
                <div className="relative z-[10] h-full w-screen overflow-hidden flex items-center justify-start">
                    <div className="font-display text-[5vw] px-[7vw] leading-[1.3]">
                        <span className="text-white">{t('successPara')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBreak;