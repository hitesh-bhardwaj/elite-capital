import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Diversify from "@/components/Homepage/Diversify";
import Portfolio from "@/components/Homepage/Portfolio";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import heroBg from "../../public/assets/images/homepage/hero-bg.jpg"
import { useTranslation } from "next-i18next";
import Layout from "@/components/Common/Layout";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Homepage/Hero"));
const Assets = dynamic(() => import("@/components/Homepage/Assets"));
const Values = dynamic(() => import("@/components/Homepage/Values"));
const Contact = dynamic(() => import("@/components/Common/Contact"));
const Counter = dynamic(() => import("@/components/Homepage/Counter"));

export default function Home() {

  fadeUp();
  paraAnim();
  titleAnim();
  lineAnim();
  fadeIn();

  const { t } = useTranslation('home');

  const metadata = {
    title: "Elite Capital",
    metaDescription: "A real-estate focused fund manager delivering premium investment opportunities in real estate that generate exceptional risk-adjusted returns from developments that contribute to thriving communities.​",
    path: "",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero img={heroBg} translation={'home'} heading={t('hero')} para={t('heroSub')} nextSectionId={"about"} />
        <About />
        <Counter />
        <Values />
        <Advantage />
        <Diversify />
        <Assets />
        <Portfolio />
        <Contact translation={'home'} heading={t("contactHead")} para={t("contactSub")} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home', 'common'
      ])),
    },
  }
}
