import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/homepage/hero-bg.jpg"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";
import { useRouter } from "next/router";

const Hero = () => {
    const { t } = useTranslation('common');

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
                    <div className="py-[10%] text-white w-[60%]">
                        <h1 className="text-[5vw] font-display leading-1.15 font-bold mb-[3vw]">{t('hero')}</h1>
                        <p className="text-[1.7vw] mb-[3vw]">{t('heroSub')}</p>
                        <LinkButton href={"/about"} text={t('cta')} />
                    </div>
                </div>
            </section>
        </>
    )
}   

export default Hero;