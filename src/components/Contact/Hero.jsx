import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/contact/hero-bg.png";
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation("contact");

  const scrollToNext = () => {
    const nextSection = document.getElementById("location");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      console.log("scrollll")
    }
  };

  return (
    <>
      <section className="relative h-screen tablet:h-[80vh]">
        <Image
          src={bg}
          alt="Hero Background"
          fill
          className="object-cover"
          placeholder="blur"
          loading="lazy"
        />
        <div className="relative z-10 px-[5vw] flex items-center justify-start h-full mobile:items-start mobile:pt-[30%]">
          <div className="py-[10%] text-white w-[45%] mobile:w-full">
            <h1 data-title-anim className="heading-1  mb-[1vw]">
              {t("hero")}
            </h1>
          </div>
        </div>
        <div
          onClick={scrollToNext}
          className="w-[3vw] h-[3vw] flex justify-center items-center  z-[20] rounded-full bg-white absolute bottom-10 right-20 down-arrow cursor-pointer transition hover:scale-110"
        >
          <Image
            src={"/icons/left-arrow.svg"}
            alt="Scroll down"
            width={20}
            height={20}
            className="invert -rotate-90"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
