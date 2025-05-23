import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Hero from '@/components/Common/Hero';
import heroBg from "../../public/assets/images/privacy/hero.png"
import { useTranslation } from "@/lib/i18";
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import Content from '@/components/Disclaimer/Content';
import { loadTranslations } from '@/lib/i18n-server';

export default function Privacy() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim();
  const { t } = useTranslation('disclaimer');

  const metadata = { 
    title: "Disclaimer | Elite Capital ",
    metaDescription: "Learn how Elite Capital collects, uses, and protects your personal data. Read our privacy policy to understand your rights and our data handling practices.​​",
    path: "disclaimer",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };
  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero img={heroBg} heading={t('hero')} translation={'disclaimer'} nextSectionId={"disclaimer-content"} />
        <Content />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const translations = loadTranslations(locale, ['disclaimer', 'common'])
  return {
    props: { translations },
  }
}
