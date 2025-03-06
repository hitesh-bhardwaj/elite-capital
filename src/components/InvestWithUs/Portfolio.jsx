import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'next-i18next';
import LinkButton from '../ui/LinkButton';

const Portfolio = () => {
    const { t } = useTranslation('invest');
    const portfolios= t('portfolios', { returnObjects: true });

    return (
        <section className='w-screen h-full bg-[#F2F2E9] p-[5vw]'>
            <div>
                <h2
                    className=" text-[5vw] w-[80%]  font-display leading-[1.2]"
                    dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
                ></h2>
                <p className="mt-[3vw]">{t('portfolioSub')}</p>
            </div> 

            <div className='space-y-[5vw] py-[5vw]'>
                {portfolios.map((item, index) => (
                    <div key={index} className='w-full flex items-center justify-between  '>
                        <div className='w-1/3 space-y-[0.5vw] text-black1 font-body px-[3vw]'>
                            <p className='text-[2.5vw] font-display font-medium'>{item.title}</p>
                            <p>{item.location}</p>
                            <div className='pt-[3vw] w-[85%]' dangerouslySetInnerHTML={{__html:item.address}}/>
                            <LinkButton href={item.link} text={item.cta} className="mt-[5vw]" />
                        </div>
                        <div className='w-1/2 h-full'>
                            <Image src={item.img} alt="about image"
                                loading="lazy" width={1110} height={986} />

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Portfolio