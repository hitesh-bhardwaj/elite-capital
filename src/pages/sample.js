
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay, Parallax } from "swiper/modules";
import { useTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import "swiper/css/parallax";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const slides = [
  {
    name: "Shaun Matthews",
    image:
      "/assets/images/homepage/portfolio-1.png",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Alexis Berry",
    image:
      "/assets/images/homepage/hero-bg.jpg",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Billie Pierce",
    image:
      "/assets/images/homepage/portfolio-1.png",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Trevor Copeland",
    image:
      "/assets/images/homepage/hero-bg.jpg",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Bernadette Newman",
    image:
      "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function SwiperSlider() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [navSwiper, setNavSwiper] = useState(null);
  const { t } = useTranslation('common');
  const portfolio = t('portfolio', { returnObjects: true });
  console.log(portfolio)

  useEffect(() => {
    if (mainSwiper && navSwiper) {
      mainSwiper.controller.control = navSwiper;
      navSwiper.controller.control = mainSwiper;
    }
  }, [mainSwiper, navSwiper]);

  return (
    <div className="relative w-full h-screen">
      {/* Main Swiper with Parallax */}
      <Swiper
        loop={true}
        speed={1000}
       
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Controller, Parallax]}
        className="swiper-container main-slider"
        onSwiper={setMainSwiper}
        parallax={true}
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id} >
            <figure
              className="relative w-full h-full"
              data-swiper-parallax="50%"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </figure>
            {portfolio.map((item, id) => (
                    <>
                        <div key={id} className={`slide absolute w-full h-full flex items-center justify-start top-0 left-0 px-[5vw] overflow-hidden`}>
                          
                            <div className="slide__content relative z-[2] text-white top-[-30%]">
                                <h2
                                    className="slide__heading text-[5vw] font-display leading-[1.2]"
                                    dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
                                />
                                <p className="slide__text">{t('portfolioSub')}</p>

                                <div className='address-container absolute bottom-[-120%] left-[0%]'>
                                    <p className='text-[2.9vw] text-white'>
                                        {item.text1}
                                    </p>
                                    <p className='text-white'>{item.text2}</p>

                                </div>
                            </div>

                        </div>


                    </>
                ))}
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-lg">
        <Swiper
          loop={true}
          speed={1000}
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={true}
          slideToClickedSlide={true}
          modules={[Controller]}
          className="swiper-container nav-slider"
          onSwiper={setNavSwiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <figure
                className="w-24 h-24 bg-cover bg-center rounded-full border border-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}