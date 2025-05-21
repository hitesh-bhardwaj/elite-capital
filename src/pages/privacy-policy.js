import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Content from '@/components/Privacy/Content';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/privacy/hero.png"
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

export default function Privacy() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim();
  const { t } = useTranslation('privacy');

  const metadata = {
    title: "Privacy Policy | Elite Capital ",
    metaDescription: "Learn how Elite Capital collects, uses, and protects your personal data. Read our privacy policy to understand your rights and our data handling practices.​​",
    path: "privacy-policy",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };
  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero img={heroBg} heading={t('hero')} translation={'privacy'} nextSectionId={"privacy-content"} />
        <Content />
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
