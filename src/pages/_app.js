import { Barlow, Bodoni_Moda} from "next/font/google";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next'
import { ReactLenis } from "lenis/react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"; 
import Loader from "@/components/Loader";
import Loader2 from "@/components/newLoader";
import { ImageObjectJsonLd, LocalBusiness, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";


const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
})
const barlow = Barlow({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
  weight: ["300","400","500","600"]
})

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   window.addEventListener("beforeunload", handleRouteChange);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleRouteChange);
  //   };
  // }, []);


  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    document.querySelectorAll('Swiper').forEach(swiper => {
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
      if(typeof sessionStorage !=="undefined"){
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowPreloader(true);
            const preloaderTimeout = setTimeout(() => {
                setShowPreloader(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 3400);
            return () => clearTimeout(preloaderTimeout);
        } else {
            setShowPreloader(false);
        }
      } else{
        setShowPreloader(false);
      }
    }, []);
  return (
    <>
      {/* <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <title>Elite Capital</title>
        <meta name="description" content="Real Assets, Real Returns" />
      </Head> */}
      <LocalBusiness/>
      <OrganizationJsonLd/>
      <WebsiteJsonLd/>
      <ImageObjectJsonLd/>
      
      <ReactLenis root>
      <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
              <m.div
                key={router.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.6 }}
              >
      <main className={`${bodoni_moda.variable} ${barlow.variable} font-body text-[1.55vw] text-black1`}>
      {showPreloader && <Loader2/>}
        <Component {...pageProps} />
      </main>
      </m.div>
            </AnimatePresence>
            </LazyMotion>
      </ReactLenis>
    </>
  )
}

export default appWithTranslation(App);
