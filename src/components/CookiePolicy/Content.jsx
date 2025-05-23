import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next';
import yellowRectangleMask from "../../../public/icons/yellow-rectangle-mask.svg"
import Image from 'next/image';
import gsap from "gsap";

const Content = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const yellowCovers = document.querySelectorAll(".yellow-block-cover")
            yellowCovers.forEach((yellowCover) => {
                gsap.to(yellowCover, {
                    scaleX: 0,
                    duration: 0.7,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: yellowCover,
                        start: "top 70%"
                    }
                })

            })

        });
        return () => ctx.revert();
    });
    const { t } = useTranslation('cookie');
    const content = t('content', { returnObjects: true });

    return (
        <section className='w-screen h-full py-[8%] px-[5vw] overflow-hidden dark bg-white' id='cookie-content'>
            <div className=''>
                <div className='content mobile:py-[7vw] ' >{t('heroSub')}</div>
                <span className='bg-black1 w-full h-[1px] block mb-[5vw] mt-[8vw] lineDraw mobile:my-[10vw]  tablet:my-[5vw]' />
                <div className='space-y-[4vw] w-full'>
                    {content.map((item, index) => (
                        <>
                            <div key={index} className=' flex items-start w-full gap-[1vw] '>
                                <div className='h-full w-[10%] relative mt-[0.5vw mobile:w-[20%]'>
                                    <span className="bg-white h-full w-full absolute top-0 origin-right yellow-block-cover"></span>
                                    <Image src={yellowRectangleMask} alt='yellow-rectamngle-mask' width={100} height={36} className=' mobile:h-[8vw] mobile:w-[15vw] tablet:w-[20vw] tablet:h-[5vw] rtl:scale-x-[-1]' />
                                </div>
                                <div className='w-full mobile:w-[80%]'>
                                    <div className='heading-2 pb-[1vw] mobile:pb-[5vw] tablet:pb-[5vw] '>{item.title}</div>
                                    {item.para && item.para.map((text, index) => (
                                        <div key={index} className='content py-[1vw] mobile:space-y-[5vw] mobile:ml-[-18vw] tablet:space-y-[4vw] cookie rtl:mobile:ml-0 rtl:mobile:mr-[-18vw]'dangerouslySetInnerHTML={{__html:text}} />
                                    ))}
                                    {item.list1 && item.list1.map((items, index) => (
                                        <div key={index} className='space-y-[1.5vw] pl-[5vw] pt-[3vw]'>
                                            <div className='text-[2.5vw] mobile:text-[5vw] font-display mobile:space-y-[5vw] mobile:ml-[-18vw] tablet:space-y-[4vw] cookie rtl:mobile:ml-0 rtl:mobile:mr-[-7vw]'>
                                                {items.title}
                                            </div>
                                            <div className='content mobile:space-y-[5vw] mobile:ml-[-18vw] tablet:space-y-[4vw] rtl:mobile:mr-[-7vw] rtl:mobile:ml-0 cookie'>
                                                {items.detail}
                                            </div>
                                        </div>
                                    ))}
                                    <ul className='list-disc pl-[5vw] '>
                                        {item.list2 && item.list2.map((items, index) => (
                                            <li key={index} className='pt-[1vw]'>
                                                <div className='content  mobile:space-y-[5vw] mobile:ml-[-18vw] tablet:space-y-[4vw] rtl:mobile:mr-[-7vw] rtl:mobile:ml-0 cookie' dangerouslySetInnerHTML={{__html:items.detail}}/>
                                                    
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <span className='bg-black1 w-full h-[1px] block mt-[1vw] lineDraw mobile:!my-[15vw]  tablet:my-[5vw]' />
                        </>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Content