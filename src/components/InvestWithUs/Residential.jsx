import { useTranslation } from "next-i18next";


const Residential = () => {
    const { t } = useTranslation('invest');
    const features = t('features', { returnObjects: true });
   

    return (
        <section className="bg-[#93AE79] overflow-hidden py-[5vw] mobile:py-[10vw]">
            <div className="flex items-center">
                <div className="text-black1  pl-[4vw] pr-[3.5vw]">
                    <h3 data-title-anim className="text-[5vw] capitalize font-display mb-[4vw] leading-[1] mobile:text-[12.5vw] mobile:leading-[1.2]">{t('residentialHead')}</h3>
                    <p data-para-anim className="w-[90%] text-[1.88vw] mobile:text-[4.9vw]">{t('residentialPara')}</p>
                    <h2 data-title-anim className="text-[3.5vw] font-display pt-[7vw] pb-[5vw] capitalize mobile:leading-[1.2] mobile:text-[10.2vw]">{t('residentialSub')}</h2>
                    <div className="flex justify-between mobile:block mobile:space-y-[8vw]">
                      {features.map((item,index)=>(
                        <div className="flex flex-col gap-[1vw] w-[28%] mobile:w-full " key={index}>
                          <p data-para-anim className="text-[1.25vw] mb-3 block mobile:text-[4vw] ">{item.num}</p>
                          <p data-para-anim className="text-[2.9vw] font-display font-bold mb-2 leading-[1.2] mobile:text-[8.2vw]">{item.title}</p>
                          <p data-para-anim className="text-[1.25vw] mobile:text-[4vw]">{item.para}</p>
                          </div>
                      ))}

                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Residential;