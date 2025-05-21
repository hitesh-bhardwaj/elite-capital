import React from 'react'
import { useTranslation } from 'next-i18next';
import real1 from "../../../public/assets/images/homepage/real-1.png"
import real2 from "../../../public/assets/images/homepage/real-2.png"
import real3 from "../../../public/assets/images/homepage/real-3.png"
import ImageComponent from '../Common/ImageComponent';


const Assets = () => {
    const { t } = useTranslation("home");
    
    return (
        <section className='w-screen bg-white h-screen mobile:h-full mobile:py-[15%] overflow-hidden dark tablet:h-full tablet:py-[10%]'>
            <div className='flex  h-full w-full items-center justify-between px-[5%] mobile:flex-col-reverse mobile:gap-[15vw] tablet:flex-col-reverse tablet:gap-[10vw] rtl:flex-row-reverse rtl:mobile:flex-col-reverse rtl:tablet:flex-col-reverse rtl:tablet:gap-[10vw]'>
                <div className='w-[50%] space-y-[4vw] mobile:w-full mobile:space-y-[7vw]'>
                    <div className='w-full flex items-end justify-end translate-x-[30%] mobile:translate-x-[40%] tablet:translate-x-[40%]  rtl:mobile:translate-x-[15%] rtl:translate-x-[45%] imac:translate-x-[10%] rtl:imac:translate-x-[25%]'>
                        <ImageComponent imgsrc={real1} width={"w-[65%] mobile:w-[55%] tablet:w-[75%] rtl:translate-x-[-55%] imac:w-[80%] rtl:imac:translate-x-[10%]"} />
                    </div>
                    <div className='w-full flex items-center justify-center translate-x-[15%] mobile:translate-x-[20%]  rtl:mobile:translate-x-[2%] rtl:translate-x-[15%]  imac:translate-x-[7%] rtl:imac:translate-x-[-10%]'>
                        <ImageComponent imgsrc={real2} width={"w-[65%] mobile:w-[55%] tablet:w-[75%] rtl:translate-x-[-55%] imac:w-[80%] rtl:imac:translate-x-[5%]"} />
                    </div>
                    <div className='w-full flex items-center justify-start tablet:translate-x-[-10%] rtl:mobile:translate-x-[-15%] rtl:translate-x-[-10%] imac:translate-x-[5%] rtl:imac:translate-x-[-30%]'>
                        <ImageComponent imgsrc={real3} width={"w-[65%] mobile:w-[55%] tablet:w-[75%] rtl:translate-x-[-55%] imac:w-[80%] rtl:imac:translate-x-[-30%]"} />
                    </div>
                </div>
                <div className='w-[50%] flex items-center  mobile:w-full tablet:w-[60%] tablet:justify-start rtl:pr-[8vw] rtl:tablet:pr-0 '>
                    <h3 data-title-anim className='text-black1 text-[5.2vw] leading-[1.2]  !font-body w-[80%] mobile:w-full font-light mobile:text-[12vw] tablet:text-[7vw] tablet:w-full'>{t('realHead')}
                        <br />
                        <span className='!font-semibold'>{t('realHeadSub')}</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Assets