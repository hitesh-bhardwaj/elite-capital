import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const { t } = useTranslation('common');
  const footerNav = t('footerNav', { returnObjects: true });
  const footerNavBottom = t('footerNavBottom', { returnObjects: true });
    const [mobileWidth, setIsMobileWidth] = useState(false);
  
  useEffect(() => {
      const checkMobile = () => {
        setIsMobileWidth(globalThis.innerWidth <= 541);
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
  
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

  function handleMouseMove(e) {
    const hoverCircle = e.currentTarget.querySelector('.hover-circle');
    if (hoverCircle) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverCircle.style.left = `${x}px`;
      hoverCircle.style.top = `${y}px`;
    }
  }

  const socials = [
    {
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/officialelitecapital",
      alt: "LinkedIn Icon",
    },
    {
      icon: "/icons/instagram.svg",
      link: "https://www.instagram.com/officialelitecapital?igsh=MXVieHkybDZkdXhxdQ==",
      alt: "Instagram Icon",
    },
  ];

  return (
    <footer className=" bg-transparent h-[38vw] text-white   mobile:h-full tablet:h-[70vw]"
    style={{
      ...(mobileWidth
        ? {}
        : { clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }),
    }}>
        <div className="fixed bottom-0 w-full mobile:static">
      <div className="px-[5vw] w-full bg-[#121212]  mobile:px-[7vw] font-body mobile:py-[5vw]">
        <div className="  flex  justify-between mobile:flex-col mobile:h-full">
          <div className="flex flex-col items-start justify-start pt-[5vw] mobile:flex-col ">
            <Image
              src="/elite-logo.svg"
              width={100}
              height={100}
              alt="Logo"
              className="w-[35vw] h-auto fadeUp mobile:w-[80vw] tablet:w-[30vw]"
            />
            <p className="text-[2.1vw] pl-[4.8vw] pt-[0.5vw] mobile:text-[6vw] mobile:pl-[13vw] mobile:pt-[2vw] tablet:text-[2.5vw] tablet:pt-[1vw]"> {t('footerline')} </p>
          </div>
          <div className="uppercase content font-body font-medium flex items-center justify-end gap-[5vw] mobile:flex-col  mobile:items-start  mobile:pt-[8vw]  mobile:gap-[4vw] tablet:justify-start  mobile:text-[6vw] tablet:gap-[3vw]">
            {footerNav.map((item, index) => (
              <Link key={index} href={item.link} className="group transition-all duration-300 ease" prefetch={false}>
                <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.5rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                  <span className="group-hover:scale-[0.98] transition-all duration-300 ease tablet:text-[2.2vw]">{item.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-fit w-[40%] py-[3vw] mobile:w-full mobile:py-[8vw] tablet:py-[4vw]">
         <div className="text-white text-[1.15rem]">
          <p>Elite Capital Head Office</p>
          <p>Central Park Towers, Office 02-40</p>
          <p>Dubai International Financial Centre</p>
          <p>PO Box 507417</p>
          <p>Dubai, United Arab Emirates</p>

         </div>

          </div>
        <div className="border-t border-white flex justify-between items-center py-6 mobile:flex-col-reverse mobile:items-start mobile:gap-[1vw]  tablet:pb-[5vw] mobile:pt-[5vw] mobile:py-[2vw]">
          <p className="text-[1.15rem] tablet:w-[40%] mobile:text-[4vw]">{t('footerCopy')}</p>
          <div className="flex gap-[2.5vw] text-[1.3vw] mobile:flex-col-reverse tablet:flex-col">
            <div className="flex items-center justify-center mobile:items-start gap-[2vw] mobile:flex-col mobile:py-[3vw] mobile:gap-[4vw] tablet:gap-[1vw]">
              {footerNavBottom.map((item, index) => (
                <Link key={index} href={item.link} prefetch={false} className="group">
                  <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                    <span className="mobile:text-[6vw] group-hover:scale-[0.98] transition-all duration-300 ease tablet:text-[2.5vw]">{item.text}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 tablet:justify-end">
              {socials.map((social, index) => (
                <a
                  onMouseMove={(e) => handleMouseMove(e)}
                  target="_blank"
                  aria-label={social.alt}
                  href={social.link}
                  className="group flex items-center relative justify-center border-[1.5px] border-white overflow-hidden rounded-full p-[1vw] duration-500 mobile:items-start mobile:p-[3.5vw] tablet:p-[2vw]"
                  key={index}
                >
                  <span
                    className="hover-circle absolute aspect-square rounded-full bg-white 
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
                    style={{
                      width: '200%',
                    }}
                  ></span>
                  <Image
                    className="w-[1.2rem] h-[1.2rem] group-hover:invert duration-300 tablet:h-[3vw] tablet:w-[3vw]"
                    src={social.icon}
                    alt={social.alt}
                    width={25}
                    height={25}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[1.5vw] mobile:mt-[-2vw] bg-[#121212] w-full flex items-center justify-center italic font-body text-[1.15rem]  mobile:px-[5vw] mobile:py-[5vw] mobile:text-[3.5vw] tablet:px-[5vw]">Regulated by the DFSA under F009439. Elite Capital (DIFC) Limited only provides financial services to professional clients</div>
      </div>
    </footer>
  );
};

export default Footer;