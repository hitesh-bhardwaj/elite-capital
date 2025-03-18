import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'next-i18next';
import LinkButton from '../ui/LinkButton';

const Portfolio = () => {
    const { t } = useTranslation('invest');
    const portfolios= t('portfolios', { returnObjects: true });

    return (
        <section className='w-screen h-full bg-[#F2F2E9] p-[4vw] py-[7vw]'>
            <div className='space-y-[2vw]'>
                <h2 data-title-anim
                    className=" text-[5vw] w-[80%]  font-display leading-[1.2]"
                    dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
                ></h2>
                <p data-para-anim className=" text-[1.87vw]">{t('portfolioSub')}</p>
                <p data-para-anim className="pt-[4vw] w-[95%]">{t('portfolioText')}</p>

            </div> 

            <div className='space-y-[3vw] pt-[3vw]'>
                {portfolios.map((item, index) => (
                    <div key={index} className='w-full flex items-center justify-between  '>
                        <div className='w-1/2 space-y-[2vw] text-black1 font-body px-[3vw]'>
                        <div>
                            <p data-para-anim className='text-[2.5vw] font-display font-medium'>{item.title}</p>
                            <p data-para-anim>{item.location}</p>
                            </div>
                            <div data-para-anim dangerouslySetInnerHTML={{__html:item.address}}/>
                            <LinkButton href={item.link} text={item.cta} className="mt-[5vw] fadeUp" />
                        </div>
                        <div className='w-1/2 h-full'>
                            <Image src={item.img} alt="about image" className='fadeUp'
                                loading="lazy" width={1110} height={986} />

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Portfolio