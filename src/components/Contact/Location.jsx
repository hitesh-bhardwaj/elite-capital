import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Location = () => {
    const { t } = useTranslation('contact');
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = -((e.clientX - left) / width - 0.5) * 50; // Range from -10 to 10
        const y = -((e.clientY - top) / height - 0.5) * 50;
        setOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    return (
        <section className="relative h-fit bg-[#747977] py-[3vw] overflow-hidden mobile:py-[15vw] mobile:min-h-full mobile:h-full tablet:h-full tablet:py-[7%]" id="location">
            <div className="relative z-10 px-[5vw]  flex items-center justify-between h-screen mobile:flex-col-reverse mobile:gap-[10vw] mobile:h-full tablet:h-full tablet:flex-col-reverse tablet:gap-[7vw]">
                
                {/* Image with parallax effect */}
                <div
                    className="w-[50%] flex h-[50vw] items-center justify-between mobile:w-full tablet:w-full overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        className="w-[90%] fadeUp mobile:w-full tablet:w-full tablet:h-[50vw] object-cover h-full scale-[1.3]"
                        src={"/assets/images/contactpage/contact-map.png"}
                        width={1920}
                        height={1080}
                        alt="about image"
                        style={{
                            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.3)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        loading="lazy"
                    />
                </div>

                {/* Text content */}
                <div className="text-white w-[45%] mobile:w-full mobile:space-y-[5vw] tablet:w-full tablet:space-y-[3vw] ">
                    <h2 data-title-anim className="heading-2  mb-[1.5vw]">{t('locationHead')}</h2>
                    <div className="flex items-start justify-start gap-[1vw] ">
                        <div className="pt-[0.5vw]">
                            <Image src="/icons/location-icon.svg" height={30} width={30} alt="location" className="fadein"/>
                        </div>
                        <div data-para-anim
                            className="mb-[3vw] w-[80%] content mobile:w-[75%] mobile:pl-[3vw] tablet:w-full"
                            dangerouslySetInnerHTML={{ __html: t('locationSub') }}
                        ></div>
                    </div>
                    <div className="mt-[1vw] mobile:space-y-[2vw]">
                        <h2 data-title-anim className="heading-2 mb-[1.5vw] mobile:mb-[5vw] tablet:mb-[3vw]">{t('contactHead')}</h2>
                        <div className="flex items-center justify-start gap-[1vw] pb-[0.5vw]">
                            <div className="">
                                <Image src="/icons/phone-icon.svg" height={35} width={35} alt="phone" className="fadein" />
                            </div>
                            <p data-para-anim className=" w-[60%] content mobile:pl-[3vw] tablet:w-full">{t('phone')}</p>
                        </div>
                        <div className="flex items-center justify-start gap-[1vw] py-[0.5vw]  ">
                            <div className="">
                                <Image src="/icons/mail-icon.svg" height={35} width={35} alt="mail" className="fadein" />
                            </div>
                            <p data-para-anim className=" w-[60%] content mobile:pl-[3vw] tablet:w-full">{t('mail')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
