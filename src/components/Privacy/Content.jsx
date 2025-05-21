import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import yellowRectangleMask from "../../../public/icons/yellow-rectangle-mask.svg";
import Image from "next/image";
import gsap from "gsap";

const Content = () => {
  const { t } = useTranslation("privacy");
  const content = t("content", { returnObjects: true });
  useEffect(() => {
    const ctx = gsap.context(() => {
        const yellowCovers = document.querySelectorAll(".yellow-block-cover")
        yellowCovers.forEach((yellowCover)=>{

            gsap.to(yellowCover,{
                scaleX:0,
                duration:0.7,
                ease:"power3.inOut",
                scrollTrigger:{
                    trigger:yellowCover,
                    start:"top 70%"
                }
            })

        })

    });
    return () => ctx.revert();
  });

  return (
    <section className="w-screen h-full py-[8%] px-[5vw] overflow-hidden dark bg-white" id="privacy-content">
      <div className="">
        <div className="mobile:py-[7vw]">
          <p className="content  mobile:leading-[1.6] ">{t("heroSub")}</p>
        </div>
        <span className="bg-black1 w-full h-[1px] block mt-[8vw] mb-[5vw] lineDraw mobile:my-[10vw] tablet:my-[5vw]" />
        <div className="space-y-[4vw] w-full">
          {content.map((item, index) => (
            <>
              <div key={index} className=" flex items-start w-full gap-[1vw]">
                <div className="h-full w-[10%] relative mobile:w-[15%] mt-[0.5vw] tablet:w-[15%]">
                  <span className="bg-white h-full w-full absolute top-0 origin-right yellow-block-cover"></span>
                  <Image
                    src={yellowRectangleMask}
                    alt="yellow-rectamngle-mask"
                    width={100}
                    height={36}
                    className="mobile:h-[8vw] mobile:w-[15vw] tablet:w-[20vw] tablet:h-[5vw] rtl:scale-x-[-1]"
                  />
                </div>
                <div className="mobile:pb-[10vw] w-full mobile:w-[80%]">
                  <div
                    className="heading-2 pb-[2vw] mobile:pb-[8vw] tablet:pb-[5vw] mobile:ml-[2vw] "
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  /> 
                  <div
                    className="content space-y-[2vw] mobile:space-y-[5vw] mobile:w-[125%] mobile:ml-[-14vw] tablet:space-y-[4vw] mobile:leading-[1.6] rtl:mobile:mr-[-14vw] rtl:mobile:ml-0"
                    dangerouslySetInnerHTML={{ __html: item.para }}
                  />
                </div>
              </div>
              <span className="bg-black1 w-full h-[1px] block mt-[1vw] lineDraw mobile:!my-[10vw] tablet:my-[5vw]" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
