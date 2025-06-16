import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay, Parallax } from "swiper/modules";
import { useTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import "swiper/css/parallax";
import gsap from "gsap";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

const slides = [
  {
    image: "/assets/images/homepage/rymal-portfolio-1.png",
  },
  {
    image: "/assets/images/homepage/ottawa-portfolio.png",
  },
  {
    image: "/assets/images/homepage/portfolio-1.png",
  },
  {
    image: "/assets/images/homepage/hero-bg.jpg",
  },
  {
    image: "/assets/images/homepage/portfolio-1.png",
  },
  {
    image: "/assets/images/homepage/hero-bg.jpg",
  },
];

export default function SwiperSlider() {
  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const { t } = useTranslation("home");
  const portfolio = t("portfolio", { returnObjects: true });
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#portfolio", {
        y: 30,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top 60%"
        }
      });
    });
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-content-fadeup", {
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });
      gsap.from(".swiper-content-fadeup", {
        opacity: 0,
        duration: 1,
        ease: "power1.in",
        delay: 0.7,
      });
    });
    return () => ctx.revert();
  }, [activeIndex]);

  const updateProgressBar = (realIndex) => {
    const totalSlides = slides.length;
    const progress = ((realIndex + 1) / totalSlides) * 100;

    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }

    setActiveIndex(realIndex + 1);
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const buttonRef = useRef(null);

  function handleMouseMove(e) {
    const hoverCircle = e.currentTarget.querySelector('.hover-circle');
    if (hoverCircle) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverCircle.style.left = `${x}px`;
      hoverCircle.style.top = `${y}px`;
    }
  }

  return (
    <div className="relative w-screen overflow-hidden h-[54vw] mobile:h-screen tablet:h-[100vw]" id="portfolio">
      <Swiper
        dir="ltr"
        loop={true}
        speed={1000}
        parallax={true}
        modules={[Controller, Parallax, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateProgressBar(swiper.realIndex);
        }}
        onRealIndexChange={(swiper) => updateProgressBar(swiper.realIndex)}
        className="swiper-container main-slider"
      >
        {portfolio.map((item, idx) => (
          <>
            <SwiperSlide key={idx}>
              <figure
                className="relative w-full h-full  overflow-hidden"
                data-swiper-parallax="50%"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 rtl:bg-gradient-to-l" />
                <Image
                  src={item.image}
                  width={1920}
                  quality={95}
                  height={1080}
                  alt="portfolio-images"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div
                key={idx}
                className="slide absolute w-full h-full flex items-center ltr:justify-start rtl:justify-end top-0 left-0 px-[5vw] overflow-hidden "
              >
                <div className="slide__content absolute z-[2] text-white top-[50%] w-[50vw] h-[20vw] mobile:w-full mobile:top-[55%] tablet:w-[42%] tablet:top-[55%]">
                  <div className="address-container absolute top-0 ltr:left-[0] mt-[2vw] rtl:right-[0] rtl:text-right space-y-4">
                    <p className="text-[2.6vw] text-white font-display font-light swiper-content-fadeup mobile:text-[7vw] tablet:text-[4vw]">
                      {item.text1}
                    </p>
                    <p className="text-white font-light swiper-content-fadeup mobile:text-[4.1vw] tablet:text-[2.5vw]">
                      {item.text2}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <div className="absolute top-[10%] left-[5%] z-[5] text-white rtl:right-[5%]">
        <h2 className="slide__heading text-[4.5vw] font-display leading-[1.2] mb-[1.5vw] mobile:text-[10vw] mobile:mb-6 tablet:text-[7vw]">
          {t("portfolioHead")}
        </h2>
        <p className="slide__text  mobile:text-[4.1vw] w-[50%] mobile:w-full mobile:tracking-wider tablet:text-[2.5vw]">
          {t("portfolioSub")}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-[20vw] flex items-center text-white gap-[0.5vw] absolute top-[45%] z-[5] left-[5%] mobile:w-full mobile:text-[4.1vw] mobile:gap-[2vw] mobile:top-[45%] tablet:top-[50%] tablet:text-[3vw] tablet:w-[30vw] tablet:gap-[2vw] rtl:right-[5%]">
        <p>{String(activeIndex).padStart(2, "0")}</p>
        <div className="w-[15vw] h-fit bg-white/20 mobile:w-[75vw] tablet:w-[25vw]">
          <div
            ref={progressRef}
            className="w-[15vw] h-[2px] bg-white rounded-full relative overflow-hidden transistion-all duration-300 mobile:h-[3px]"
            style={{ width: "20%" }}
          >
            <span className="absolute top-0 left-0 h-full transition-all duration-500"></span>
          </div>
        </div>
        <p>{String(slides.length).padStart(2, "0")}</p>
      </div>

      {/* Next Button */}
      <div
        ref={buttonRef}
        onMouseMove={(e) => handleMouseMove(e)}
        className="absolute z-[5] bottom-[25%] ltr:left-[10%] rtl:right-[5%] w-[3.5vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[7vw] tablet:h-[7vw] overflow-hidden group rounded-full next-button cursor-pointer border border-white transition-colors duration-500 mobile:bottom-[20%] mobile:ltr:left-[20%] rtl:mobile:right-[5%] tablet:bottom-[20%] tablet:left-[15%] "
        onClick={handleNext}
      >
        <span
          className="hover-circle absolute aspect-square rounded-full bg-white
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
          style={{
            width: "300%",
          }}
        ></span>
        <div className="w-full h-full relative z-[6] flex justify-center items-center">
          <span className="w-[1.5vw] h-[1.5vw] mobile:w-[5vw] mobile:h-[5vw] flex justify-center items-center tablet:w-[4vw] tablet:h-[4vw]">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2189 10.1367L14.5942 18.2363C14.4144 18.4051 14.1705 18.5 13.9162 18.5C13.6619 18.5 13.418 18.4051 13.2382 18.2363C13.0584 18.0674 12.9574 17.8384 12.9574 17.5995C12.9574 17.3607 13.0584 17.1317 13.2382 16.9628L20.2278 10.3999L1.4583 10.3999C1.20414 10.3999 0.960397 10.3051 0.78068 10.1364C0.600964 9.96759 0.5 9.73868 0.5 9.5C0.5 9.26132 0.600964 9.03241 0.78068 8.86364C0.960397 8.69486 1.20414 8.60005 1.4583 8.60005L20.2278 8.60005L13.2382 2.03716C13.0584 1.8683 12.9574 1.63926 12.9574 1.40045C12.9574 1.16164 13.0584 0.932603 13.2382 0.763736C13.418 0.594869 13.6619 0.5 13.9162 0.5C14.1705 0.5 14.4144 0.594869 14.5942 0.763736L23.2189 8.86328C23.308 8.94686 23.3787 9.04612 23.427 9.15537C23.4752 9.26462 23.5 9.38173 23.5 9.5C23.5 9.61827 23.4752 9.73537 23.427 9.84462C23.3787 9.95388 23.308 10.0531 23.2189 10.1367Z"
                fill="white"
                className="group-hover:fill-black group-hover:stroke-black transition-colors duration-500"
                stroke="white"
                strokeWidth="0.3"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Prev Button */}
      <div
        ref={buttonRef}
        onMouseMove={(e) => handleMouseMove(e)}
        className="absolute z-[5] bottom-[25%] ltr:left-[5%] rtl:right-[10%] w-[3.5vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] overflow-hidden group  transition-all duration-500 rounded-full prev-button cursor-pointer border border-white mobile:bottom-[20%] tablet:w-[7vw] tablet:h-[7vw] tablet:bottom-[20%] tablet:left-[5%] mobile:ltr:left-[5%] mobile:rtl:right-[20%] rtl:tablet:left-[80%]"
        onClick={handlePrev}
      >
        <span
          className="hover-circle absolute aspect-square rounded-full bg-white
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
          style={{
            width: "300%",
          }}
        >
        </span>
        <div className="w-full h-full flex justify-center items-center rotate-180">
          <span className="w-[1.5vw] h-[1.5vw] mobile:w-[5vw] mobile:h-[5vw] flex justify-center items-center tablet:w-[4vw] tablet:h-[4vw]">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2189 10.1367L14.5942 18.2363C14.4144 18.4051 14.1705 18.5 13.9162 18.5C13.6619 18.5 13.418 18.4051 13.2382 18.2363C13.0584 18.0674 12.9574 17.8384 12.9574 17.5995C12.9574 17.3607 13.0584 17.1317 13.2382 16.9628L20.2278 10.3999L1.4583 10.3999C1.20414 10.3999 0.960397 10.3051 0.78068 10.1364C0.600964 9.96759 0.5 9.73868 0.5 9.5C0.5 9.26132 0.600964 9.03241 0.78068 8.86364C0.960397 8.69486 1.20414 8.60005 1.4583 8.60005L20.2278 8.60005L13.2382 2.03716C13.0584 1.8683 12.9574 1.63926 12.9574 1.40045C12.9574 1.16164 13.0584 0.932603 13.2382 0.763736C13.418 0.594869 13.6619 0.5 13.9162 0.5C14.1705 0.5 14.4144 0.594869 14.5942 0.763736L23.2189 8.86328C23.308 8.94686 23.3787 9.04612 23.427 9.15537C23.4752 9.26462 23.5 9.38173 23.5 9.5C23.5 9.61827 23.4752 9.73537 23.427 9.84462C23.3787 9.95388 23.308 10.0531 23.2189 10.1367Z"
                fill="white"
                className="group-hover:fill-black group-hover:stroke-black transition-colors duration-500"
                stroke="white"
                strokeWidth="0.3"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="absolute bottom-[10%] z-[5] ltr:left-[5%] mobile:bottom-[8%] tablet:bottom-[5%] rtl:right-[5%] rtl:mobile:left-[27%] rtl:tablet:left-[55%]">
        <LinkButton href={"/invest-with-us#portfolio"} text={t('portfolioCta')} />
      </div>
    </div>
  );
}
