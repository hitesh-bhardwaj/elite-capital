import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitInWord } from "@/components/splitTextUtils";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ img, translation, heading, para, nextSectionId }) => {
  const { t } = useTranslation(`${translation}`);
  const buttonRef = useRef(null);
  let delayTime = "";
  useEffect(() => {
    const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
    delayTime = isFirstTimeLoading ? 1.8 : 0.2;
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (buttonRef.current.querySelector('.hover-circle')) {
      buttonRef.current.querySelector('.hover-circle').style.left = `${x}px`;
      buttonRef.current.querySelector('.hover-circle').style.top = `${y}px`;
    }
  }, []);
  const scrollToNext = () => {
    const nextSection = document.getElementById(`${nextSectionId}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-img", {
        scale: 1.1,
        duration: 1,
        delay: delayTime,
        ease: "power3.out",
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
      const heroParaAnimation = document.querySelector(".hero-para-anim");
      SplitInWord(heroParaAnimation);
      const paraLine = heroParaAnimation.querySelectorAll(".word");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: heroParaAnimation,
          start: "top 80%",
        },
        opacity: 0,
        yPercent: 40,
        duration: 1,
        delay: delayTime,
        stagger: 0.02,
      });

      const heroTitleAnimation = document.querySelector(".hero-title-anim");
      SplitInWord(heroTitleAnimation);
      const HeroTitle = heroTitleAnimation.querySelectorAll(".word");
      gsap.from(HeroTitle, {
        scrollTrigger: {
          trigger: heroTitleAnimation,
          start: "top 80%",
        },
        opacity: 0,
        delay: delayTime,
        x: 20,
        duration: 1,
        stagger: 0.05,
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
          className="object-cover hero-img mobile:brightness-75"
          placeholder="blur"
          loading="lazy"
          quality={90}
        />
        <div className="relative z-10 px-[5vw] pt-[8vw] flex items-center justify-start h-full mobile:items-start mobile:pt-[30%]">
          <div className="py-[10%] text-white w-full mobile:w-full tablet:space-y-[2vw]">
            <h1 className="heading-1 w-[80%] mobile:w-[95%] tablet:w-full font-display leading-1.15  mb-[3vw] mobile:mb-[5vw] hero-title-anim">
              {heading}
            </h1>
            {para && (
              <p className="text-[1.56vw] mb-[3vw] w-[80%] mobile:text-[4.1vw] mobile:w-full hero-para-anim tablet:text-[3vw] mobile:leading-[1.6]">
                {para}
              </p>
            )}
          </div>
        </div>
        <div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full bg-white absolute bottom-10 right-20 cursor-pointer transition z-[20] group duration-500 ease hover:text-white mobile:w-[15vw] mobile:h-[15vw] mobile:right-5 overflow-hidden tablet:w-[7vw] tablet:h-[7vw] tablet:right-5 rtl:right-auto rtl:left-10 rtl:mobile:left-5"
          onClick={scrollToNext}
        >
          <div className="z-10 p-[0.5vw]">
            <svg className="rotate-90 h-full w-full translate-x-[2%]" width="20" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2189 10.1367L14.5942 18.2363C14.4144 18.4051 14.1705 18.5 13.9162 18.5C13.6619 18.5 13.418 18.4051 13.2382 18.2363C13.0584 18.0674 12.9574 17.8384 12.9574 17.5995C12.9574 17.3607 13.0584 17.1317 13.2382 16.9628L20.2278 10.3999L1.4583 10.3999C1.20414 10.3999 0.960397 10.3051 0.78068 10.1364C0.600964 9.96759 0.5 9.73868 0.5 9.5C0.5 9.26132 0.600964 9.03241 0.78068 8.86364C0.960397 8.69486 1.20414 8.60005 1.4583 8.60005L20.2278 8.60005L13.2382 2.03716C13.0584 1.8683 12.9574 1.63926 12.9574 1.40045C12.9574 1.16164 13.0584 0.932603 13.2382 0.763736C13.418 0.594869 13.6619 0.5 13.9162 0.5C14.1705 0.5 14.4144 0.594869 14.5942 0.763736L23.2189 8.86328C23.308 8.94686 23.3787 9.04612 23.427 9.15537C23.4752 9.26462 23.5 9.38173 23.5 9.5C23.5 9.61827 23.4752 9.73537 23.427 9.84462C23.3787 9.95388 23.308 10.0531 23.2189 10.1367Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
            </svg>
          </div>
          <span
            className="hover-circle absolute aspect-square rounded-full bg-black 
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
            style={{
              width: '200%',
            }}
          ></span>
        </div>
      </section>
    </>
  );
};

export default Hero;
