"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "next-i18next";

export default function MarqueeScroll() {
    const { t } = useTranslation('common');
  const marqueeInnerRef = useRef(null);
  const marqueePartsRef = useRef([]);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY; 
   
      setIsScrollingDown(scrollY > currentScroll);
      console.log(isScrollingDown)
      setCurrentScroll(scrollY);

      console.log(scrollY)

     
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    gsap.to(marqueePartsRef.current, {
      xPercent: isScrollingDown?-100:100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    }).totalProgress(0.5);

    gsap.set(marqueeInnerRef.current, { xPercent: -50 });


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScroll, isScrollingDown]);

  return (
    <div className="overflow-hidden w-full">
      <div className="h-[50vh]"></div> {/* Spacer for scrolling effect */}

      <section className="relative overflow-hidden bg-gray-900 py-10">
        <div
          className="marquee__inner flex whitespace-nowrap"
          ref={marqueeInnerRef}
          aria-hidden="true"
        >
          {Array(6)
            .fill("food wine fish beef vegetables")
            .map((text, index) => (
              <div
                key={index}
                className="marquee__part text-white text-[5vw] font-bold px-8 uppercase"
                ref={(el) => (marqueePartsRef.current[index] = el)}
              >
                   <span className="text-white font-display font-bold text-[11vw] pr-20">
                            {t("sectionBreak")}
                        </span>
                        <span className="text-white font-display font-bold text-[11vw] pr-20">
                            {t("sectionBreak")}
                        </span>
              </div>
            ))}
        </div>
      </section>

      <div className="h-[50vh]"></div> {/* Spacer for scrolling effect */}
    </div>
  );
}
