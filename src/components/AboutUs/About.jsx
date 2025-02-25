import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/about/about.png"
import Image from "next/image";

const About = () => {
    const { t } = useTranslation('about');

    return (
        <>
            <section className="relative min-h-screen bg-[#F2F2E9] overflow-hidden">
                <div className="relative z-10  flex  items-center justify-between h-full">
                    <div className="w-1/2 flex items-start justify-between">
                        <Image 
                            className="w-[95%]"
                            src={aboutImage} 
                            alt="about image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                    <div className="text-black1 w-[50%]  px-[3vw] py-[3vw]">
                        <h2 className="text-[5vw] font-display leading-1.15  mb-[6vw]">{t('aboutHead')}</h2>
                        <p className="mb-[3vw] w-[98%] text-[1.8vw]">{t('aboutSub')}</p>
                        <p className="mb-[3vw] w-[98%] text-[1.8vw]">{t('aboutPara')}</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;