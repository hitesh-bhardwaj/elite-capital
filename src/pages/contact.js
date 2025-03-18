import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Hero from '@/components/Contact/Hero';
import Location from '@/components/Contact/Location';
import Footer from '@/components/Footer';
import Contact from '@/components/Common/Contact';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';


export default function AboutPage() {
  fadeUp()
     paraAnim()
     titleAnim()
     fadeIn()
  return (
    <>
    <Header/>
    <Hero/>
    <Location/>
    <Contact/>
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
