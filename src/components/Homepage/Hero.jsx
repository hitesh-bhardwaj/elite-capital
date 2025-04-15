import { useTranslation } from "next-i18next";
import bg from "../../../public/assets/images/homepage/hero-bg.jpg"
import Image from "next/image";
import LinkButton from "../ui/LinkButton";


const Hero = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <section className="relative h-screen tablet:h-[80vh] overflow-hidden">
                <Image
                    src={bg}
                    alt="Hero Background"
                    fill
                    className="object-cover w-full h-full"
                    placeholder="blur"
                />
                <div className="relative z-10 px-[5vw] flex items-center justify-start h-full tablet:h-full">
                    <div className="py-[10%] text-white w-[92%] mobile:space-y-[10vw]">
                        <h1 data-title-anim className="heading-1 mb-[3vw]">{t('hero')}</h1>
                        <p data-para-anim className="content mb-[3vw] w-[80%] mobile:w-full">{t('heroSub')}</p>
                    </div>
                </div>
                <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full bg-white absolute bottom-10 right-20">
                    <Image src={"/icons/left-arrow.svg"} alt="" width={20} height={20} className="invert -rotate-90"/>
                </div>
            </section>
        </>
    )
}   

export default Hero;