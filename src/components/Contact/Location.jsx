import { useTranslation } from "next-i18next";
import locationMap from "../../../public/assets/images/contact/location-map.png"
import Image from "next/image";

const Location = () => {
    const { t } = useTranslation('contact');

    return (
        <>
            <section className="relative min-h-screen bg-[#747977] py-[3vw] overflow-hidden">
                <div className="relative z-10 px-[5vw]  flex items-center justify-between h-screen">
                    <div className="w-[60%] flex h-full items-center justify-between">
                        <Image
                            className="w-[90%]"
                            src={locationMap}
                            alt="about image"
                            placeholder="blur"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-black1 w-[45%]">
                        <h2 className="text-[2.9vw] text-white font-display leading-1.15  mb-[1.5vw]">{t('locationHead')}</h2>
                        <div className="flex items-start justify-start gap-[1vw]">
                            <div className="pt-[0.5vw]">
                                <Image src="/icons/location-icon.svg" height={30} width={30} alt="location" />
                            </div>
                            <div
                                className="mb-[3vw] w-[80%] text-white"
                                dangerouslySetInnerHTML={{ __html: t('locationSub') }}
                            ></div>

                        </div>
                        <div className="mt-[1vw]">
                            <h2 className="text-[2.9vw] text-white font-display leading-1.15  mb-[1.5vw]">{t('contactHead')}</h2>
                            <div className="flex items-center justify-start gap-[1vw] pb-[0.5vw]">
                                <div className="">
                                    <Image src="/icons/phone-icon.svg" height={35} width={35} alt="phone" />
                                </div>
                                <p className=" w-[60%] text-white">{t('phone')}</p>
                            </div>
                            <div className="flex items-center justify-start gap-[1vw] py-[0.5vw]">
                                <div className="">
                                    <Image src="/icons/mail-icon.svg" height={35} width={35} alt="mail" />
                                </div>
                                <p className=" w-[60%] text-white">{t('mail')}</p>

                            </div>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default Location;