import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Hero from '@/components/AboutUs/Hero';
import About from '@/components/AboutUs/About';
import Team from '@/components/AboutUs/Team';
import Footer from '@/components/Footer';
import { fadeIn, fadeUp, paraAnim, titleAnim } from "@/components/gsapAnimations";
// import Values from '@/components/Common/Values';
import Contact from '@/components/Common/Contact';
import Values from '@/components/AboutUs/Values';

export default function AboutPage() {
  
  fadeUp()
  paraAnim()
  titleAnim()
  fadeIn()
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Values/>
      {/* <Values /> */}
      <Team />
      <Contact />
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
