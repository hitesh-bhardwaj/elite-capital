import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Hero from '@/components/AboutUs/Hero';
import About from '@/components/AboutUs/About';
import SectionBreak from '@/components/AboutUs/SectionBreak';
import Stats from '@/components/AboutUs/Stats';
import Team from '@/components/AboutUs/Team';
import Footer from '@/components/Footer';

export default function AboutPage() {

  return (
    <>
    <Header/>
    <Hero/> 
   <About/>
   <SectionBreak/>
   <Stats/>
   <Team/>
   <Footer/>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about',
      ])),
    },
  }
}
