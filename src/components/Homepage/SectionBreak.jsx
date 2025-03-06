import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/homepage/section-break.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SectionBreak = () => {
  const { t } = useTranslation("common");

  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const marqueePartsRef = useRef([]);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrollingDown(scrollY > currentScroll);
      console.log(isScrollingDown);
      setCurrentScroll(scrollY);

      console.log(scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    gsap
      .to(marqueePartsRef.current, {
        xPercent: isScrollingDown ? -100 : 100,
        repeat: -1,
        duration: 16,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(marqueeInnerRef.current, { xPercent: -50 });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScroll, isScrollingDown]);
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
    <section className="h-screen overflow-hidden bg-black relative" id="section-break">
      <div className="w-full h-full overflow-hidden relative">
        <Image
          src={image}
          alt="Section Break"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="absolute z-[1] top-0 left-0 object-cover w-full h-full break-image"
        />
        <div className="absolute top-0 z-[10] h-full w-screen overflow-hidden flex items-center justify-start">
          <div className="relative overflow-hidden py-10">
            <div
              className="marquee__inner flex whitespace-nowrap"
              ref={marqueeInnerRef}
              aria-hidden="true"
            >
              {Array(6)
                .fill("")
                .map((text, index) => (
                  <div
                    key={index}
                    className="marquee__part text-white text-[5vw] flex font-bold px-8 "
                    ref={(el) => (marqueePartsRef.current[index] = el)}
                  >
                    <span className="text-white font-display font-bold text-[11vw] px-24">
                      {t("sectionBreak")}
                    </span>
                    <span className="text-white font-display font-bold text-[11vw] px-24">
                      {t("sectionBreak")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBreak;
