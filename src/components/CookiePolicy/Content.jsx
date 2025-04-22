import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next';
import yellowRectangleMask from "../../../public/icons/yellow-rectangle-mask.svg"
import Image from 'next/image';
import gsap from "gsap";

const Content = () => { 
    
    useEffect(() => {
    const ctx = gsap.context(() => {
        const yellowCovers = document.querySelectorAll(".yellow-block-cover")
        yellowCovers.forEach((yellowCover)=>{

            gsap.to(yellowCover,{
                scaleX:0,
                duration:0.7,
                ease:"power3.inOut",
                scrollTrigger:{
                    trigger:yellowCover,
                    start:"top 70%"
                }
            })

        })

    });
    return () => ctx.revert();
  });
        const { t } = useTranslation('cookie');
  const content = t('content', { returnObjects: true });

    
  return (
   <section className='w-screen h-full py-[8%] px-[5vw] overflow-hidden dark' id='cookie-content'>
    <div className=''>
        <div className='content mobile:py-[7vw] mobile:text-justify' dangerouslySetInnerHTML={{__html: t('heroSub') }}/>
        <span className='bg-black1 w-full h-[1px] block my-[3vw] lineDraw mobile:my-[10vw]' />
        <div className='space-y-[4vw] w-full'>
            {content.map((item,index)=>(
                <>
                <div key={index} className=' flex items-start w-full gap-[1vw] '>
                    <div className='h-full w-[10%] relative'>
                    <span className="bg-white h-full w-full absolute top-0 origin-right yellow-block-cover"></span>
                        <Image src={yellowRectangleMask} alt='yellow-rectamngle-mask' width={100} height={36}/>
                    </div>
                    <div className='w-full mobile:w-[80%]'>
               <div className='heading-2 pb-[1vw] mobile:pb-[5vw]' dangerouslySetInnerHTML={{__html: item.title}}/>
               <div className='content space-y-[1.5vw] mobile:space-y-[5vw] mobile:ml-[-18vw]' dangerouslySetInnerHTML={{__html: item.para}}/>
               </div>
                </div>
                <span className='bg-black1 w-full h-[1px] block mt-[1vw] lineDraw mobile:!my-[15vw]' />
                </>
            ))}
        </div>
    </div>

   </section>
  )
}

export default Content