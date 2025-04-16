import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Content from '@/components/Privacy/Content';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/privacy/hero.png"
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';

export default function Privacy() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  const { t } = useTranslation('privacy');
     
  return (
    <>
    <Layout>
    <Hero img={heroBg} heading={t('hero')} translation={'privacy'} nextSectionId={"privacy-content"}/>
    <Content/>
    </Layout>
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
