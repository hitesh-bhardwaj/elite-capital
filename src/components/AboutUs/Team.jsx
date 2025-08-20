import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import BoardofDirectors from "./BoardofDirectors";
import ShariahBoard from "./ShariahBoard";
import BoardofDirectorsCopy from "./BoardofDirectors-copy";

const Team = () => {
  const { t } = useTranslation("about");
  const members1 = t("teamMembers1", { returnObjects: true });
  const members2 = t("teamMembers2", { returnObjects: true });


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
              {members1.map((item, index) => (
                <div
                  className={` h-[30vw] relative flex flex-col gap-[1vw] fadeUp border border-black/10 rounded-[0.5vw] group mobile:w-[85vw] mobile:h-[100vw] transition-transform hover:scale-[1.02] tablet:w-[48vw] rtl:tablet:rounded-[2vw] overflow-hidden mobile:rounded-[3vw] tablet:h-[60vw] mobile:mt-[-5vw] w-[43vw]
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
                  <div className="mobile:space-y-[2vw] flex flex-col mobile:gap-[4vw] absolute bottom-0 h-[30vw] mobile:h-[100vw] group-hover:translate-y-[0%] translate-y-[70%] transition-all duration-500 ease-in-out  rounded-tl-[0.5vw] rounded-tr-[0.5vw] w-full px-[1vw] pt-[1vw] bg-[#F2F2E9] left-0 mobile:pt-[2vw] mobile:translate-y-[75%] mobile:rounded-tl-[2.5vw] mobile:rounded-tr-[2.5vw] mobile:px-[5vw] tablet:h-[60vw] tablet:translate-y-[75%]">
                    <div className="h-fit space-y-2 mobile:space-y-[1vw]">
                      <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[7.8vw] tablet:text-[4.5vw]">
                        {item.name}
                      </p>
                      <p className="h-[5vw]  mobile:text-[3.8vw] tablet:text-[2.5vw] text-[1.4vw] mobile:h-fit ">
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
                          <p className="text-[1.2vw] w-[80%]  mobile:text-[3.5vw] tablet:text-[2vw] mobile:leading-[1.6]">
                            {list}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-fit mt-[1vw] pl-[28vw] pb-[2vw] cursor-pointer mobile:pl-[50vw] mobile:pb-[5vw]"  onClick={() => {
  let el;

  if (window.innerWidth <= 1024) {
    el = document.getElementById("board-directors");
  } else {
    el = document.getElementById(`${item.name.split(" ")[0]}`);
  }

  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.07; 
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}

>
                    <p className="text-[1.2vw]  mobile:text-[3.5vw] tablet:text-[2vw] after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(100%+1rem)]">
                      Learn More +
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mobile:overflow-x-scroll pt-[3vw] mobile:w-screen mobile:h-full mobile:pr-[10vw] mobile:ml-[-5vw] mobile:pl-[5vw] tablet:overflow-x-scroll rtl:mobile:mr-[-5vw] rtl:mobile:pr-[5vw]">
            <div className="w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:flex-nowrap mobile:w-fit mobile:h-[110vw] tablet:flex-nowrap tablet:w-fit tablet:h-[70vw]">
            {members2.map((item, index) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <div
      key={index}
      className={`h-[35vw] relative flex flex-col gap-[1vw] fadeUp border border-black/10 rounded-[0.5vw] group 
        mobile:w-[85vw] mobile:h-[100vw] transition-transform hover:scale-[1.02] 
        tablet:w-[48vw] rtl:tablet:rounded-[2vw] overflow-hidden 
        mobile:rounded-[3vw] tablet:h-[60vw] mobile:mt-[-5vw] w-[28vw]`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="h-full w-full bg-white group overflow-hidden transition-all duration-500 ease mobile:h-[100vw] ">
        <Image
          src={item.img}
          height={626}
          width={535}
          alt="team"
          className="object-contain w-full h-full group-hover:scale-[0.95] transition-all duration-500 ease"
        />
      </div>

      {/* Info Panel */}
      <div data-lenis-prevent
        className={`
          mobile:space-y-[2vw] flex flex-col mobile:gap-[4vw] absolute bottom-0
          transition-all duration-500 ease-in-out 
          rounded-tl-[0.5vw] rounded-tr-[0.5vw] w-full px-[1vw] pt-[1vw] bg-[#F2F2E9] left-0 
          mobile:pt-[2vw] mobile:rounded-tl-[2.5vw] mobile:rounded-tr-[2.5vw] mobile:px-[5vw]
          tablet:h-[60vw] 
          ${isClicked 
            ? "translate-y-[0%] h-[100%] overflow-y-scroll" 
            : "translate-y-[70%] group-hover:translate-y-[0%] h-[35vw] mobile:h-[100vw] tablet:translate-y-[75%] overflow-hidden"}
        `}
      >
        {/* Name + Designation */}
        <div className="h-fit space-y-2 mobile:space-y-[1vw]">
          <p className="text-[2.5vw] leading-[1.2] font-display mobile:text-[7.8vw] tablet:text-[4.5vw]">
            {item.name}
          </p>
          <p className="h-[5vw] mobile:text-[3.8vw] tablet:text-[2.5vw] text-[1.4vw] mobile:h-fit">
            {item.des}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-[1vw] mt-[1vw] mobile:gap-[3vw] tablet:gap-[3vw] tablet:mt-[5vw] mobile:pt-[5vw]">
          {item.features.map((list, i) => (
            <div key={i} className="flex gap-[2vw] w-full pl-[1vw] ">
              <span
                className="w-[3vw] h-[1vw] bg-[#CE8000] mt-[0.5vw] block mobile:w-[8vw] mobile:h-[3vw] tablet:h-[2.5vw] tablet:w-[6vw] mobile:mt-[2vw] tablet:mt-[2vw] rtl:scale-x-[-1]"
                style={{
                  clipPath: "polygon(0 0, 100% 0%, 70% 100%, 0% 100%)",
                }}
              ></span>
              <p className="text-[1.2vw] w-[80%] mobile:text-[3.5vw] tablet:text-[2vw] mobile:leading-[1.6]">
                {list}
              </p>
            </div>
          ))}
        </div>

        {isClicked && (
          
         <div className="w-full py-[3vw] px-[1vw] tablet:px-[1.5vw]">
          {item.para.map((item,index)=>(
             <p key={index} className="text-[1.2vw] mobile:text-[3.5vw] tablet:text-[2vw] mobile:leading-[1.6]">
                {item}
              </p>
          ))}
          </div>
        )}

        {/* Learn More Button */}
        <div
          className="w-fit mt-[1vw] pl-[18vw] pb-[2vw] cursor-pointer tablet:pl-[30vw]  mobile:pl-[50vw] mobile:pb-[5vw]"
          onClick={() => setIsClicked(!isClicked)}
        >
          <p className="text-[1.2vw] tablet:text-[2vw] mobile:text-[3.5vw] after:absolute relative after:left-0 after:bottom-0 after:w-[calc(100%)] after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out rtl:after:w-[calc(100%+1rem)]">
            {isClicked ? "Show Less -" : "Learn More +"}
          </p>
        </div>
      </div>
    </div>
  );
})}

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
