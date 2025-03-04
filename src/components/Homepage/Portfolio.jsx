import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import LinkButton from '../ui/LinkButton';

const Portfolio = () => {
    const slidesRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const isAnimating = useRef(false);
   const { t } = useTranslation('common');
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
        <section className='h-screen w-screen relative'>
            <div className="slides relative w-full h-full overflow-hidden" ref={slidesRef}>
                {portfolio.map((item, index) => (
                    <>
                        <div key={index} className={`slide absolute w-full h-full flex items-center justify-center opacity-0 overflow-hidden ${index === current ? "slide--current" : ""}`}>
                            <img src={item.image} alt={item.text1} className="absolute w-full h-full object-cover slide__img" />
                            <div className="slide__content relative z-[2] text-white left-[-25%] top-[-30%]">
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
            </div>

            <div className="progress-container absolute top-[40%] left-[3%] w-[50%] flex items-center">
                <span className="text-white text-[1.2vw]">
                    {(current + 1).toString().padStart(2, "0")}
                </span>
                <div className="progress-bar relative w-[20%] h-[3px] bg-gray-500 mx-[1vw] rounded-full overflow-hidden">
                    <div className="progress-fill h-full bg-white transition-all duration-500" style={{ width: `${((current + 1) / slidesTotal) * 100}%` }}></div>
                </div>
                <span className="text-white text-[1.2vw]">
                    {slidesTotal.toString().padStart(2, "0")}
                </span>
            </div>

            <div className='absolute bottom-[10%] left-[3%]'>
                <LinkButton href={"/"} text={"All Portfolio"} />
            </div>



            <div className="slides-nav absolute top-[70%] left-[3%] flex items-center justify-center gap-[2vw]">
                <button className="slides-nav__item slides-nav__item--prev border  w-[50px] h-[50px] rounded-full grid items-center cursor-pointer border-white p-4" onClick={() => navigate(-1)}><div>
                    <Image src="/icons/left-arrow.svg" height={30} width={30} alt='left-aerrow' /></div></button>
                <button className="slides-nav__item slides-nav__item--next border w-[50px] h-[50px] rounded-full grid items-center cursor-pointer border-white p-4" onClick={() => navigate(1)}><div>
                    <Image src="/icons/right-arrow.svg" height={30} width={30} alt='right-aerrow' /></div></button>
            </div>
        </section>
    );
};

export default Portfolio;
