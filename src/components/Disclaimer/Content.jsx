import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import yellowRectangleMask from "../../../public/icons/yellow-rectangle-mask.svg";
import Image from "next/image";
import gsap from "gsap";

const Content = () => {
  const { t } = useTranslation("disclaimer");
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
    <section className="w-screen h-full py-[8%] px-[5vw] overflow-hidden dark bg-white" id="disclaimer-content">
      <div className="">
      <span className='bg-black1 w-full h-[1px] block mb-[3vw] lineDraw mobile:my-[10vw]  tablet:my-[5vw]' />
       <div className='h-full w-[10%] relative py-[1vw] mobile:w-[20%]'>
                                          <span className="bg-white h-full w-full absolute top-0 origin-right yellow-block-cover"></span>
                                          <Image src={yellowRectangleMask} alt='yellow-rectamngle-mask' width={100} height={36} className=' mobile:h-[8vw] mobile:w-[15vw] tablet:w-[20vw] tablet:h-[5vw] rtl:scale-x-[-1]' />
                                      </div>
        <div className="space-y-[2vw] w-full">
          {content.map((item, index) => (
            <>
              <div key={index} className=" flex items-start w-full gap-[1vw]">
                <div className="mobile:pb-[10vw] w-full mobile:w-full ">
                  <div
                    className="content space-y-[2vw] mobile:space-y-[5vw] mobile:w-full  tablet:space-y-[4vw] mobile:leading-[1.6] rtl:mobile:mr-[-14vw] rtl:mobile:ml-0"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
