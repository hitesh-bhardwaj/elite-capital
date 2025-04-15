import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/CookiePolicy/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/components/CookiePolicy/Content';


export default function Cookie() {
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
        'cookie', 'common'
      ])),
    },
  }
}
