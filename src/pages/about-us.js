import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import About from '@/components/AboutUs/About';
import Team from '@/components/AboutUs/Team';
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import Values from '@/components/AboutUs/Values';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';
import heroBg from "../../public/assets/images/about/hero-bg.png";
import Contact from '@/components/Common/Contact';
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from "@/lib/json-ld";

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim();
  
  const { t } = useTranslation('about');

  const metadata = {
    title: "About Us | Elite Capital ",
    metaDescription: "Elite Capital is a DFSA-authorised private equity firm in DIFC, combining global fund management with local real estate expertise to deliver exceptional returns.​",
    path: "about-us",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };
  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero img={heroBg} translation={'about'} heading={t('hero')} nextSectionId={"about"} />
        <About />
        <Values />
        <Team />
        <Contact translation={'about'} heading={t('contactHead')} para={t('contactSub')} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about', 'common',
      ])),
    },
  }
}
