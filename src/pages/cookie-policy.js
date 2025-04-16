import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import bg from "../../public/assets/images/cookiepolicy/cookie-policy-hero.png";
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/components/CookiePolicy/Content';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';

export default function Cookie() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation("cookie"); 
  return (
    <>
  <Header/>
  <Hero img={bg} translation={'cookie'} heading={t("hero")} para={""} nextSectionId={"cookie-content"}/>
  <Content/>
  <Footer/>
    
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'cookie', 'common'
      ])),
    },
  }
}
