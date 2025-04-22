import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import LinkButton from '../ui/LinkButton';
const Portfolio = () => {
  const { t } = useTranslation('invest');
  const allPortfolios = t('portfolios', { returnObjects: true });
  
  return (
    <section className='w-screen h-full bg-white p-[4vw] py-[7vw] space-y-[3vw] dark'>
      <div className='space-y-[2vw] mobile:space-y-[4vw] tablet:space-y-[3vw]'>
        <h2 
          data-title-anim
          className="text-[4.5vw] mobile:text-[10.8vw] font-display leading-[1.2] w-[80%] tablet:text-[7vw] tablet:w-full"
          dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
        ></h2>
        <p data-para-anim className="content ">{t('portfolioSub')}</p>
      </div> 

      <div className='w-full gap-y-[5vw] flex tablet:justify-between  flex-wrap gap-[1.5vw] pt-[3vw] mobile:space-y-[13vw] tablet:pt-[7vw] mobile:flex-col'>
         {allPortfolios.map((item, index) => (
            <div key={index} className='w-[32%] flex flex-col mobile:w-full items-center gap-[2vw] mobile:flex-col  tablet:w-[44vw]'>
              <div className='mobile:w-full group fadeup transition-all duration-500 ease overflow-hidden'>
                <Image 
                  src={item.img} 
                  alt={`${item.title} image`} 
                  className=' object-cover h-[25vw] group-hover:scale-[1.1] transition-all duration-500 ease mobile:h-[65vw] tablet:h-[30vw]'
                  loading="lazy" 
                  width={555} 
                  height={397} 
                />
              </div>
              <div className='w-full space-y-[2vw] text-black1 font-body  mobile:px-1 l'>
                <div className='mobile:space-y-[3vw] mobile:pt-[3vw]'>
                  <h3 data-para-anim className='heading-2 font-medium tablet:font-normal tablet:text-[5.5vw]'>{item.title}</h3>
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