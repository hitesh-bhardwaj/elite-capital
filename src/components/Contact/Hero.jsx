import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/contact/hero-bg.png"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const Hero = () => {
    const { t } = useTranslation('contact');

    return (
        <> 
            <section className="relative h-screen tablet:h-[80vh]">
                <Image
                    src={bg}
                    alt="Hero Background"
                    fill
                    className="object-cover "
                    placeholder="blur"
                    loading="lazy"
                />
                <span className="h-full w-full bg-black/30 z-[10] absolute top-0 left-0"/>
                <div className="relative z-10 px-[5vw] flex items-center justify-start h-full mobile:items-start mobile:pt-[30%]">
                    <div className="py-[10%] text-white w-[45%] mobile:w-full">
                        <h1 data-title-anim className="heading-1  mb-[1vw]">{t('hero')}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}   

export default Hero;