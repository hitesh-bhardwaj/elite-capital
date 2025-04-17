import React from 'react'
import { useTranslation } from 'next-i18next';
import yellowRectangleMask from "../../../public/icons/yellow-rectangle-mask.svg"
import Image from 'next/image';

const Content = () => {
        const { t } = useTranslation('privacy');
  const content = t('content', { returnObjects: true });

    
  return (
   <section className='w-screen h-full py-[8%] px-[5vw]' id='privacy-content'>
    <div className=''>
        <div>
        <p className='content'>{t('heroSub')}</p>
        </div>
        <span className='bg-black1 w-full h-[1px] block my-[3vw]' />
        <div className='space-y-[4vw] w-full'>
            {content.map((item,index)=>(
                <>
                <div key={index} className=' flex items-start w-full gap-[1vw]'>
                    <div className='h-full w-[20%]'>
                        <Image src={yellowRectangleMask} alt='yellow-rectamngle-mask' width={130} height={36}/>
                    </div>
                    <div>
               <div className='heading-2 pb-[1vw]' dangerouslySetInnerHTML={{__html: item.title}}/>
               <div className='content space-y-[1.5vw]' dangerouslySetInnerHTML={{__html: item.para}}/>
               </div>
                </div>
                <span className='bg-black1 w-full h-[1px] block mt-[1vw]' />
                </>
            ))}
        </div>
    </div>

   </section>
  )
}

export default Content