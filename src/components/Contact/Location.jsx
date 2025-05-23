import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Location = () => {
    const { t } = useTranslation('contact');
    // const [offset, setOffset] = useState({ x: 0, y: 0 });

    // function handleMouseMoveIcon(e) {
    //     const hoverCircle = e.currentTarget.querySelector('.hover-circle');
    //     if (hoverCircle) {
    //         const rect = e.currentTarget.getBoundingClientRect();
    //         const x = e.clientX - rect.left;
    //         const y = e.clientY - rect.top;
    //         hoverCircle.style.left = `${x}px`;
    //         hoverCircle.style.top = `${y}px`;
    //     }
    // }

    // const handleMouseMove = (e) => {
    //     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    //     const x = -((e.clientX - left) / width - 0.5) * 80;
    //     const y = -((e.clientY - top) / height - 0.5) * 80;
    //     setOffset({ x, y });
    // };

    // const handleMouseLeave = () => {
    //     setOffset({ x: 0, y: 0 });
    // };

    return (
        <section className="relative h-fit bg-[#747977] py-[3vw] overflow-hidden mobile:py-[15vw] mobile:min-h-full mobile:h-full tablet:h-full tablet:py-[7%]" id="location">
            <div className="relative z-10 px-[5vw]  flex items-center justify-between h-screen mobile:flex-col-reverse mobile:gap-[10vw] mobile:h-full tablet:h-full tablet:flex-col-reverse tablet:gap-[7vw]">

                {/* Image with parallax effect */}
                <div
                    className="w-[50%] flex h-[50vw] mobile:h-[100vw] mobile:rounded-[3vw]  items-center justify-between mobile:w-full tablet:w-full overflow-hidden mobile:mt-[7vw] "
                    // onMouseMove={handleMouseMove}
                    // onMouseLeave={handleMouseLeave}
                >
                    <iframe src="https://snazzymaps.com/embed/704246" width="100%" height="100%" style={{border:'none'}}></iframe>
                    {/* <Image
                        className="w-[90%] fadeUp mobile:w-full tablet:w-full tablet:h-[50vw] object-cover h-full scale-[1.3] mobile:!scale-[2]"
                        src={"/assets/images/contactpage/contact-map.png"}
                        width={1920}
                        height={1080}
                        alt="about image"
                        style={{
                            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.3) `,
                            transition: 'transform 0.2s ease-out',
                        }}
                        loading="lazy"
                    /> */}
                </div>

                {/* Text content */}
                <div className="text-white w-[45%] mobile:w-full mobile:space-y-[5vw] tablet:w-full tablet:space-y-[3vw] ">
                    <h2 data-title-anim className="heading-2  mb-[1.5vw]">{t('locationHead')}</h2>
                    <div className="flex items-start justify-start gap-[1vw] ">
                        <div className="pt-[0.5vw]">
                            <Image src="/icons/location-icon.svg" height={30} width={30} alt="location" className="fadein" />
                        </div>
                        <div className="w-[80%] pb-[3vw] mobile:w-full">
                            <div data-para-anim
                                className=" w-full content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"

                            >{t('address1')}</div>
                            <div data-para-anim
                                className=" w-full content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"

                            >{t('address2')}</div>
                            <div data-para-anim
                                className=" w-full content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"
                            >{t('address3')}</div>
                            <div data-para-anim
                                className=" w-full content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"
                            >{t('address4')}</div>
                            <div data-para-anim
                                className=" w-full pt-8 content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"
                            >{t('address5')}</div>
                            <div data-para-anim
                                className=" w-full content mobile:w-full mobile:pl-[3vw] tablet:w-full mobile:leading-[1.6]"
                            >{t('address6')}</div>
                        </div>
                    </div>
                    <div className="mt-[1vw] mobile:space-y-[4vw] ">
                        <h2 data-title-anim className="heading-2 mb-[1.5vw] mobile:mb-[7vw] tablet:mb-[3vw]">{t('contactHead')}</h2>
                        <div className="flex items-center justify-start gap-[1vw] pb-[0.5vw] group cursor-pointer mobile:pb-0 tablet:pb-[2vw] tablet:gap-[2vw]">
                            <div className="">
                                <Image src="/icons/phone-icon.svg" height={35} width={35} alt="phone" className="fadein" />
                            </div>
                            <div dir="ltr" className="flex gap-2 rtl:mt-2 items-center after:absolute w-fit relative after:bottom-1 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                                <p className="w-full content mobile:pl-[3vw] tablet:w-full fadein ">{t('phone')}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-[1vw] py-[0.5vw] group cursor-pointer tablet:pb-[2vw] tablet:gap-[2vw]">
                            <div className="">
                                <Image src="/icons/mail-icon.svg" height={35} width={35} alt="mail" className="fadein" />
                            </div>
                            <div dir="ltr" className="flex gap-2 rtl:mt-2 items-center after:absolute w-fit relative after:bottom-1 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                                <p className="w-full content mobile:pl-[3vw] tablet:w-full fadein">{t('mail')}</p>
                            </div>
                        </div>
                        <Link href={t('linkedin')} className="">
                            <div className="flex items-center justify-start gap-[1.4vw] py-[0.5vw] group cursor-pointer mobile:py-[1.5vw] pl-[0.3vw] rtl:pr-[0.4vw] tablet:pb-[2vw] tablet:gap-[3vw] mobile:pl-0">
                                <div className="">
                                    <Image src="/icons/contact-linkedin.svg" height={25} width={25} alt="mail" className="fadein mobile:h-[7vw] mobile:w-[7vw] mobile:pl-[1.5vw]" />
                                </div>
                                <div className="flex gap-2 rtl:mt-2 items-center after:absolute w-fit relative after:bottom-1 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                                    <p className="w-full content mobile:pl-[3.6vw] tablet:w-full fadein">Elite Capital</p>
                                </div>
                            </div>
                        </Link>
                        <Link href={t('instagram')}>
                            <div className="flex items-center justify-start gap-[1vw] py-[0.5vw] group cursor-pointer mobile:py-[1.5vw] tablet:gap-[2vw] tablet:pl-[-0.5vw]">
                                <div className="">
                                    <Image src="/icons/contact-instagram.svg" height={35} width={35} alt="mail" className="fadein mobile:h-[8vw] mobile:w-[8vw] " />
                                </div>
                                <div className="flex gap-2 rtl:mt-2 items-center after:absolute w-fit relative after:bottom-1 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                                    <p className="w-full content mobile:pl-[3.1vw] tablet:w-full fadein">Elite Capital</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
