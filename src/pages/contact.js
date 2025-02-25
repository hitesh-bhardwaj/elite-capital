import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Hero from '@/components/Contact/Hero';
import Location from '@/components/Contact/Location';
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <>
    <Header/>
    <Hero/>
    <Location/>
    <Footer/>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'contact',
      ])),
    },
  }
}
