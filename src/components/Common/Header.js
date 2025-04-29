import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../public/EC-text.svg";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "next-i18next";

const socials = [
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/yourlinkedinpage",
    alt: "LinkedIn Icon",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/yourinstagrampage",
    alt: "Instagram Icon",
  },
];

const LanguageButton = ({ className = "" }) => {
  const { locale, asPath } = useRouter();

  return (
    <div className={`text-white flex items-center gap-x-2 text-[1.2vw] tablet:text-[3vw] mobile:text-[5vw] ${className}`}>
      <a className={`${locale === 'en' ? 'text-golden font-bold text-[1.5vw] mobile:text-black tablet:text-black' : 'mobile:text-black tablet:text-black'} hover:scale-110 block duration-150`} href={asPath} locale="en">
        EN
      </a>
      <span className={`bg-white w-[1px] block h-[20px] mobile:bg-black tablet:bg-black`}></span>
      <a className={`${locale === 'ar' ? 'text-golden font-bold text-[1.5vw] mobile:text-black tablet:text-black' : 'mobile:text-black tablet:text-black'} hover:scale-110 block duration-150`} href={`ar${asPath}`} locale="ar">
        AR
      </a>
    </div>
  )
};

const Header = () => {
  const headerRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const lenis = useLenis();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const { t } = useTranslation("common");
  const footerNav = t("footerNav", { returnObjects: true });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const open = () => {
    setOpenMenu(true);
  };
  const close = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (openMenu) {
        gsap.to(".ham-line", {
          scaleX: 0,
          stagger: 0.05,
          opacity: 0,
          duration: 0.5,
        })
        gsap.from(".menu-link", {
          opacity: 0,
          duration: 1,
          delay: 0.3,
        })
      } else {
        gsap.from(".ham-line", {
          scaleX: 0,
          stagger: 0.05,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".menu-link", {
          opacity: 0,
          duration: 0.3,

        })
      }
    });
    return () => ctx.revert();
  }, [openMenu]);

  const openMenuMobile = () => {
    setOpenMenu(true);
    lenis && lenis.stop();
  };
  const closeMenuMobile = () => {
    setOpenMenu(false);
    lenis && lenis.start();
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-screen z-50 transition-all   duration-500 ease  ${showHeader ? "translate-y-0 " : "-translate-y-full "} ${scrolled ? "backdrop-blur-md bg-black/40" : ""
        } `}
    >
      <div className="w-full px-[5vw] py-8 flex justify-between items-center">
        <div>
          <Link href="/" className="flex gap-[0.5vw] rtl:flex-row-reverse">
            <Image
              className="w-[2.1vw] mobile:w-[5.5vw] tablet:w-[3.5vw]"
              src={"/icons/loader-icon.svg"}
              width={50}
              height={50}
              alt="elite logo"
            />
            <Image
              className={`w-[14vw] mobile:w-[35vw] tablet:w-[25vw]`}
              src={logo}
              alt="Elite text"
              width={220}
              height={100}
            />
          </Link>
        </div>

        <div className="flex gap-[2vw]">
          <div
            className={` h-[2vw]  flex flex-nowrap overflow-hidden justify-end text-white transition-all duration-500 ease-in-out ${openMenu ? "w-[30vw] mobile:w-[2vw]" : "w-[2vw]"
              }`}
            onMouseEnter={open}
            onMouseLeave={close}
          >
            <div className={`absolute right-[10%] z-[2] rtl:left-[2%] rtl:right-auto overflow-hidden transition-all duration-500 ease-in-out ${openMenu ? "w-[32.5vw] px-[2vw] pointer-events-auto" : "w-[28vw] pointer-events-none"
              } `}>
              <div
                className={`w-[40vw] flex-nowrap flex gap-[3vw]`}
              >
                {footerNav.map((item, id) => (

                  <Link key={id} href={item.link} className={`menu-link text-[1.2vw] group`} prefetch={false}>
                    <div className={`flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px]  after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out after:bg-current`}>
                      <span className="group-hover:scale-[0.98] transition-all duration-300 ease tablet:text-[2.2vw]">
                        {item.text}
                      </span>
                    </div>
                  </Link>

                ))}
              </div>
            </div>
            <div className={`w-[2vw] h-[2vw] flex flex-col justify-center items-center gap-[0.5vw] relative z-[2] tablet:hidden mobile:hidden `}>
              <span className={`w-full h-[1.5px]  ham-line origin-right bg-white`}></span>
              <span className={`w-full h-[1.5px]  ham-line origin-right bg-white`}></span>
              <span className={`w-full h-[1.5px] ham-line origin-right bg-white`}></span>
            </div>
          </div>
          <LanguageButton className="mobile:hidden tablet:hidden" />
        </div>

        <div className="hidden mobile:block tablet:block">
          <div
            className={`cursor-pointer relative z-[100]`}
            onClick={openMenuMobile}
          >
            <svg
              className="mobile:w-[7vw] tablet:w-[4vw]"
              viewBox="0 0 43 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.211914" width="42" height="3" fill="white" />
              <rect x="0.211914" y="12" width="42" height="3" fill="white" />
              <rect x="0.211914" y="24" width="42" height="3" fill="white" />
            </svg>
          </div>
        </div>
        <div className="w-screen h-screen fixed top-0 left-0 z-[999] pointer-events-none hidden mobile:block tablet:block">
          <div
            className={`h-[40vh] bg-[#E5E5DC] w-screen relative z-[1] flex flex-col overflow-hidden  justify-between pt-[25vw] tablet:pt-[15vw] pb-[5vw] px-[5vw] transition-transform duration-500 ease-in-out pointer-events-auto ${openMenu ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            <div className="flex flex-col gap-[2vw] mb-[7vw]">
              {footerNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  prefetch={false}
                  className="group w-fit"
                  onClick={closeMenuMobile}
                >
                  <div className="flex items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out mobile:after:bg-black mobile:after:w-0">
                    <span className="group-hover:scale-[0.98] transition-all duration-300 ease text-[6vw] tablet:text-[4vw]">
                      {item.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  target="_blank"
                  href={social.link}
                  className="group flex items-center relative justify-center border-[1.5px] border-black overflow-hidden rounded-full p-[1vw] duration-500 mobile:items-start mobile:p-[3.5vw] tablet:p-[2vw]"
                  key={index}
                >
                  <Image
                    className="w-[1.2rem] h-[1.2rem] group-hover:invert duration-300 invert tablet:w-[1.5rem] tablet:h-[1.5rem]"
                    src={social.icon}
                    alt={social.alt}
                    width={25}
                    height={25}
                  />
                </a>
              ))}
            </div>
            <div
              className="absolute right-[5%] top-[10%] border rounded-full border-black p-[3vw]"
              onClick={closeMenuMobile}
            >
              <Image
                src={"/icons/cross.svg"}
                width={30}
                height={30}
                alt="cross-icon"
                className="object-contain w-[4vw] h-[4vw] tablet:w-[2vw] tablet:h-[2vw]"
              />
            </div>
            <div className="w-full flex justify-end">
              <LanguageButton />
            </div>
          </div>
          <div
            className={`w-screen h-screen absolute top-0 bg-black/50 transition-all duration-500 ease ${openMenu ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
