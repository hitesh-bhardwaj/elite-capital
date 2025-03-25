import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/about/hero-bg.png"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const Hero = () => {
    const { t } = useTranslation('about');

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
                    <div className="py-[10%] text-white w-[90%] mobile:w-full">
                        <h1 data-title-anim className="text-[5vw] font-display leading-1.15  mb-[3vw] mobile:text-[12.5vw]">{t('hero')}</h1>
                        <LinkButton href={"/about"} text={t('cta')} className="fadeUp mobile:mt-[10vw]" />
                    </div>
                </div>
            </section>
        </>
    )
}   

export default Hero;