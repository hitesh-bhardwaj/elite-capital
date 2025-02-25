import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/about/section-break.png"

const SectionBreak = () => {
    const { t } = useTranslation('about');

    return (
        <section className="h-screen">
            <div className="w-full h-full overflow-hidden relative">
                <Image 
                    src={image}
                    alt="Success"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="absolute z-[1] top-0 left-0 object-cover w-full h-full"
                />
                <div className="relative z-[10] h-full w-screen overflow-hidden flex items-center justify-start">
                    <div className="font-display text-[5vw] px-[7vw] leading-[1.3]">
                        <span className="text-white">{t('successPara')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBreak;