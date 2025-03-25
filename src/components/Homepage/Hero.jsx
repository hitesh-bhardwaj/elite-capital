import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/homepage/hero-bg.jpg"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";
import { useRouter } from "next/router";

const Hero = () => {
    const { t } = useTranslation('home');

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
                    <div className="py-[10%] text-white w-[92%] mobile:space-y-[10vw]">
                        <h1 data-title-anim className="heading-1 mb-[3vw]">{t('hero')}</h1>
                        <p data-para-anim className="content mb-[3vw] w-[80%] mobile:w-full">{t('heroSub')}</p>
                        <LinkButton href={"/about-us"} text={t('cta')} className="fadeUp mobile:mt-[10vw] tablet:mt-[5vw]" />
                    </div>
                </div>
            </section>
        </>
    )
}   

export default Hero;