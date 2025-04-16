import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import About from '@/components/AboutUs/About';
import Team from '@/components/AboutUs/Team';
import Footer from '@/components/Footer';
import { fadeIn, fadeUp, paraAnim, titleAnim } from "@/components/gsapAnimations";
import Values from '@/components/AboutUs/Values';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';
import heroBg from "../../public/assets/images/about/hero-bg.png"
import Contact from '@/components/Common/Contact';

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation('about');
  
  return (
    <>
      <Header />
      <Hero img={heroBg} translation={'about'} heading={t('hero')} nextSectionId={"about"}/>
      <About />
      <Values/>
      <Team />
      <Contact translation={'about'} heading={t('contactHead')} para={t('contactSub')} />
      <Footer />
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
