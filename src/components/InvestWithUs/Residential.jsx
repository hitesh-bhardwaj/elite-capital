import { useTranslation } from "next-i18next";
import factors1 from "../../../public/assets/images/invest/factors-1.png"
import factors2 from "../../../public/assets/images/invest/factors-2.png"
import factors3 from "../../../public/assets/images/invest/factors-3.png"
import Image from "next/image";

const images = [factors1,factors2,factors3]
const Residential = () => {
    const { t } = useTranslation('invest');
    const features = t('features', { returnObjects: true });
   

    return (
        <section className="bg-[#FFFFFF] overflow-hidden py-[5vw] pb-[7vw] mobile:py-[15%] dark tablet:py-[7vw]">
            <div className="flex items-center">
                <div className="text-black1  pl-[4vw] pr-[3.5vw] mobile:space-y-[5vw]">
                    <h2 data-title-anim className="text-[4.5vw] font-display mb-[2vw] leading-[1.2] mobile:text-[12.5vw] mobile:mb-[7vw]  mobile:leading-[1.2] tablet:text-[7vw]">{t('residentialHead')}</h2>
                    <p data-para-anim className="w-[95%] content mobile:text-[4.2vw] mobile:leading-[1.6]">{t('residentialPara')}</p>
                    <h2 data-title-anim className="text-[4.5vw] font-display tracking-tight mobile:text-[12.5vw]  pt-[7vw] mb-[1vw]  mobile:leading-[1.2] tablet:text-[7vw]">{t('residentialSub')}</h2>
                    <p data-para-anim className="w-[98%] content mobile:text-[4.2vw] pb-[5vw] mobile:leading-[1.6]">{t('residentialSub2')}</p>
                    <div className="flex justify-between mobile:block mobile:space-y-[15vw] tablet:flex-col tablet:flex-wrap tablet:gap-y-[8vw]">
                      {features.map((item,index)=>(
                        <div className="flex flex-col gap-[1vw] w-[32%] mobile:w-full tablet:w-[65%]  mobile:gap-[3vw] tablet:gap-[1vw]" key={index}>
                            <div className="group fadeup transition-all duration-500 ease overflow-hidden mobile:mb-[4vw] tablet:mb-[2vw]">
                            <Image src={images[index]} alt="factors" height={228} width={556} className=" group-hover:scale-[1.1] transition-all duration-500 ease  w-full h-full"/>
                            </div>
                          <h3 data-para-anim className="heading-2  leading-[1.2] mobile:text-[7vw] tablet:text-[5.5vw]">{item.title}</h3>
                          <p data-para-anim className="text-[1.25vw] mobile:text-[4vw] tablet:text-[2.5vw]">{item.para}</p>
                          </div>
                      ))}

                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Residential;