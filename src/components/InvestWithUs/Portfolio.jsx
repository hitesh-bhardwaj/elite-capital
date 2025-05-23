import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

const PortfolioCard = ({ img, title, location, address1, address2 }) => {
  return (
    <>
      <div className="w-[32%] flex flex-col mobile:w-full items-center gap-[1.5vw] mobile:flex-col  tablet:w-[44vw]">
        <div className="mobile:w-full group h-[21vw] w-full fadeup transition-all duration-500 ease overflow-hidden mobile:h-[75vw]">
          <Image
            src={img}
            alt={`image`}
            className=" object-cover h-full w-full group-hover:scale-[1.1] transition-all duration-500 ease  tablet:h-[30vw]"
            loading="lazy"
            width={555}
            height={397}
          />
        </div>
        <div className="w-full  text-black1 font-body  mobile:px-1 mobile:space-y-[1vw] ">
          <div className="mobile:space-y-[1vw] mobile:pt-[3vw]">
            <h3 className="text-[2.5vw] font-display mobile:text-[7vw] font-medium tablet:font-normal tablet:text-[5.5vw]">
              {title}
            </h3>
            <p className="content">{location}</p>
          </div>
          {/* <div className='pt-[2vw]'>
            <div
              className='content '
            >{address1}</div>
          </div> */}
          <div className="content !leading-[1.2] mobile:pb-[5vw]">
            {address2}
          </div>
        </div>
      </div>
    </>
  );
};
const Portfolio = () => {
  const { t } = useTranslation("invest");

  return (
    <section
      className="w-screen h-full bg-white p-[4vw] py-[7vw] space-y-[3vw] dark mobile:py-[15%]"
      id="portfolio"
    >
      <div className="space-y-[2vw] mobile:space-y-[4vw] tablet:space-y-[3vw]">
        <h2
          data-title-anim
          className="text-[4.5vw] mobile:text-[12.5vw] font-display leading-[1.2] w-[80%] tablet:text-[7vw] tablet:w-full"
          dangerouslySetInnerHTML={{ __html: t("portfolioHead") }}
        ></h2>
        <p data-para-anim className="content ">
          {t("portfolioSub")}
        </p>
      </div>

      <div className="w-full gap-y-[5vw] flex tablet:justify-between  flex-wrap gap-[1.5vw] pt-[3vw] mobile:space-y-[5vw] tablet:pt-[7vw] mobile:flex-col">
        <PortfolioCard
          img={t("portfolio1.img")}
          title={t("portfolio1.title")}
          location={t("portfolio1.location")}
          // address2={t("portfolio1.address2")}
        />
        <PortfolioCard
          img={t("portfolio2.img")}
          title={t("portfolio2.title")}
          location={t("portfolio2.location")}
          // address2={t("portfolio2.address2")}
        />
        <PortfolioCard
          img={t("portfolio3.img")}
          title={t("portfolio3.title")}
          location={t("portfolio3.location")}
          // address2={t("portfolio3.address2")}
        />
        <PortfolioCard
          img={t("portfolio4.img")}
          title={t("portfolio4.title")}
          location={t("portfolio4.location")}
          // address2={t("portfolio4.address2")}
        />
        <PortfolioCard
          img={t("portfolio5.img")}
          title={t("portfolio5.title")}
          location={t("portfolio5.location")}
          // address2={t("portfolio5.address2")}
        />
        <PortfolioCard
          img={t("portfolio6.img")}
          title={t("portfolio6.title")}
          location={t("portfolio6.location")}
          // address2={t("portfolio6.address2")}
        />
      </div>
    </section>
  );
};

export default Portfolio;
