import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/homepage/about.png"
import Image from "next/image";
import LineButton from "../ui/LineButton";

const About = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <section className="relative min-h-screen bg-[#B1C3B7] overflow-hidden">
                <div className="relative z-10 px-[5vw] flex items-center justify-between h-screen">
                    <div className="text-black1 w-[55%]">
                        <h2 className="text-[5vw] font-display leading-1.15 font-bold mb-[3vw]">{t('aboutHead')}</h2>
                        <p className="mb-[3vw]">{t('aboutSub')}</p>
                        <LineButton href={"/about"} text={t('cta')} />
                    </div>
                    <div className="w-1/2 flex h-full items-end justify-end">
                        <Image 
                            className="w-[80%]"
                            src={aboutImage} 
                            alt="about image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;