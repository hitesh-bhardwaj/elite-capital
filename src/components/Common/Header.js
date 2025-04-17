import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../public/elite-logo.svg";
import {useLenis} from 'lenis/react'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "next-i18next";

const LanguageButton = () => {
    const { locale, asPath } = useRouter();
    return (
        <div className="text-golden flex items-center gap-x-2 text-lg">
            <Link className={`${locale === 'en' ? 'text-white' : ''} hover:scale-110 block duration-150`} href={asPath} locale="en">
                EN
            </Link>
            <span className="bg-white w-[1px] block h-[18px]"></span>
            <Link className={`${locale === 'ae' ? 'text-white' : ''} hover:scale-110 block duration-150`} href={asPath} locale="ae">
                AE
            </Link>
        </div>
    )
};

const Header = () => {
const headerRef = useRef();
const textRef = useRef(null);
const iconRef = useRef(null);
const [scrollDirection, setScrollDirection] = useState(null);
const lastScrollY = useRef(0);
const animating = useRef(false);
  const { t } = useTranslation('common');
  const footerNav = t('footerNav', { returnObjects: true });


const handleScroll = () => {
    const currentScroll = window.scrollY;
    const direction = currentScroll > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentScroll;

    if (!animating.current) {
      if (direction === "down" && scrollDirection !== "down") {
        setScrollDirection("down");
        animating.current = true;
  
        gsap.to(textRef.current, {
          x: 100, 
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(iconRef.current, {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              pointerEvents: "auto",
              onComplete: () => (animating.current = false),
            });
          },
        });
      } else if (direction === "up" && currentScroll <= 0 && scrollDirection !== "up") {
        setScrollDirection("up");
        animating.current = true;
  
        gsap.to(iconRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        //   pointerEvents: "none",
        });
  
        gsap.to(textRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        //   pointerEvents:"auto",
          onComplete: () => (animating.current = false),
        });
      }
    }
  };
  
useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrollDirection]);

const handleMouseEnter = () => {
  gsap.to(textRef.current, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
};

const handleMouseLeave = () => {
  gsap.to(textRef.current, {
    x: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
};

    return (
        <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-screen z-50 transition-all ease duration-500 `}
      >
        <div className="w-full px-[5vw] py-12 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="w-[16vw] mobile:w-[40vw] tablet:w-[25vw]"
                src={logo}
                alt="Elite Logo"
                width={220}
                height={100}
              />
            </Link>
          </div>
          <div className="flex flex-row-reverse items-center gap-8">
            <div
              ref={iconRef}
              className="cursor-pointer opacity-0 relative z-[100]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                className="w-[1.7vw] mobile:w-[5vw] tablet:w-[4vw]"
                viewBox="0 0 43 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.211914" width="42" height="3" fill="white" />
                <rect x="0.211914" y="12" width="42" height="3" fill="white" />
                <rect x="0.211914" y="24" width="42" height="3" fill="white" />
              </svg>
            </div>
            <div ref={textRef} className="w-full h-full text-[1.2vw] flex items-center gap-5 text-white uppercase"  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {footerNav.map((item,index)=>(
                <Link key={index} href={item.link} prefetch={false} className="group">
                 <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                <span  className="">{item.text}</span>
            </div></Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header