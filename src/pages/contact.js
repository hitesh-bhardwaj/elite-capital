import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Location from '@/components/Contact/Location';
import Contact from '@/components/Common/Contact';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/contact/hero-bg.png";
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';

export default function AboutPage() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation("contact"); 
 
  return (
    <>
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
