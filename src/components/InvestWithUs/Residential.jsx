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
        <section className="bg-[#FFFFFF] overflow-hidden py-[5vw] mobile:py-[10vw]">
            <div className="flex items-center">
                <div className="text-black1  pl-[4vw] pr-[3.5vw] mobile:space-y-[5vw]">
                    <h2 data-title-anim className="heading-1 mb-[4vw] leading-[1]  mobile:leading-[1.2]">{t('residentialHead')}</h2>
                    <p data-para-anim className="w-[95%] content mobile:text-[4.9vw]">{t('residentialPara')}</p>
                    <h2 data-title-anim className="heading-1 tracking-tight pt-[7vw]  ">{t('residentialSub')}</h2>
                    <p data-para-anim className="w-[95%] content mobile:text-[4.9vw] pb-[5vw]">{t('residentialSub2')}</p>
                    <div className="flex justify-between mobile:block mobile:space-y-[8vw] tablet:flex-wrap tablet:gap-y-[5vw]">
                      {features.map((item,index)=>(
                        <div className="flex flex-col gap-[1vw] w-[28%] mobile:w-full tablet:w-[45%] " key={index}>
                            <Image src={images[index]} alt="factors" height={228} width={556}/>
                          <h3 data-para-anim className="heading-2  mb-2 leading-[1.2] mobile:text-[8.2vw]">{item.title}</h3>
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