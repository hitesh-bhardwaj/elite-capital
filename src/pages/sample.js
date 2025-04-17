import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay, Parallax } from "swiper/modules";
import { useTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import "swiper/css/parallax";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const slides = [
  {
    name: "Shaun Matthews",
    image: "/assets/images/homepage/portfolio-1.png",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Alexis Berry",
    image: "/assets/images/homepage/hero-bg.jpg",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Billie Pierce",
    image: "/assets/images/homepage/portfolio-1.png",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Trevor Copeland",
    image: "/assets/images/homepage/hero-bg.jpg",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Bernadette Newman",
    image:
      "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function SwiperSlider() {
  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };

  const { t } = useTranslation("home");
  const portfolio = t("portfolio", { returnObjects: true });


  return (
    <div className="relative w-full h-screen">
      {/* Main Swiper with Parallax */}
      <Swiper
        loop={true}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Controller, Parallax]}
        className="swiper-container main-slider"
        parallax={true}
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id}>
            <figure
              className="relative w-full h-full"
              data-swiper-parallax="50%"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  filter: "brightness(0.7)",
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </figure>
            {portfolio.map((item, id) => (
              <>
                <div
                  key={id}
                  className={`slide absolute w-full h-full flex items-center justify-start top-0 left-0 px-[5vw] overflow-hidden`}
                >
                  <div className="slide__content relative z-[2] text-white top-[-30%] w-[70%]">
                    <h2
                      className="slide__heading text-[5vw] font-display leading-[1.2]"
                      dangerouslySetInnerHTML={{ __html: t("portfolioHead") }}
                    />
                    <p className="slide__text">{t("portfolioSub")}</p>

                    <div className="address-container absolute bottom-[-120%] left-[0%]">
                      <p className="text-[2.9vw] text-white">{item.text1}</p>
                      <p className="text-white">{item.text2}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`absolute z-[5] top-[15%] right-[5%] w-[4vw] h-[4vw] overflow-hidden rounded-full next-button hover:bg-white cursor-pointer border border-white mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] tablet:w-fit tablet:h-fit tablet:p-[2vw] tablet:top-[30%]
                ${
                  activeButton === "next" ? " text-white" : "bg-transparent"
                } transition-colors duration-300`} // Added background color transition
        onClick={handleNext} // Trigger next slide
      >
        <div className="w-[4vw] h-[4vw]  relative z-[6] mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center group transition-all duration-500">
          <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
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
                stroke="white"
                stroke-width="0.3"
              />
            </svg>
          </span>
        </div>
      </div>
      <div
        className={`absolute z-[5] w-[4vw] h-[4vw] top-[15%] right-[11%]  border border-white overflow-hidden group hover:bg-white transition-all duration-500 rounded-full prev-button cursor-pointer mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] mobile:right-[25%] tablet:w-fit tablet:h-fit tablet:p-[2vw] tablet:right-[15%] tablet:top-[30%]
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#134bd5]"
                } transition-colors duration-300`} // Added background color transition
        onClick={handlePrev} // Trigger previous slide
      >
        <div className="w-[4vw] h-[4vw]  mobile:w-[7.5vw] mobile:h-[7.5vw] relative z-[6]  tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center ">
          <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                fill="white"
                stroke="white"
                className="group-hover:fill-[#134bd5] group-hover:stroke-[#134bd5] transition-all duration-500"
                strokeWidth="1.79924"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
