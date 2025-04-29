import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Location from '@/components/Contact/Location';
import Contact from '@/components/Common/Contact';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/contact/hero-bg.png";
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation("contact"); 
 
  const metadata = {
    title: "Contact Us | Elite Capital ",
    metaDescription: "Reach out to Elite Capital, a DFSA-authorised real estate investment firm in DIFC. Call +971 44 99 2400 or email info@elitecapitalinvestments.com.​​",
    path: "contact",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };
  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
    <Layout>
    <Hero img={heroBg} heading={t("hero")} translation={'contact'} nextSectionId={"location"}/>
    <Location/>
    <Contact translation={'contact'} heading={t('contactFormHead')} para={t('contactSub')} />
    </Layout>
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
