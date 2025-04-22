import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import BoardofDirectors from "./BoardofDirectors";
import ShariahBoard from "./ShariahBoard";

const Team = () => {
  const { t } = useTranslation("about");
  const members = t("teamMembers", { returnObjects: true });

  return (
    <>
      <section className="w-screen h-full bg-[#ffffff]  pb-[5vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%] dark">
        <div className="px-[5vw] py-[5vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[4.6vw] font-display mb-[2vw] mobile:text-[12.5vw] tablet:mb-0"
          >
            {t("team")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:w-screen mobile:h-full mobile:pr-[10vw] mobile:ml-[-5vw] mobile:pl-[5vw]">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:flex-nowrap mobile:w-fit mobile:h-[120vw]">
              {members.map((item, index) => (
                <div
                  className={` h-[30vw] relative flex flex-col gap-[1vw] fadeUp border border-black/10 rounded-[0.5vw] group mobile:w-[85vw] mobile:h-[100vw] transition-transform hover:scale-[1.02] tablet:w-[43vw] overflow-hidden mobile:rounded-[3vw] ${
                    index < 2 ? "w-[43vw]" : "w-[28vw]"
                  }`}
                  key={index}
                >
                  <div className="h-full w-full bg-white group overflow-hidden transition-all duration-500 ease mobile:h-[100vw]">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className={`object-contain w-full h-full group-hover:scale-[0.95] transition-all duration-500 ease`}
                    />
                  </div>
                  <div className=" mobile:space-y-[2vw] flex flex-col mobile:gap-[4vw] absolute bottom-0 h-[30vw] mobile:h-[100vw] group-hover:translate-y-[0%] translate-y-[70%] transition-all duration-500 ease-in-out  rounded-tl-[0.5vw] rounded-tr-[0.5vw] w-full px-[2vw] pt-[1vw] bg-[#F2F2E9] left-0 mobile:pt-[3vw] mobile:translate-y-[75%] mobile:rounded-tl-[2.5vw] mobile:rounded-tr-[2.5vw] mobile:px-[5vw]">
                    <div className="h-fit">
                      <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]">
                        {item.name}
                      </p>
                      <p className="h-[5vw] mobile:text-[3.8vw] tablet:text-[2vw] text-[1.2vw] mobile:h-fit">
                        {item.des}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1vw] mobile:gap-[3vw] ">
                      {item.features.map((list, index) => (
                        <div
                          key={index}
                          className="flex gap-[2vw] w-full pl-[1vw] "
                        >
                          <span
                            className="w-[3vw] h-[1vw] bg-[#CE8000] block mobile:w-[8vw] mobile:h-[3vw] mobile:mt-[2vw]"
                            style={{
                              clipPath:
                                "polygon(0 0, 100% 0%, 70% 100%, 0% 100%)",
                            }}
                          ></span>
                          <p className="text-[1vw] w-[80%] mobile:text-[3.5vw] ">
                            {list}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BoardofDirectors />
        <ShariahBoard />
      </section>
    </>
  );
};

export default Team;
