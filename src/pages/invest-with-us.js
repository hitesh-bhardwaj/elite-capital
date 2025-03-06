import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Hero from '@/components/InvestWithUs/Hero';
import About from '@/components/InvestWithUs/About';
import Stats from '@/components/InvestWithUs/Stats';
import Advantage from '@/components/Homepage/Advantage';
import Diversify from '@/components/Homepage/Diversify';
import SectionBreak from '@/components/Homepage/SectionBreak';
import Portfolio from '@/components/InvestWithUs/Portfolio';
import Projects from '@/components/InvestWithUs/Projects';
import Contact from '@/components/Homepage/Contact';


export default function Invest() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Stats/>
    <Advantage/>
    <Diversify/>
   <SectionBreak/>
   <Portfolio/>
   <Projects/>
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
