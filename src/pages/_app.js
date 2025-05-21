import { Barlow, Bodoni_Moda, Readex_Pro, Tajawal } from "next/font/google";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { ReactLenis } from "lenis/react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Loader2 from "@/components/newLoader";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";

import LineButton from "@/components/ui/LineButton";
import Link from "next/link";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const readex_pro = Readex_Pro({
  subsets: ["arabic"],
  variable: "--font-display-arabic",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-body-arabic",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const router = useRouter();
  const [cookieVisible, setVisible] = useState(true);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    document.querySelectorAll("Swiper").forEach((swiper) => {
      swiper.setAttribute("dir", dir);
    });
  }, [locale]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (!hasVisited) {
        setShowPreloader(true);
        const preloaderTimeout = setTimeout(() => {
          setShowPreloader(false);
          sessionStorage.setItem("hasVisited", "true");
        }, 3400);
        return () => clearTimeout(preloaderTimeout);
      } else {
        setShowPreloader(false);
      }
    } else {
      setShowPreloader(false);
    }
  }, []);

  return (
    <>
      <LocalBusiness />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />
      <ReactLenis root>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={router.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <main
                className={`${bodoni_moda.variable} ${barlow.variable} ${readex_pro.variable} ${tajawal.variable} font-body text-[1.55vw] text-black1`}
              >
                {showPreloader && <Loader2 />}
                <Component {...pageProps} />
                {/* {showPreloader ? ( */}
                  <div
                    className={`w-fit h-fit p-[1.5vw] flex items-center rounded-[1vw] bg-white fixed bottom-[5%] left-[5%] drop-shadow-sm shadow-md z-[99] duration-300 ease-in-out ${cookieVisible ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
                  >
                    <div className="w-[35vw] flex flex-col gap-[1.5vw] text-[1.2vw]">
                      <div className="flex flex-col gap-[1vw]">
                      <p className="text-[1.2vw]">
                      By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                      </p>
                    

                      </div>
                      <div className="flex gap-[1vw] items-center">
                      <Link
                        href={"/cookie-policy"}
                        className="text-[1.2vw] w-fit link-line after:absolute after:left-0 relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out"
                        onClick={() => setVisible(false)}
                      >
                        Learn More
                      </Link>
                      <button
                        className="w-fit h-fit px-[1.5vw] py-[0.8vw] bg-black rounded-full text-white text-[1vw] hover:scale-[0.95] duration-300"
                        onClick={() => setVisible(false)}
                      >
                        Accept Cookie
                      </button>

                      </div>
                    </div>
                  </div>
               {/* ) : (
                  <></>
                )}  */}
              </main>
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </ReactLenis>
    </>
  );
};

export default appWithTranslation(App);
