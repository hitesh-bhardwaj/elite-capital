import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import bg from "../../public/assets/images/cookiepolicy/cookie-policy-hero.png";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import Content from '@/components/CookiePolicy/Content';
import Hero from '@/components/Common/Hero';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';

export default function Cookie() {
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();
  lineAnim();
  const { t } = useTranslation("cookie"); 
  return (
    <>
  <Layout>
  <Hero img={bg} translation={'cookie'} heading={t("hero")} para={""} nextSectionId={"cookie-content"} />
  <Content/>
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
