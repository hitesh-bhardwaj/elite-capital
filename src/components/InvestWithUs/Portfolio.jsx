import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import LinkButton from '../ui/LinkButton';
const Portfolio = () => {
  const { t } = useTranslation('invest');
  const allPortfolios = t('portfolios', { returnObjects: true });
  
  return (
    <section className='w-screen h-full bg-white p-[4vw] py-[7vw] space-y-[3vw]'>
      <div className='space-y-[2vw] mobile:space-y-[4vw] tablet:space-y-[3vw]'>
        <h2 
          data-title-anim
          className="heading-1 w-[90%]"
          dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
        ></h2>
        <p data-para-anim className="content">{t('portfolioSub')}</p>
      </div> 

      <div className='w-full gap-y-[5vw] flex  flex-wrap gap-[1.5vw] pt-[3vw] mobile:space-y-[13vw] tablet:pt-[7vw] tablet:space-y-[5vw] mobile:flex-col'>
         {allPortfolios.map((item, index) => (
            <div key={index} className='w-[32%] flex flex-col mobile:w-full items-center gap-[2vw] mobile:flex-col'>
              <div className='mobile:w-full group fadeup transition-all duration-500 ease overflow-hidden'>
                <Image 
                  src={item.img} 
                  alt={`${item.title} image`} 
                  className=' object-cover h-[25vw] group-hover:scale-[1.1] transition-all duration-500 ease mobile:h-[65vw]'
                  loading="lazy" 
                  width={555} 
                  height={397} 
                />
              </div>
              <div className='w-full space-y-[2vw] text-black1 font-body  mobile:w-full mobile:px-1'>
                <div className='mobile:space-y-[3vw] mobile:pt-[3vw]'>
                  <h3 data-para-anim className='heading-2 font-medium '>{item.title}</h3>
                  <p data-para-anim className='content'>{item.location}</p>
                </div>
                <div 
                  data-para-anim 
                  dangerouslySetInnerHTML={{__html: item.address}} 
                  className='content mobile:pb-[5vw]'
                />
              </div>
              
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;