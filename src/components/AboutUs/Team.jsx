import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import BoardofDirectors from "./BoardofDirectors";
import ShariahBoard from "./ShariahBoard";
import BoardofDirectorsCopy from "./BoardofDirectors-copy";

const Team = () => {
  const { t } = useTranslation("about");
  const members = t("teamMembers", { returnObjects: true });

  return (
    <>
      <section className="w-screen h-full bg-[#ffffff]  pb-[5vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%] dark">
        <div className="px-[5vw] py-[5vw] mobile:space-y-[5vw]">
          <h2

            className="text-[4.7vw] font-display mb-[2vw] mobile:text-[12.5vw] tablet:mb-0 tablet:text-[7vw]"
          >
            {t("team")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:w-screen mobile:h-full mobile:pr-[10vw] mobile:ml-[-5vw] mobile:pl-[5vw] tablet:overflow-x-scroll rtl:mobile:mr-[-5vw] rtl:mobile:pr-[5vw]">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:flex-nowrap mobile:w-fit mobile:h-[110vw] tablet:flex-nowrap tablet:w-fit tablet:h-[70vw]">
              {members.map((item, index) => (
                <div
                  className={` h-[30vw] relative flex flex-col gap-[1vw] fadeUp border border-black/10 rounded-[0.5vw] group mobile:w-[85vw] mobile:h-[100vw] transition-transform hover:scale-[1.02] tablet:w-[48vw] rtl:tablet:rounded-[2vw] overflow-hidden mobile:rounded-[3vw] tablet:h-[60vw] mobile:mt-[-5vw] ${index < 2 ? "w-[43vw]" : "w-[28vw]"
                    }`}
                  key={index}
                >
                  <div className="h-full w-full bg-white group overflow-hidden transition-all duration-500 ease mobile:h-[100vw] ">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className={`object-contain w-full h-full group-hover:scale-[0.95] transition-all duration-500 ease`}
                    />
                  </div>
                  <div className="mobile:space-y-[2vw] flex flex-col mobile:gap-[4vw] absolute bottom-0 h-[30vw] mobile:h-[100vw] group-hover:translate-y-[0%] translate-y-[70%] transition-all duration-500 ease-in-out  rounded-tl-[0.5vw] rounded-tr-[0.5vw] w-full px-[1vw] pt-[1vw] bg-[#F2F2E9] left-0 mobile:pt-[3vw] mobile:translate-y-[75%] mobile:rounded-tl-[2.5vw] mobile:rounded-tr-[2.5vw] mobile:px-[5vw] tablet:h-[60vw] tablet:translate-y-[75%]">
                    <div className="h-fit space-y-2">
                      <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[4.5vw]">
                        {item.name}
                      </p>
                      <p className="h-[5vw] mobile:text-[3.8vw] tablet:text-[2.5vw] text-[1.4vw] mobile:h-fit">
                        {item.des}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1vw] mt-[1vw] mobile:gap-[3vw] tablet:gap-[3vw] tablet:mt-[5vw]">
                      {item.features.map((list, index) => (
                        <div
                          key={index}
                          className="flex gap-[2vw] w-full pl-[1vw] "
                        >
                          <span
                            className="w-[3vw] h-[1vw] bg-[#CE8000] mt-[0.5vw] block mobile:w-[8vw] mobile:h-[3vw] tablet:h-[2.5vw] tablet:w-[6vw] mobile:mt-[2vw] tablet:mt-[2vw] rtl:scale-x-[-1]"
                            style={{
                              clipPath:
                                "polygon(0 0, 100% 0%, 70% 100%, 0% 100%)",
                            }}
                          ></span>
                          <p className="text-[1.2vw] w-[80%] mobile:text-[3.5vw] tablet:text-[2vw] mobile:leading-[1.6]">
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
        <BoardofDirectorsCopy />
        <ShariahBoard />
      </section>
    </>
  );
};

export default Team;
