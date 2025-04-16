import { useTranslation } from "next-i18next";
import aboutImage from "../../../public/assets/images/homepage/about.png"
import yellowRectangle from "../../../public/assets/images/homepage/yellow-rectangle.png"
import Image from "next/image";
import LineButton from "../ui/LineButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageComponent from "../Common/ImageComponent";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const { t } = useTranslation('home');
   


    return (
        <>
            <section className="relative  overflow-hidden h-[50vw] py-[5vw] mobile:min-h-fit mobile:pt-[10vw] tablet:min-h-fit tablet:pt-[10vw]" id="about" >
                <div className="relative z-10 px-[5vw] flex items-start justify-between h-full mobile:flex-col mobile:justify-center mobile:h-full tablet:h-full">
                    <div className="text-black1 w-[65%] mobile:w-full tablet:w-full tablet:pb-[10vw]">
                        <h2 data-title-anim className="heading-1  mb-[3vw]">{t('aboutHead')}</h2>
                        <p data-para-anim className="content mb-[3vw]">{t('aboutSub')}</p>
                        <LineButton href={"/about-us"} text={t('cta')} className="fadeUp" />
                    </div>
                    <div className="flex flex-col items-end justify-end w-1/2 gap-[3vw] h-full">
                        <ImageComponent imgsrc={aboutImage} width={"w-full"}/>
                        <div className="w-full flex items-center justify-start">
                            <Image src={yellowRectangle} height={32} width={67} alt="yelllow-rectangle" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;