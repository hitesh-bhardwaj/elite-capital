import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import About from '@/components/InvestWithUs/About';
import Stats from '@/components/InvestWithUs/Stats';
import Portfolio from '@/components/InvestWithUs/Portfolio';
import Contact from '@/components/Common/Contact';
import WhyUs from '@/components/InvestWithUs/WhyUs';
import Residential from '@/components/InvestWithUs/Residential';
import Factors from '@/components/InvestWithUs/Exclusive';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import { useTranslation } from 'next-i18next';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/invest/invest-hero.png"
import Layout from '@/components/Common/Layout';

export default function Invest() {
   fadeUp()
   paraAnim()
   titleAnim()
   fadeIn()
   const { t } = useTranslation('invest');
     
  return (
    <>
    <Layout>
    <Hero img={heroBg} translation={'invest'} heading={t('hero')} nextSectionId={"about"}/>
    <About/>
    <Stats/>
    <WhyUs/>
    <Residential/>
    <Factors/>
   <Portfolio/>
   <Contact/>
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
