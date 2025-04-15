import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/Privacy/Hero';
import Content from '@/components/Privacy/Content';


export default function Privacy() {
  fadeUp()
     paraAnim()
     titleAnim()
     fadeIn()
  return (
    <>
    <Header/>
    <Hero/>
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
