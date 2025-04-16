import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'next-i18next';
import real1 from "../../../public/assets/images/homepage/real-1.png"
import real2 from "../../../public/assets/images/homepage/real-2.png"
import real3 from "../../../public/assets/images/homepage/real-3.png"
import ImageComponent from '../Common/ImageComponent';


const Assets = () => {
    const { t } = useTranslation("home");
    return (
        <section className='w-screen h-screen'>
            <div className='flex  h-full w-full items-center justify-between px-[5%]'>
                <div className='w-1/2 space-y-[4vw]'>
                <div className='w-full flex items-end justify-end translate-x-[30%]'>
                <ImageComponent imgsrc={real1} width={"w-[65%]"}/>
                </div>
                <div className='w-full flex items-center justify-center translate-x-[15%]'>
                <ImageComponent imgsrc={real2} width={"w-[65%]"}/>
                </div>
                <div className='w-full flex items-center justify-start '>
                <ImageComponent imgsrc={real3} width={"w-[65%]"}/>
                </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <h3 data-title-anim className='text-black1 heading-1 !font-body w-[90%]'>{t('realHead')}
                        <br/>
                        <span className='!font-semibold'>{t('realHeadSub')}</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Assets