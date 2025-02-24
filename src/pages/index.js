import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Hero from "@/components/Homepage/Hero";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Stats from "@/components/Homepage/Stats";
import Values from "@/components/Homepage/Values";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Values />
      <Advantage />
      <SectionBreak />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
