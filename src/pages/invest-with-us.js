import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import About from '@/components/InvestWithUs/About';
import Stats from '@/components/InvestWithUs/Stats';
import Portfolio from '@/components/InvestWithUs/Portfolio';
import Contact from '@/components/Common/Contact';
import WhyUs from '@/components/InvestWithUs/WhyUs';
import Residential from '@/components/InvestWithUs/Residential';
import Factors from '@/components/InvestWithUs/Exclusive';
import { blockAnim, fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import { useTranslation } from 'next-i18next';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/invest/invest-hero.png"
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from "@/lib/json-ld";

export default function Invest() {
  fadeUp()
  paraAnim()
  titleAnim()
  fadeIn()
  const { t } = useTranslation('invest');
  const metadata = {
    title: "Invest With Us | Elite Capital ",
    metaDescription: "Partner with Elite Capital to invest in DFSA-authorised, community-focused real estate developments in Ontario, offering superior risk-adjusted returns.​​",
    path: "invest-with-us",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero img={heroBg} translation={'invest'} heading={t('hero')} nextSectionId={"about"} />
        <About />
        <Stats />
        <WhyUs />
        <Residential />
        <Factors />
        <Portfolio />
        <Contact translation={'invest'} heading={t('contactHead')} para={t('contactSub')} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'invest', 'common'
      ])),
    },
  }
}
