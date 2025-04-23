import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../public/EC-text.svg";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "next-i18next";

const LanguageButton = () => {
  const { locale, asPath } = useRouter();
  return (
    <div className="text-golden flex items-center gap-x-2 text-lg">
      <Link
        className={`${
          locale === "en" ? "text-white" : ""
        } hover:scale-110 block duration-150`}
        href={asPath}
        locale="en"
      >
        EN
      </Link>
      <span className="bg-white w-[1px] block h-[18px]"></span>
      <Link
        className={`${
          locale === "ae" ? "text-white" : ""
        } hover:scale-110 block duration-150`}
        href={asPath}
        locale="ae"
      >
        AE
      </Link>
    </div>
  );
};
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
const Header = () => {
  const headerRef = useRef();
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const lenis = useLenis();
  const router = useRouter();
  const [hide, sethide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation("common");
  const footerNav = t("footerNav", { returnObjects: true });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isInverted, setIsInverted] = useState(false);

  
  useEffect(() => {
    const handleRouteChangeStart = () => {
      lenis && lenis.start();
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [lenis, router.events]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down → show header
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up → hide header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);

      // Invert logic
      const darkSections = document.querySelectorAll(".dark");
      let found = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          found = true;
        }
      });

      setIsInverted(found);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    sethide(true);
    gsap.to(textRef.current, {
      x: -20,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    sethide(false);
    gsap.to(textRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

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
      className={`fixed top-0 left-0 w-screen z-50 transition-transform duration-500 ease-in-out
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="w-full px-[5vw] pt-12 flex justify-between items-center">
        <div>
          <Link href="/" className="flex gap-[0.5vw]">
            <Image
              className="w-[2.1vw] mobile:w-[6.5vw] tablet:w-[3.5vw]"
              src={"/icons/loader-icon.svg"}
              width={50}
              height={50}
              alt="elite logo"
            />
            <Image
              className={`w-[14vw] mobile:w-[46vw] tablet:w-[25vw] ${
                isInverted ? "invert" : ""
              }`}
              src={logo}
              alt="Elite text"
              width={220}
              height={100}
            />
          </Link>
        </div>
        <div
          className="flex flex-row-reverse items-center mobile:hidden"
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={iconRef}
            onMouseEnter={handleMouseEnter}
            className={`cursor-pointer relative z-[100] w-fit h-fit ${
              hide ? "pointer-events-none" : "pointer-events-auto"
            } ${isInverted ? "invert" : ""}`}
          >
            <svg
              className={`w-[2.2vw] mobile:w-[5vw] tablet:w-[4vw] transition-all duration-300  ${
                hide ? "opacity-0" : "opacity-100"
              }`}
              viewBox="0 0 43 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.211914" width="42" height="3" fill="white" />
              <rect x="0.211914" y="12" width="42" height="3" fill="white" />
              <rect x="0.211914" y="24" width="42" height="3" fill="white" />
            </svg>
          </div>
          <div
            ref={textRef}
            className={`w-full h-full text-[1.2vw] flex items-center gap-5 text-white uppercase translate-x-[10%] opacity-0 pointer-events-none ${
              hide ? "pointer-events-auto" : "pointer-events-none"
            } ${isInverted ? "invert" : ""}`}
          >
            {footerNav.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                prefetch={false}
                className="group w-fit"
              >
                <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ">
                  <span className="group-hover:scale-[0.98] transition-all duration-300 ease tablet:text-[2.2vw]">
                    {item.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden mobile:block">
          <div
            className={`cursor-pointer relative z-[100] ${
              isInverted ? "invert" : ""
            }`}
            onClick={openMenuMobile}
          >
            <svg
              className="mobile:w-[9vw] tablet:w-[4vw]"
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
        <div className="w-screen h-screen fixed top-0 left-0 z-[999] pointer-events-none hidden mobile:block">
          <div
            className={`h-[40vh] bg-[#E5E5DC] w-screen relative z-[1] flex flex-col justify-between pt-[25vw] pb-[5vw] px-[5vw] transition-transform duration-500 ease-in-out pointer-events-auto ${
              openMenu ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col gap-[2vw]">
              {footerNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  prefetch={false}
                  className="group w-fit"
                >
                  <div className="flex items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out mobile:after:bg-black mobile:after:w-0">
                    <span className="group-hover:scale-[0.98] transition-all duration-300 ease text-[6.5vw]">
                      {item.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <Link
                  target="_blank"
                  href={social.link}
                  className="group flex items-center relative justify-center border-[1.5px] border-black overflow-hidden rounded-full p-[1vw] duration-500 mobile:items-start mobile:p-[3.5vw]"
                  key={index}
                >
                  <Image
                    className="w-[1.2rem] h-[1.2rem] group-hover:invert duration-300 invert"
                    src={social.icon}
                    alt={social.alt}
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
            </div>
            <div
              className="absolute right-[5%] top-[5%] border rounded-full border-black p-[3vw]"
              onClick={closeMenuMobile}
            >
              <Image
                src={"/icons/cross.svg"}
                width={50}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div
            className={`w-screen h-screen absolute top-0 bg-black/50 transition-all duration-500 ease ${
              openMenu ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
