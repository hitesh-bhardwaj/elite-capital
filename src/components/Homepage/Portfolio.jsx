import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import LinkButton from '../ui/LinkButton';

const Portfolio = () => {
    const slidesRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const isAnimating = useRef(false);
   const { t } = useTranslation('home');
   const portfolio = t('portfolio', { returnObjects: true });
    const slidesTotal = portfolio.length;

    const navigate = (direction) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const previous = current;
        const next = direction === 1 ? (current < slidesTotal - 1 ? current + 1 : 0) : (current > 0 ? current - 1 : slidesTotal - 1);
        setCurrent(next);

        const currentSlide = slidesRef.current.children[previous];
        const upcomingSlide = slidesRef.current.children[next];

        const currentInner = currentSlide.querySelector('.slide__img');
        const upcomingInner = upcomingSlide.querySelector('.slide__img');

        const currentContent = currentSlide.querySelector('.slide__content');
        const upcomingContent = upcomingSlide.querySelector('.slide__content');

        gsap.timeline({
            defaults: { duration: 1.5, ease: 'power3.out' },
            onComplete: () => {
                gsap.set(currentSlide, { opacity: 1 });
                isAnimating.current = false;
            }
        })
            .set(upcomingSlide, { opacity: 1, x: direction * 100 + "%" })
            .set(upcomingContent, { opacity: 0, y: 30 }, "-=0.5")
            .to(currentSlide, { x: -direction * 100 + "%" }, 0)
            .to(currentInner, { x: direction * 60 + "%" }, 0)
            .to(currentContent, { y: -30, opacity: 1 }, 0)
            .to(upcomingSlide, { x: "0%" }, 0)
            .to(upcomingInner, { x: "0%" }, 0)
            .to(upcomingContent, { y: 0, opacity: 1 }, "-=0.9");
    };

    return (
        <section className='h-screen w-screen relative tablet:h-[100vw]'>
            <div className="slides relative w-full h-full overflow-hidden" ref={slidesRef}>
                {portfolio.map((item, index) => (
                    <>
                        <div key={index} className={`slide absolute w-full h-full flex items-center justify-center py-[5vw] opacity-0 overflow-hidden ${index === current ? "slide--current" : ""}`}>
                            <img src={item.image} alt={item.text1} className="absolute w-full h-full object-cover slide__img" />
                <span className="h-full w-full bg-black/30 z-[1] absolute top-0 left-0"/>
                            
                            <div className="slide__content relative z-[2] text-white left-[3%] rtl:right-[3%] top-[-30%]">
                                <h2 data-title-anim
                                    className="slide__heading heading-1 w-[70%] mobile:w-[80%] tablet:w-[90%]"
                                    dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
                                />
                                <p data-para-anim className="slide__text content pt-[3vw]">{t('portfolioSub')}</p>

                                <div className='address-container absolute bottom-[-80%] left-[0%] rtl:right-[1%] mobile:bottom-[-90%]'>
                                    <h3 data-para-anim className='heading-2 text-white '>
                                        {item.text1}
                                    </h3>
                                    <p data-para-anim className='text-white content'>{item.text2}</p>

                                </div>
                            </div>

                        </div>


                    </>
                ))}
            </div>

            <div className="progress-container absolute top-[45%] z-[2] left-[3%] w-[50%] flex items-center fadeUp rtl:right-[3%] mobile:w-full tablet:top-[60%]">
                <span className="text-white content">
                    {(current + 1).toString().padStart(2, "0")}
                </span>
                <div className="progress-bar relative w-[20%] h-[3px] bg-gray-500 mx-[1vw] rounded-full overflow-hidden mobile:w-[80%]">
                    <div className="progress-fill h-full bg-white transition-all duration-500" style={{ width: `${((current + 1) / slidesTotal) * 100}%` }}></div>
                </div>
                <span className="text-white content">
                    {slidesTotal.toString().padStart(2, "0")}
                </span>
            </div>

            <div className='absolute bottom-[10%] left-[3%] rtl:right-[3%] z-[2]'>
                <LinkButton href={"/"} text={"All Portfolio"}  className='fadeUp'/>
            </div>



            <div className="slides-nav absolute top-[70%] left-[3%] z-[2] flex items-center justify-center gap-[2vw] rtl:right-[-80%]">
                <button className="slides-nav__item slides-nav__item--prev border  w-[50px] h-[50px] rounded-full grid items-center cursor-pointer border-white p-4 fadeUp" onClick={() => navigate(-1)}><div>
                    <Image src="/icons/left-arrow.svg" height={30} width={30} alt='left-arrow' /></div></button>
                <button className="slides-nav__item slides-nav__item--next border w-[50px] h-[50px] rounded-full grid items-center cursor-pointer border-white p-4 fadeUp" onClick={() => navigate(1)}><div>
                    <Image src="/icons/right-arrow.svg" height={30} width={30} alt='right-arrow' /></div></button>
            </div>
        </section>
    );
};

export default Portfolio;
