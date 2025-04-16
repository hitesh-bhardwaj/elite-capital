import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Content from '@/components/Privacy/Content';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/privacy/hero.png"
import { useTranslation } from 'next-i18next';

export default function Privacy() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation('privacy');
     
  return (
    <>
    <Header/>
    <Hero img={heroBg} heading={t('hero')} translation={'privacy'} nextSectionId={"privacy-content"}/>
    <Content/>
    <Footer/>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'privacy', 'common'
      ])),
    },
  }
}
