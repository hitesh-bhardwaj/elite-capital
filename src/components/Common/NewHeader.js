import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../public/EC-text.svg";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "next-i18next";

const LanguageButton = ({inverted , setarabicMode}) => {
  const { locale, asPath } = useRouter();
  return (
    <div className="text-golden flex items-center gap-x-2 text-lg">
      <Link 
      onclick={()=>{
        setarabicMode(false)
      }}
        className={`${
          locale === "en" ? "text-white" : ""
        } hover:scale-110 block duration-150 ${inverted?"!text-black":""}`}
        href={asPath}
        locale="en"
      >
        EN
      </Link>
      <span className={`bg-white w-[1px] block h-[18px] ${inverted?"!bg-black":""}`}></span>
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
const NewHeader = () => {
  const headerRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const lenis = useLenis();
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isInverted, setIsInverted] = useState(false);
  const [arabicMode,setarabicMode] = useState(false);
  const { t } = useTranslation("common");
  const footerNav = t("footerNav", { returnObjects: true });

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
          opacity:0,
          duration: 0.5,
        })
        gsap.from(".menu-link",{
          opacity:0,
          duration:1,
          delay:0.3,
        })
      } else {
        gsap.from(".ham-line", {
          scaleX: 0,
          stagger: 0.05,
          opacity:0,
          duration: 0.5,
        });
        gsap.to(".menu-link",{
          opacity:0,
          duration:0.2,
         
        })
      }
    });
    return () => ctx.revert();
  }, [openMenu]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-screen z-50 transition-all ease duration-500  ${showHeader ? "translate-y-0" : "-translate-y-full"} `}
    >
      <div className="w-full px-[5vw] py-12 flex justify-between items-center">
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
        <div className="flex gap-[2vw]">

        <div
          className={` relative h-[2vw]  flex flex-nowrap overflow-hidden justify-end text-white transition-all duration-500 ease-in-out ${
            openMenu ? "w-[30vw]" : "w-[2vw]"
          }`}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <div className="absolute w-[30vw] left-0">
          <div
            className={`w-[30vw] flex-nowrap flex gap-[2vw] ${isInverted?"text-black":""}`}
          >
            {footerNav.map((item,id)=>(
             <>
            <Link href={item.link} className={`menu-link text-[1.2vw] group `}>
            <div className={`flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out ${isInverted?"after:bg-black":""}`}>
                  <span className="group-hover:scale-[0.98] transition-all duration-300 ease tablet:text-[2.2vw]">
                    {item.text}
                  </span>
                </div>
            </Link>
          
             </>

            ))}
          </div>

          </div>
          <div className="w-[2vw] h-[2vw] flex flex-col justify-center items-center gap-[0.5vw] cursor-pointer relative z-[2]">
            <span className={`w-full h-[1.5px]  ham-line origin-right ${isInverted?"bg-black":"bg-white"}`}></span>
            <span className={`w-full h-[1.5px]  ham-line origin-right ${isInverted?"bg-black":"bg-white"}`}></span>
            <span className={`w-full h-[1.5px] ham-line origin-right ${isInverted?"bg-black":"bg-white"}`}></span>
          </div>
        </div>
        <LanguageButton inverted={isInverted} setarabicMode={setarabicMode} onclick={()=>{
          setarabicMode(true)
        }}/>

        </div>

      </div>
    </header>
  );
};

export default NewHeader;
