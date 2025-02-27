import { useTranslation } from "next-i18next";

const Values = () => {
    const { t } = useTranslation('common');
    const values = t('values', { returnObjects: true });

    return (
        <section className="bg-[#747977] py-[5vw]"> 
            <div className="px-[12%]">
                <div className="text-white">
                    <h3 data-title-anim className="text-[5vw] font-display font-bold text-center mb-[4vw]">{t('valuesHead')}</h3>
                    <div className="grid grid-cols-2 gap-x-[7vw] gap-y-[5vw]">
                        {values.map((item, index) => (
                            <div key={index}>
                                <span className="text-[1.25vw] mb-3 fadeUp block">{item.number}.</span>
                                <h4 data-para-anim className="text-[2.9vw] font-display font-bold mb-4">{item.sub}</h4>
                                <p data-para-anim className="text-[1.25vw]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;