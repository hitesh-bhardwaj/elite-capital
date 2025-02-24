import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/homepage/section-break.png"

const SectionBreak = () => {
    const { t } = useTranslation('common');

    return (
        <section className="h-screen">
            <div className="w-full h-full overflow-hidden relative">
                <Image 
                    src={image}
                    alt="Section Break"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="absolute z-[1] top-0 left-0 object-cover w-full h-full"
                />
                <div className="relative z-[10] h-full w-screen overflow-hidden flex items-center justify-start">
                    <div className="font-display font-bold text-[11vw]">
                        <span className="text-white whitespace-nowrap">{t('sectionBreak')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBreak;