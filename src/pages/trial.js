import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Common/Layout';
import BoardofDirectors from '@/components/AboutUs/BoardofDirectors-copy';

export default function AboutPage() {
  const { t } = useTranslation('about');
  
  return (
    <>
      <Layout>
      <BoardofDirectors/>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about', 'common',
      ])),
    },
  }
}
