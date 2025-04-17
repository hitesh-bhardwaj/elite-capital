import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import About from '@/components/AboutUs/About';
import Team from '@/components/AboutUs/Team';
import { blockAnim, fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import Values from '@/components/AboutUs/Values';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';
import heroBg from "../../public/assets/images/about/hero-bg.png"
import Contact from '@/components/Common/Contact';
import Layout from '@/components/Common/Layout';

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim()
  const { t } = useTranslation('about');
  
  return (
    <>
      <Layout>
      <Hero img={heroBg} translation={'about'} heading={t('hero')} nextSectionId={"about"}/>
      <About />
      <Values/>
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
