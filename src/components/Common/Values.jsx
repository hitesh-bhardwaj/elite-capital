import { useTranslation } from "next-i18next";

const Values = () => {
    const { t } = useTranslation('common');
    const values = t('values', { returnObjects: true });

    return (
        <section className="bg-[#B1C3B7] py-[5vw] mobile:py-[10vw]"> 
            <div className="px-[8%]">
                <div className="">
                    <h3 data-title-anim className="text-[5vw] font-display  mb-[4vw] mobile:text-[12.5vw]">{t('valuesHead')}</h3>
                    <div className="grid grid-cols-3 gap-x-[4vw] gap-y-[5vw] mobile:block mobile:space-y-[10vw]">
                        {values.map((item, index) => (
                            <div key={index}>
                                <span className="text-[1.25vw] mb-3 fadeUp block mobile:text-[4.6vw]">{item.number}.</span>
                                <h4 data-para-anim className="text-[2.9vw] font-display font-bold mb-4 mobile:text-[8.2vw]">{item.sub}</h4>
                                <p data-para-anim className="text-[1.25vw] mobile:text-[4.6vw]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;