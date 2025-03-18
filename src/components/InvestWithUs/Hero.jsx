import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/invest/invest-hero.png"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const Hero = () => {
    const { t } = useTranslation('invest');

    return (
        <>
            <section className="relative min-h-screen">
                <Image
                    src={bg}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    loading="lazy"
                />
                <div className="relative z-10 px-[5vw] flex items-center justify-start h-screen">
                    <div className="py-[10%] text-white w-[95%]">
                        <h1 data-title-anim className="text-[5vw] font-display leading-1.15  mb-[1vw]">{t('hero')}</h1>
                        <LinkButton href={"/about"} text={t('cta')} className="mt-[3vw] fadeUp" />
                    </div>
                </div>
            </section>
        </>
    )
}   

export default Hero;