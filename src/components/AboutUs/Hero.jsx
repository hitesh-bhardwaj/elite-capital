import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/about/hero-bg.png"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const Hero = () => {
    const { t } = useTranslation('about');
    const scrollToNext = () => {
        const nextSection = document.getElementById("about");
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
                <div className="relative z-10 px-[5vw] flex items-center justify-start h-full tablet:h-full">
                    <div className="py-[10%] text-white w-full mobile:w-full">
                        <h1 data-title-anim className="heading-1 font-display leading-1.15  mb-[3vw] mobile:text-[12.5vw]">{t('hero')}</h1>
                        {/* <LinkButton href={"/about"} text={t('cta')} className="fadeUp mobile:mt-[10vw]" /> */}
                    </div>
                </div>
                <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full bg-white absolute bottom-10 right-20 z-[13] cursor-pointer transition hover:scale-110"     onClick={scrollToNext}>
                     <Image src={"/icons/left-arrow.svg"} alt="" width={20} height={20} className="invert -rotate-90"/>
                                </div>
            </section>
        </>
    )
}   

export default Hero;