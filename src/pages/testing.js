import Counter from "@/components/Homepage/Counter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Testing() {
    return (
        <>
            <Counter />
        </>
    )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home', 'common'
      ])),
    },
  }
}