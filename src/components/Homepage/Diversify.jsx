import { useTranslation } from "next-i18next";
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/diversify-image.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Diversify = () => {
    const { t } = useTranslation('home');
    const advantage = t('diversify', { returnObjects: true });

    return (
        <section className="bg-[#F2F2E9] overflow-hidden p-[6vw] ">
             <h3 data-title-anim className="text-[2.9vw] tracking-tight  font-display mb-[4vw] leading-[1]">{t('diversifyHead')}</h3>
            <div className="flex items-center justify-between">   
            <div className="w-[35%] overflow-hidden advantage-block">
                    <Image
                        className="object-cover w-full h-full "
                        src={image}
                        alt="advantage image"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="text-black1 w-3/5 pl-[4vw] pr-[3vw]">
                     <div className="space-y-[2vw] mb-[3vw]"   dangerouslySetInnerHTML={{__html:t('diversify')}}/>
                </div>
               
            </div>
        </section>
    )
}

export default Diversify;