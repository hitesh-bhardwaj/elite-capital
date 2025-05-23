import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import bg from "../../public/assets/images/cookiepolicy/cookie-policy-hero.png";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Content from '@/components/CookiePolicy/Content';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

export default function Cookie() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim();
  const { t } = useTranslation("cookie"); 
  const metadata = {
    title: "Cookie Policy | Elite Capital  ",
    metaDescription: "Learn how Elite Capital uses cookies to enhance your experience, including types of cookies used and how to manage your preferences.​​",
    path: "cookie-policy",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };
  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
  <Layout>
  <Hero img={bg} translation={'cookie'} heading={t("hero")} para={""} nextSectionId={"cookie-content"} />
  <Content />
  </Layout>
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
