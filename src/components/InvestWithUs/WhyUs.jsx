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

  const text = t("whyUs", { returnObjects: true });

  const handleClose = () => {
    setActive(null);
    setCurrentIndex(null);
    console.log(active)
  };

  return (
    <section className="bg-[#FFFFFF] py-[7vw] mobile:py-[10vw]">
      <div className="px-[5%] mobile:px-[5%]">
        <div>
          <h2
            data-title-anim
            className="heading-1 mb-[6vw] mobile:leading-[1.2] tablet:!text-[5vw]"
          >
            {t("whyUsHead")}
          </h2>

          <div className="flex items-center gap-[2vw] mobile:gap-y-[8vw]">
            {text.map((item, index) => (
              <div
                key={index}
                className="w-[22vw] h-full relative group transition-all duration-500 ease cursor-pointer"
                onClick={() => {
                  setActive(true);
                  setCurrentIndex(index);
                }}
              >
                <Image
                  src={images[index]}
                  alt={`invest-${index + 1}`}
                  height={446}
                  width={324}
                  className="relative z-[4]"
                />

                {/* MODAL PANEL */}
                {/* <div className="w-full flex"> */}
                  <div
                    className={`w-[55vw] bg-[#747977] h-full absolute right-[-5%] top-0 z-[20] translate-x-[100%] cursor-auto transition-all duration-300 ${
                      index === currentIndex && active ? "block" : "hidden"
                    }`}
                  >
                    <div className="w-full h-full relative flex flex-col justify-end gap-[1vw] p-[1.5vw] text-white">
                      <p>{item.num}</p>
                      <p className="text-[2.2vw] !leading-[1.2] !font-display">
                        {item.title}
                      </p>
                      <p>{item.para}</p>

                      {/* CLOSE BUTTON */}
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
                {/* </div> */}

                {/* HOVER OVERLAY */}
                <span className="w-full h-full absolute top-0 left-0 z-[19] opacity-0 bg-[#F2F2E9] group-hover:opacity-[1] transition-all duration-500 ease"></span>

                {/* HOVER TEXT BLOCK */}
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-[1]  z-[19] transition-all duration-500 ease py-[1vw] flex flex-col justify-between h-full pr-[1.5vw] px-[1vw] w-full">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;
