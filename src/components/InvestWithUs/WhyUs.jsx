import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import invest1 from "../../../public/assets/images/invest/invest-1.jpg";
import invest2 from "../../../public/assets/images/invest/invest-2.jpg";
import invest3 from "../../../public/assets/images/invest/invest-3.jpg";
import invest4 from "../../../public/assets/images/invest/invest-4.jpg";
import invest5 from "../../../public/assets/images/invest/invest-5.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [invest1, invest2, invest3, invest4, invest5];

const WhyUS = () => {
  const { t } = useTranslation("invest");
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isRTL =
    typeof window !== "undefined" && document?.documentElement?.dir === "rtl";

  const text = t("whyUs", { returnObjects: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1022);
    };

    if (globalThis.innerWidth <= 1021) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(null);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    setActive(false);
    setCurrentIndex(null);
  };
  function handleMouseMove(e) {
    const hoverCircle = e.currentTarget.querySelector(".hover-circle");
    if (hoverCircle) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverCircle.style.left = `${x}px`;
      hoverCircle.style.top = `${y}px`;
    }
  }

  return (
    <section className="bg-[#FFFFFF] py-[7vw] mobile:py-[10vw] dark w-screen overflow-hidden relative">
      <div className="px-[5%] mobile:px-[5%]">
        <h2
          data-title-anim
          className="heading-1 mb-[6vw] mobile:leading-[1.2] mobile:!text-[10.8vw] mobile:mb-[8vw]"
        >
          {t("whyUsHead")}
        </h2>
        <div className="w-full mobile:overflow-x-scroll tablet:overflow-x-scroll">
          <div className="flex gap-[1.3vw] mobile:gap-y-[8vw] mobile:w-fit mobile:gap-[4vw] tablet:w-fit">
            {text.map((item, index) => (
              <div
                key={index}
                className="w-[17vw] h-[22vw] relative group duration-500 transition-transform mobile:w-[70vw] mobile:h-[60vw] tablet:!w-[50vw] tablet:h-[40vw]"
                style={{
                  zIndex: index === currentIndex && active ? "20" : "0",
                  transform:
                    !isMobile && index === currentIndex && active
                      ? isRTL
                        ? `translateX(${17 * currentIndex + 1.265 * currentIndex}vw)`
                        : `translateX(-${17 * currentIndex + 1.265 * currentIndex}vw)`
                      : "translateX(0)",
                }}
              >
                <div
                  className="w-full h-full overflow-hidden relative cursor-pointer "
                  onClick={() => {
                    setActive(true);
                    setCurrentIndex(index);
                    setCurrentMobileIndex(index);
                  }}
                >
                  <Image
                    className={`w-full h-full object-cover ${currentIndex == index ? "gray-scale-0" : "grayscale"} mobile:!gray-scale-0 `}
                    placeholder="blur"
                    src={images[index]}
                    alt="Image"
                  />
                  <div className={`mobile:text-[5vw] tablet:text-[2.5vw] hidden z-[10] text-white absolute bottom-0 left-0 w-full h-full bg-black/50 mobile:flex mobile:items-center mobile:justify-center tablet:flex tablet:items-center tablet:justify-center ${currentIndex == index ? "bg-transparent" : ""}`}><p className={`p-[2vw] ${currentIndex == index ? "hidden" : ""}`}>
                    {t('click')}</p></div>
                  <div
                    className={`absolute bg-[#F2F2E9] top-0 left-0 bottom-0 right-0 opacity-0  z-[5] transition-all duration-500 ease py-[1vw] flex flex-col justify-between h-full pr-[1.5vw] px-[1vw] w-full   mobile:hidden tablet:hidden ${active ? "group-hover:opacity-0" : "group-hover:opacity-100"}`}
                  >
                    <div className="flex justify-between">
                      <p>{item.num}</p>
                      <div className="rounded-full border p-3 h-[3vw] w-[3vw] flex items-center border-black1 justify-end">
                        <Image
                          src={"/icons/plus.svg"}
                          className="w-full h-full object-contain"
                          height={20}
                          width={20}
                          alt="plus"
                        />
                      </div>
                    </div>
                    <p className="text-[2.2vw] !leading-[1.2] text-black1 transform -translate-y-[80px] opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ltr:font-display ">
                      {item.title}
                    </p>
                  </div>
                </div>
                <div
                  className={`bg-[#747977] absolute top-0 left-[calc(17vw+1.3vw)] w-[calc(17vw*4+3.9vw)] rtl:right-[calc(17vw+1.3vw)] h-full duration-500 mobile:hidden tablet:hidden ${index === currentIndex && active
                    ? "opacity-100 z-20"
                    : "opacity-0"
                    }`}
                >
                  <div className="w-full h-full relative flex flex-col justify-end gap-[1vw] p-[1.5vw] text-white">
                    <p>{item.num}</p>
                    <p className="text-[2.2vw] !leading-[1.2] font-body ltr:font-display">
                      {item.title}
                    </p>
                    <p>{item.para}</p>
                    <div
                      className="rounded-full border p-3 absolute top-5 right-5 z-[20] h-[3vw] w-[3vw] flex items-center border-white justify-end cursor-pointer"
                      onClick={handleClose}
                    >
                      <Image
                        src={"/icons/plus.svg"}
                        className="w-full h-full object-contain invert rotate-45"
                        height={20}
                        width={20}
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`flex gap-[1vw] absolute bottom-[5%] overflow-hidden right-[5%] flex-row-reverse tablet:hidden mobile:hidden ${active ? "" : "hidden"}`}
          >
            <div

              onMouseMove={(e) => handleMouseMove(e)}
              className=" w-[3.5vw] relative h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[7vw] tablet:h-[7vw] overflow-hidden group rounded-full next-button  cursor-pointer border border-black transition-colors duration-500"
              onClick={() => {
                if (text.length !== currentIndex + 1) {
                  setCurrentIndex(currentIndex + 1);
                }
                console.log("working");
              }}
            >
              <span
                className="hover-circle absolute aspect-square rounded-full bg-black
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
                style={{
                  width: "300%",
                }}
              ></span>
              <div className="w-full h-full relative z-[6] flex justify-center items-center">
                <span className="w-[1.5vw] h-[1.5vw] mobile:w-[5vw] mobile:h-[5vw] flex justify-center items-center tablet:w-[4vw] tablet:h-[4vw] rtl:rotate-180">
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
                      className="fill-black stroke-black group-hover:fill-white group-hover:stroke-white  transition-colors duration-500"
                      stroke="white"
                      strokeWidth="0.3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Prev Button */}
            <div
              onMouseMove={(e) => handleMouseMove(e)}
              className="relative w-[3.5vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] overflow-hidden group  transition-all duration-500 rounded-full prev-button cursor-pointer border border-black mobile:bottom-[20%] tablet:w-[7vw] tablet:h-[7vw] tablet:bottom-[20%] tablet:left-[5%] rtl:mobile:left-[65%] rtl:tablet:left-[80%]"
              onClick={() => {
                if (currentIndex !== 0) {
                  setCurrentIndex(currentIndex - 1);
                }
              }}
            >
              <span
                className="hover-circle absolute aspect-square rounded-full bg-black
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
                style={{
                  width: "300%",
                }}
              ></span>
              <div className="w-full h-full flex justify-center items-center rotate-180">
                <span className="w-[1.5vw] h-[1.5vw] mobile:w-[5vw] mobile:h-[5vw] flex justify-center items-center tablet:w-[4vw] tablet:h-[4vw] rtl:rotate-180">
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
                      className="fill-black stroke-black group-hover:fill-white group-hover:stroke-white  transition-colors duration-500"
                      stroke="white"
                      strokeWidth="0.3"
                    />
                  </svg>
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className="hidden mobile:block w-full h-[70vw] bg-[#747977] mt-[8vw] tablet:block  tablet:h-[52vw]">
          <div className="w-full h-full relative flex flex-col justify-start gap-[1vw] p-[1.5vw] text-white">
            {text.map((item, index) => (
              <div
                key={index}
                className={`${index == currentMobileIndex ? "" : "hidden"} flex flex-col gap-[4vw] px-[2vw] py-[4vw]`}
              >
                <p className="text-[4vw]">{item.num}</p>
                <p className="text-[6.2vw] !leading-[1.2] !font-display tablet:text-[6vw]">
                  {item.title}
                </p>
                <p className="text-[4.1vw] tablet:text-[3vw]">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;
