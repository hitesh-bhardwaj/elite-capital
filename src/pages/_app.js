import { Barlow, Bodoni_Moda, Readex_Pro, Tajawal } from "next/font/google";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Loader2 from "@/components/newLoader";
import CookieBanner from "@/components/Common/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { appWithTranslation } from "next-i18next";
import SmoothSroll from "@/utils/SmoothScroll";

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
  const [cookieVisible, setVisible] = useState(true);
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
      <SmoothSroll />
      <main
        className={`${bodoni_moda.variable} ${barlow.variable} ${readex_pro.variable} ${tajawal.variable} font-body text-[1.55vw] text-black1`}
      >
        {showPreloader && <Loader2 />}
        <Component {...pageProps} />
        <CookieBanner cookieVisible={cookieVisible} setVisible={setVisible} />
      </main>

      <Analytics />
    </>
  );
};

export default appWithTranslation(App);
