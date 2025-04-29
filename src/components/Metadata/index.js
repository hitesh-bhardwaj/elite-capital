import { NextSeo } from 'next-seo'
import React from 'react'
import { homepage } from '@/lib/util'
import { useRouter } from 'next/router';

const Metadata = ({metadata}) => {
     const { locale } = useRouter();
      const fpath = locale ==='ar'? `ar/${metadata.path}` : `${metadata.path}`;
  return (
   <NextSeo
                   title={metadata.title}
                   description={metadata.metaDescription}
                   openGraph={{
                       type: 'website',
                       url: `${homepage}/${metadata.path}`,
                       title: metadata.title,
                       "description": metadata.metaDescription,
                       images: [
                        {
                            url: `${homepage}/assets/seo/${metadata.img}`,
                            width: 1290,
                            height: 594,
                            alt: "Page Og Image",
                            type: "image/png",
                        },
                    ],
                       siteName: "Elite Capital",
                   }}
                   canonical={`${homepage}/${fpath}`}
                   languageAlternates={[
                    {
                      hrefLang: 'en-US',
                      href: `${homepage}/${metadata.path}`, 
                    },
                    {
                      hrefLang: 'ar',
                      href: `${homepage}/ar/${metadata.path}`, 
                    },
                  ]}
               />
  )
}

export default Metadata