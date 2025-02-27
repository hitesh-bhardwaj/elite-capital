import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/homepage/section-break.png"
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionBreak = () => {
    const { t } = useTranslation('common');

    const marqueeRef = useRef(null);
    useEffect(() => {
        const marquee = marqueeRef.current;
        const textWidth = marquee.scrollWidth / 2; 
    
        gsap.to(marquee, {
          x: `-${textWidth}px`, 
          duration: 15 , 
          ease: "linear",
          repeat: -1,
          onRepeat: () => {
            gsap.set(marquee, { x: 0 }); 
          },
        });
      }, []);
    return (
        <section className="h-screen">
            <div className="w-full h-full overflow-hidden relative">
                <Image 
                    src={image}
                    alt="Section Break"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="absolute z-[1] top-0 left-0 object-cover w-full h-full"
                />
                <div className="relative z-[10] h-full w-screen overflow-hidden flex items-center justify-start">
                <div className="whitespace-nowrap flex" ref={marqueeRef}>
                        <span className="text-white font-display font-bold text-[11vw] pr-20">
                            {t("sectionBreak")}
                        </span>
                        <span className="text-white font-display font-bold text-[11vw] pr-20">
                            {t("sectionBreak")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBreak;