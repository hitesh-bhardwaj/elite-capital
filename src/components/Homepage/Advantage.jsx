import { useTranslation } from "next-i18next";
import LineButton from "../ui/LineButton";
import image from "../../../public/assets/images/homepage/advantage.png"
import Image from "next/image";

const Advantage = () => {
    const { t } = useTranslation('common');
    const advantage = t('advantage', { returnObjects: true });

    return (
        <section className="bg-[#93AE79] overflow-hidden">
            <div className="flex items-center">
                <div className="text-black1 w-1/2 pl-[5vw] pr-[4.5vw]">
                    <h3 className="text-[5vw] font-display mb-[4vw] leading-[1]">{t('advantageHead')}</h3>
                    <div className="space-y-[2vw] mb-[3vw]">
                        {advantage.map((item, index) => (
                            <p key={index} className="">{item.text}</p>
                        ))}
                    </div>
                    <LineButton text={t('advantageCta')} href="#"/>
                </div>
                <div className="w-1/2">
                    <Image
                        className="object-cover w-full h-full"
                        src={image}
                        alt="advantage image"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default Advantage;