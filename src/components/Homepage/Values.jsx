import { useTranslation } from "next-i18next";
import valuesBg from "../../../public/assets/images/homepage/values-bg.png"
import Image from "next/image";

const Values = () => {
    const { t } = useTranslation('home');
    const values = t('values', { returnObjects: true });

    return (
        <section className="h-[75vw] w-screen relative pb-[8vw] pt-[5vw] mobile:py-[10vw]"> 
        <div className="absolute top-0 left-0 h-full w-full z-0">
            <Image
              src={valuesBg}
              alt="stats-bg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
            <div className="px-[8%] ">
                <div className="space-y-[6vw]">
                    <h2 data-title-anim className="text-[5vw] font-display  mb-[4vw] mobile:text-[12.5vw]">{t('valuesHead')}</h2>
                    <div className="grid grid-cols-3 gap-x-[4vw] gap-y-[8vw] mobile:block mobile:space-y-[10vw]">
                        {values.map((item, index) => (
                            <div key={index}>
                                <h3 data-para-anim className="heading-2  font-bold mb-4 ">{item.valueTitle}</h3>
                                <p data-para-anim className="content" >{item.valuePara}</p>        
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;