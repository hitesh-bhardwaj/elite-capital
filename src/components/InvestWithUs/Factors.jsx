import { useTranslation } from "next-i18next";
import factorImage from "../../../public/assets/images/invest/factors.png"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


const Factors = () => {
    const { t } = useTranslation('invest');
    useEffect(()=>{
        const ctx = gsap.context(()=>{
           gsap.from(".factor-image",{
            scale:1.3,
            // yPercent:-10,
            ease:"none",
            scrollTrigger:{
                trigger:"#factors",
                start:"top bottom",
                end:"bottom top",
                scrub:true,
                // markers:true

            }
           })

        })
        return()=>ctx.revert()
    },[])
  
    return (
        <>
            <section className="relative h-full bg-[#F2F2E9] overflow-hidden" id="factors">
                <div className="relative z-10  flex  items-center justify-between h-full">
                <div className="w-1/2 flex items-start justify-between overflow-hidden">
                        <Image 
                            className="factor-image"
                            src={factorImage} 
                            alt="factor image" 
                            placeholder="blur" 
                            loading="lazy" 
                        />
                    </div>
                    <div className=" mb-[3vw] text-black1 w-1/2  px-[5vw] py-[3vw]">
                      <div data-para-anim className="space-y-[2vw] " dangerouslySetInnerHTML={{__html: t('factorsSub')}}/>
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Factors;