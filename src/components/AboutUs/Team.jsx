import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

const Team = () => {
  const { t } = useTranslation("about");
  const [openedIndex, setOpenedIndex] = useState(null);
  const [openedIndexinvestment, setOpenedIndexinvestment] = useState(null);
  const [openedIndexadviser, setOpenedIndexadviser] = useState(null);
  const members = t("teamMembers", { returnObjects: true });
  const boardMembers = t("boardMembers", { returnObjects: true });
  const shariahMembers = t("shariahMembers", { returnObjects: true });
  const adviserMembers = t("adviserMembers", { returnObjects: true });
  const investmentMembers = t("investmentMembers", { returnObjects: true });

  return (
    <>
      <section className="w-screen h-full bg-[#ffffff]  pb-[5vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%]">
        <div className="px-[5vw] py-[5vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[5vw] font-display mb-[5vw] mobile:text-[12.5vw] tablet:mb-0"
          >
            {t("team")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:px-0 mobile:w-screen ">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:flex-nowrap mobile:w-fit">
              {members.map((item, index) => (
                <div
                  className={` h-[30vw] relative flex flex-col gap-[1vw] fadeUp border border-black/10 rounded-[0.5vw] group mobile:w-[70vw] mobile:h-[90vw] transition-transform hover:scale-[1.02] tablet:w-[43vw] overflow-hidden ${
                    index < 2 ? "w-[43vw]" : "w-[28vw]"
                  }`}
                  key={index}
                >
                  <div className="h-full w-full bg-white group overflow-hidden transition-all duration-500 ease mobile:h-[65vw]">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className={`object-contain w-full h-full group-hover:scale-[0.95] transition-all duration-500 ease`}
                    />
                  </div>
                  <div className=" mobile:space-y-[2vw] flex flex-col absolute bottom-0 h-[30vw] mobile:h-[32vw] group-hover:translate-y-[0%] translate-y-[70%] transition-all duration-500 ease-in-out  rounded-tl-[0.5vw] rounded-tr-[0.5vw] w-full px-[2vw] pt-[1vw] bg-[#F2F2E9] left-0">
                    <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]">
                      {item.name}
                    </p>
                    <p className="h-[5vw] mobile:text-[4.6vw] tablet:text-[2vw] text-[1.2vw]">
                      {item.des}
                    </p>

                    <div className="flex flex-col gap-[1vw] ">
                      {item.features.map((list, index) => (
                        <div key={index} className="flex gap-[2vw] w-full pl-[2vw]">
                          <span className="w-[2vw] h-[1vw] bg-[#CE8000] block"></span>
                          <p className="text-[1vw] w-[80%] ">{list}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-[5vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[5vw] font-display mb-[2vw] mobile:text-[8.2vw] tablet:text-[5vw] tablet:mb-0 pl-[5vw]"
          >
            {t("teamSub")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:px-0 mobile:w-screen mobile:h-full ">
            <div className="w-full h-full flex flex-wrap justify-start mobile:w-fit mobile:flex-nowrap mobile:pb-[5vw] tablet:gap-y-[7vw] ">
              {boardMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  transition-transform hover:scale-[1.02] tablet:w-[43vw] w-full px-[5vw] py-[2vw] ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className="flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%]"
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[2vw] w-[30%]"
                    >
                      {item.des}
                    </p>

                    {/* Feature List - animated height */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndex === index ? "h-[20vw]" : "h-[10vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw]  ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>

                    {/* Toggle Button */}
                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative "
                      onClick={() =>
                        setOpenedIndex(openedIndex === index ? null : index)
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndex === index ? "Read less -" : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-[5vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[5vw] font-display  mobile:text-[8.2vw] tablet:text-[5vw] tablet:mb-0 pl-[5vw]"
          >
            {t("teamSub1")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:px-0 mobile:w-screen mobile:h-full ">
            <div className="w-full h-full flex flex-wrap justify-start mobile:w-fit mobile:flex-nowrap mobile:pb-[5vw] tablet:gap-y-[7vw] ">
              {adviserMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  transition-transform hover:scale-[1.02] tablet:w-[43vw] w-full px-[5vw] py-[2vw] ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className="flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%]"
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[2vw] w-[30%]"
                    >
                      {item.des}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndexadviser === index ? "h-[25vw]" : "h-[10vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw] ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>

                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                      onClick={() =>
                        setOpenedIndexadviser(
                          openedIndexadviser === index ? null : index
                        )
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndexadviser === index
                          ? "Read less -"
                          : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-[5vw] mobile:space-y-[5vw]">
          <h2
            data-title-anim
            className="text-[5vw] font-display  mb-[2vw] mobile:text-[8.2vw] tablet:text-[5vw] tablet:mb-0 pl-[5vw]"
          >
            {t("teamSub2")}
          </h2>
          <div className="mobile:overflow-x-scroll mobile:px-0 mobile:w-screen mobile:h-full ">
            <div className="w-full h-fit flex flex-wrap justify-start mobile:w-fit mobile:flex-nowrap mobile:pb-[5vw] tablet:gap-y-[7vw] ">
              {investmentMembers.map((item, index) => (
                <div
                  className={` h-full flex gap-[5vw] fadeUp mobile:w-[70vw]  transition-transform hover:scale-[1.02] tablet:w-[43vw] w-full px-[5vw] py-[2vw] ${
                    index % 2 == 0 ? "bg-[#BCBCBC]" : ""
                  }`}
                  key={index}
                >
                  <div className="h-[28vw] w-[22vw] rounded-[1.2vw] overflow-hidden group transition-all duration-500 ease">
                    <Image
                      src={item.img}
                      height={626}
                      width={535}
                      alt="team"
                      className="w-full h-full object-cover transition-all duration-500 ease group-hover:scale-[1.1]"
                    />
                  </div>
                  <div
                    key={index}
                    className={`flex flex-col gap-[0.5vw] py-[2vw] mobile:space-y-[2vw] w-[70%] transition-all duration-500 ease-in-out`}
                  >
                    <p
                      data-para-anim
                      className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]"
                    >
                      {item.name}
                    </p>

                    <p
                      data-para-anim
                      className="mobile:text-[4.6vw] tablet:text-[2vw] w-[30%]"
                    >
                      {item.des}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                        openedIndexinvestment === index
                          ? "h-[25vw]"
                          : "h-[10vw]"
                      }`}
                    >
                      {item.features.map((feature, i) => (
                        <p
                          key={i}
                          className={`text-[1.3vw] space-y-[1vw] ${
                            i === 0 ? "mt-[2vw]" : ""
                          }`}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>

                    <p
                      className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                      onClick={() =>
                        setOpenedIndexinvestment(
                          openedIndexinvestment === index ? null : index
                        )
                      }
                    >
                      <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                        {openedIndexinvestment === index
                          ? "Read less -"
                          : "Read more +"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-[5vw] mobile:space-y-[12vw]">
          <h2
            data-title-anim
            className="text-[5vw] font-display mb-[5vw] mobile:text-[10vw] tablet:text-[5vw] tablet:mt-[5vw] tablet:mb-0"
          >
            {t("teamSub3")}
          </h2>
          <div className=" mobile:px-0 mobile:w-screen mobile:h-full mobile:pb-[5vw]">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[2vw] mobile:w-fit mobile:flex-nowrap mobile:flex-col">
              {shariahMembers.map((item, index) => (
                <>
                  <div
                    className="w-full h-full flex justify-between gap-[1vw] fadeUp mobile:flex-col tablet:w-[43vw] mobile:w-full"
                    key={index}
                  >
                    <div className="space-y-[0.5vw] w-[30%] mobile:w-full">
                      <p
                        data-para-anim
                        className="text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]"
                      >
                        {item.name}
                      </p>
                      <p
                        data-para-anim
                        className="h-[5vw] mobile:text-[4vw] mobile:h-[20vw] tablet:text-[2vw]"
                      >
                        {item.des}
                      </p>
                    </div>
                    <div key={index} className="w-[55%] mobile:w-[90%]">
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden space-y-[1vw] ${
                          openedIndex === index ? "h-[35vw]" : "h-[10vw]"
                        }`}
                      >
                        {item.features.map((feature, i) => (
                          <p key={i} className="text-[1.3vw] mobile:text-[4.6vw]">
                            {feature}
                          </p>
                        ))}
                      </div>

                      {openedIndex !== index ? (
                        <p
                          className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                          onClick={() => setOpenedIndex(index)}
                        >
                          <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                            Read more +
                          </span>
                        </p>
                      ) : (
                        <p
                          className="text-[1.3vw] cursor-pointer mt-[2vw] relative"
                          onClick={() => setOpenedIndex(null)}
                        >
                          <span className="after:absolute relative after:left-0 after:bottom-[-10%] after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                            Read less -
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-black my-[1.5vw] lineDraw"></div>
                </>
              ))}
            </div>
          </div>
          <div
            className="text-[1.9vw] mt-[5vw] space-y-[2vw] fadeUp mobile:space-y-[4vw] mobile:text-[4.6vw] mobile:w-[90%] tablet:mt-[7vw]"
            dangerouslySetInnerHTML={{ __html: t("shariahSub") }}
          />
        </div>
      </section>
    </>
  );
};

export default Team;
