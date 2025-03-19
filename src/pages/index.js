import Footer from "@/components/Footer";
import { fadeIn, fadeUp, paraAnim, titleAnim, verticalLineAnim } from "@/components/gsapAnimations";
import Header from "@/components/Header";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Contact from "@/components/Homepage/Contact";
import Diversify from "@/components/Homepage/Diversify";
import Hero from "@/components/Homepage/Hero";
import Portfolio from "@/components/Homepage/Portfolio";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Stats from "@/components/Homepage/Stats";
import Values from "@/components/Common/Values";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  fadeUp()
  paraAnim()
  titleAnim()
  fadeIn()
 

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Values />
      <Advantage />
      <Diversify/>
      <SectionBreak />
      <Portfolio/>
      <Contact/>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}
