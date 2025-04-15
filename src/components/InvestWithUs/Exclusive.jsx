import { useTranslation } from "next-i18next";
import factorImage from "../../../public/assets/images/invest/exclusive.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


const Exclusive = () => {
    const { t } = useTranslation('invest');
    return (
        <>
            <section className="relative h-full bg-[#F2F2E9] overflow-hidden" id="factors">
                <div className="relative z-10  flex  items-center justify-between h-full mobile:block mobile:space-y-[5vw] tablet:items-start">
                <div className="w-1/2 flex items-start justify-between overflow-hidden mobile:w-full">
                        <Image 
                            className="factor-image tablet:h-[60vw]"
                            src={factorImage} 
                            alt="factor image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                    <div className=" mb-[3vw] text-black1 w-1/2  px-[4vw] py-[3vw] mobile:text-[4.6vw] mobile:w-full tablet:mb-0">
                    <p data-para-anim className="content">{t('exclusiveSub')}</p>
                     
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Exclusive;