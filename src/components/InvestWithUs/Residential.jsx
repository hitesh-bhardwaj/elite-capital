import { useTranslation } from "next-i18next";


const Residential = () => {
    const { t } = useTranslation('invest');
    const features = t('features', { returnObjects: true });
   

    return (
        <section className="bg-[#747977] overflow-hidden py-[5vw] mobile:py-[10vw]">
            <div className="flex items-center">
                <div className="text-white  pl-[4vw] pr-[3.5vw] mobile:space-y-[5vw]">
                    <h2 data-title-anim className="heading-1 mb-[4vw] leading-[1]  mobile:leading-[1.2]">{t('residentialHead')}</h2>
                    <p data-para-anim className="w-[90%] content mobile:text-[4.9vw]">{t('residentialPara')}</p>
                    <h2 data-title-anim className="heading-1 tracking-tight pt-[7vw] pb-[5vw] ">{t('residentialSub')}</h2>
                    <div className="flex justify-between mobile:block mobile:space-y-[8vw] tablet:flex-wrap tablet:gap-y-[5vw]">
                      {features.map((item,index)=>(
                        <div className="flex flex-col gap-[1vw] w-[28%] mobile:w-full tablet:w-[45%] " key={index}>
                          <p data-para-anim className="text-[1.25vw] mb-3 block mobile:text-[4vw] tablet:text-[2vw]">{item.num}.</p>
                          <h3 data-para-anim className="heading-2 font-bold mb-2 leading-[1.2] mobile:text-[8.2vw]">{item.title}</h3>
                          <p data-para-anim className="text-[1.25vw] mobile:text-[4vw] tablet:text-[2vw]">{item.para}</p>
                          </div>
                      ))}

                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Residential;