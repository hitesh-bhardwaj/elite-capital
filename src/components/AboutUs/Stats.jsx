import React from "react";
import { useTranslation } from "next-i18next";

const Stats = () => {
    const { t } = useTranslation('about');

    const text = t('stats', { returnObjects: true });

    return (
        <>
            <section className="relative bg-[#F2F2E9] overflow-hidden py-[5%]">
                <div className="px-[3vw] flex items-center justify-between">
                    {text.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center w-[25%]">
                                <h3 className="text-[4vw] font-display font-bold mb-6">{item.number}</h3>
                                <p className="w-[75%] mx-auto">{item.text}</p>
                            </div>
                            <span className="block h-[25vw] w-[1.5px] bg-black1 last:hidden mx-[2%]" />
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stats;