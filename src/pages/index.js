import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Assets from "@/components/Homepage/Assets";
import Diversify from "@/components/Homepage/Diversify";
import Portfolio from "@/components/Homepage/Portfolio";
import Stats from "@/components/Homepage/Stats";
import Values from "@/components/Homepage/Values";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import heroBg from "../../public/assets/images/homepage/hero-bg.jpg"
import { useTranslation } from "next-i18next";
import Hero from "@/components/Common/Hero";
import Contact from "@/components/Common/Contact";
import Layout from "@/components/Common/Layout";

export default function Home() {
  fadeUp();
  paraAnim();
  titleAnim();
  lineAnim();
  fadeIn();
  const { t } = useTranslation('home');
  return (
    <>
      <Layout>
      <Hero img={heroBg} translation={'home'} heading={t('hero')} para={t('heroSub')} nextSectionId={"about"} />
      <About />
      <Stats />
      <Values/>
      <Advantage />
      <Diversify/>
      <Assets/>
      <Portfolio/>
     <Contact translation={'home'} heading= {t("contactHead")} para={t("contactSub")}/>
     </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}
