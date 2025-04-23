import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import invest1 from "../../../public/assets/images/invest/invest-1.png";
import invest2 from "../../../public/assets/images/invest/invest-2.png";
import invest3 from "../../../public/assets/images/invest/invest-3.png";
import invest4 from "../../../public/assets/images/invest/invest-4.png";
import invest5 from "../../../public/assets/images/invest/invest-5.png";
import { useEffect, useState } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [invest1, invest2, invest3, invest4, invest5];

const WhyUS = () => {
  const { t } = useTranslation("invest");
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentMobileIndex,setCurrentMobileIndex] =useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const text = t("whyUs", { returnObjects: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1022); 
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClose = (e) => {
    e.stopPropagation();
    setActive(false);
    setCurrentIndex(null);
  };

  return (
    <section className="bg-[#FFFFFF] py-[7vw] mobile:py-[10vw] dark w-screen overflow-hidden">
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
                // Main Card
                key={index}
                className="w-[17vw] h-[22vw] relative group duration-500 transition-transform mobile:w-[43vw] mobile:h-[60vw] tablet:!w-[30vw] tablet:h-[40vw]"
                style={{
                  zIndex: index === currentIndex && active ? "20" : "0",
                  transform:
                  !isMobile && index === currentIndex && active
                  ? `translateX(-${17 * currentIndex + 1.265 * currentIndex}vw)`
                  : "translateX(0)",
                }}
              >
                <div
                  className="w-full h-full overflow-hidden relative cursor-pointer"
                  onClick={() => {
                    setActive(true);
                    setCurrentIndex(index);
                    setCurrentMobileIndex(index);
                  }}
                >
                  <Image
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    src={images[index]}
                    alt="Image"
                  />
                  <div className={`absolute bg-[#F2F2E9] top-0 left-0 bottom-0 right-0 opacity-0  z-[5] transition-all duration-500 ease py-[1vw] flex flex-col justify-between h-full pr-[1.5vw] px-[1vw] w-full mobile:hidden tablet:hidden ${active ? 'group-hover:opacity-0' : 'group-hover:opacity-100'}`}>
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
                    <p className="text-[2.2vw] !leading-[1.2] !font-display text-black1 transform -translate-y-[80px] opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                      {item.title}
                    </p>
                  </div>
                </div>
                <div
                  className={`bg-[#747977] absolute top-0 left-[calc(17vw+1.3vw)] w-[calc(17vw*4+3.9vw)] h-full duration-500 mobile:hidden tablet:hidden ${
                    index === currentIndex && active
                      ? "opacity-100 z-20"
                      : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full relative flex flex-col justify-end gap-[1vw] p-[1.5vw] text-white">
                    <p>{item.num}</p>
                    <p className="text-[2.2vw] !leading-[1.2] !font-display">
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
        </div>
        <div className="hidden mobile:block w-full h-[70vw] bg-[#747977] mt-[8vw] tablet:block  tablet:h-[52vw]">
          <div className="w-full h-full relative flex flex-col justify-start gap-[1vw] p-[1.5vw] text-white">
            {text.map((item, index) => (
              <div className={`${index==currentMobileIndex?"":"hidden"} flex flex-col gap-[4vw] px-[2vw] py-[4vw]`}>
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
