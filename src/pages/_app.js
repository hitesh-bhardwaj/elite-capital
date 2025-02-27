import { Bodoni_Moda, Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next'
import { ReactLenis } from "lenis/react";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
})

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
})

const App = ({ Component, pageProps }) => {

  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "ae" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    document.querySelectorAll('Swiper').forEach(swiper => {
      swiper.setAttribute("dir", dir);
    });
  }, [locale]); 

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <title>Elite Capital</title>
        <meta name="description" content="Real Assets, Real Returns" />
      </Head>
      <ReactLenis root>
      <main className={`${bodoni_moda.variable} ${bricolage_grotesque.variable} font-body text-[1.55vw] text-black1`}>
        <Component {...pageProps} />
      </main>
      </ReactLenis>
    </>
  )
}

export default appWithTranslation(App);
