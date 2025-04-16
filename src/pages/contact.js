import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Location from '@/components/Contact/Location';
import Footer from '@/components/Footer';
import Contact from '@/components/Common/Contact';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/contact/hero-bg.png";
import { useTranslation } from 'next-i18next';

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation("contact");  
  return (
    <>
    <Header/>
    <Hero img={heroBg} heading={t("hero")} translation={'contact'} nextSectionId={"location"}/>
    <Location/>
    <Contact translation={'contact'} heading={t('contactFormHead')} para={t('contactSub')} />
    <Footer/>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'contact', 'common'
      ])),
    },
  }
}
