import Image from 'next/image';
import React from 'react';
import { useTranslation } from "next-i18next";


const Team = () => {
    const { t } = useTranslation('about');
    const members = t('teamMembers', { returnObjects: true });
    const boardMembers = t('boardMembers', { returnObjects: true });


    return (
        <>
            <section className='w-screen h-full bg-[#F2F2E9] pb-[10vw]'>
                <div className='px-[5vw] py-[5vw]'>
                    <h2 className='text-[5vw] font-display mb-[5vw]'>{t('team')}</h2>
                    <div className='w-full h-full flex flex-wrap items-center  gap-[2.5vw] '>
                        {members.map((item, index) => (
                            <div className='w-[28vw] h-full py-[1vw]' key={index}>
                                <div className='h-[35vw] w-full relative'>
                                    <Image
                                        src={item.img}
                                        layout='fill'
                                        alt='team'
                                    />
                                </div>
                                <p className=' pt-[1vw] text-[2.5vw] leading-[1.2] font-display'>{item.name}</p>
                                <p className='py-[0.5vw] h-[5vw]'>{item.des}</p>

                            </div>
                        ))}
                    </div>

                </div>
                <div className='p-[5vw]'>
                    <h2 className='text-[3vw] font-display mb-[5vw]'>{t('teamSub')}</h2>
                    <div className='w-full h-full flex flex-wrap items-stretch  gap-[2.5vw] '>
                        {boardMembers.map((item, index) => (
                            <div className='w-[28vw] h-full py-[1vw]' key={index}>
                                <div className='h-[37vw] w-full relative'>
                                    <Image
                                        src={item.img}
                                        layout='fill'
                                        alt='team'
                                    />
                                </div>
                                <p className=' pt-[1vw] text-[2.5vw] leading-[1.2] font-display'>{item.name}</p>
                                <p className='py-[0.5vw] h-[5vw]'>{item.des}</p>
                                
                                <ul className='list-disc py-[0.5vw] px-[1vw]'>
                                {item.features.map((list,index)=>(
                                    <li className='text-[1.2vw] h-[3vw]' key={index}>{list}</li>
                                ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team