import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Hero from '@/components/InvestWithUs/Hero';
import About from '@/components/InvestWithUs/About';
import Stats from '@/components/InvestWithUs/Stats';
import Portfolio from '@/components/InvestWithUs/Portfolio';
import Contact from '@/components/Common/Contact';
import WhyUs from '@/components/InvestWithUs/WhyUs';
import Residential from '@/components/InvestWithUs/Residential';
import Factors from '@/components/InvestWithUs/Factors';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';



export default function Invest() {
   fadeUp()
     paraAnim()
     titleAnim()
     fadeIn()
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Stats/>
    <WhyUs/>
    <Residential/>
    <Factors/>
   <Portfolio/>
   <Contact/>
    <Footer/>
  
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
