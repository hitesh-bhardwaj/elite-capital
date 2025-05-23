import Image from 'next/image'
import React from 'react'
import heroBg from "../../public/assets/images/homepage/hero-bg.jpg"
import Header from '@/components/Common/Header'
import { useTranslation } from "@/lib/i18";
import LinkButton from '@/components/ui/LinkButton'
import { loadTranslations } from '@/lib/i18n-server'

const ErrorPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <section className="relative h-screen w-screen overflow-hidden">

        <div className="absolute inset-0 z-[1]">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            className="object-cover"
            placeholder="blur"
            loading="lazy"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="text-white text-center flex flex-col items-center justify-center h-full w-full gap-[2vw] relative z-[10] ">
          <h1 className=" text-[15vw] font-display leading-[1] mobile:text-[30vw] tablet:text-[20vw] ml-[-3vw]">404</h1>
          <p className="text-[1.5vw] mobile:text-[6.1vw] tablet:text-[3.5vw]">
            {t('errorSub')}
          </p>
          <div className=' mobile:py-[8vw] tablet:py-[4vw]'>
            <LinkButton href="/" text={t('errorCta')} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage

export async function getStaticProps({ locale }) {
  const translations = loadTranslations(locale, ['common'])
  return {
    props: { translations },
  }
}
