import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ img, translation, heading, para, nextSectionId }) => {
  const { t } = useTranslation(`${translation}`);
  const scrollToNext = () => {
    const nextSection = document.getElementById(`${nextSectionId}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      console.log("scrollll");
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-img", {
        scale: 1.1,
        duration: 1,
        ease: "power3.inOut",
      });
      gsap.to(".hero-img", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        className="relative min-h-screen tablet:h-[80vh] overflow-hidden"
        id="hero"
      >
        <Image
          src={img}
          alt="Hero Background"
          fill
          className="object-cover hero-img"
          placeholder="blur"
          loading="lazy"
          quality={90}
        />
        <div className="relative z-10 px-[5vw] pt-[8vw] flex items-center justify-start h-full mobile:items-start mobile:pt-[30%]">
          <div className="py-[10%] text-white w-full mobile:w-full">
            <h1
              data-title-anim
              className="heading-1 w-full font-display leading-1.15  mb-[3vw]"
            >
              {heading}
            </h1>
            {para && <p data-para-anim className="text-[1.56vw] mb-[3vw] w-[80%]">{para}</p>}
          </div>
        </div>
        <div
          className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full bg-white absolute bottom-10 right-20 cursor-pointer transition hover:scale-110 z-[20]"
          onClick={scrollToNext}
        >
          <Image
            src={"/icons/left-arrow.svg"}
            alt=""
            width={20}
            height={20}
            className="invert -rotate-90"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
