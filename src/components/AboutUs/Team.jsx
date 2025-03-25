import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "next-i18next";
import { useLenis } from "lenis/react";
import gsap from "gsap";

const Team = () => {
    const { t } = useTranslation('about');
    const members = t('teamMembers', { returnObjects: true });
    const boardMembers = t('boardMembers', { returnObjects: true });
    const shariahMembers = t('shariahMembers', { returnObjects: true });

    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const lenis = useLenis();

   
    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
        lenis && lenis.stop();
        
       
        setTimeout(() => {
            
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            
           
            gsap.fromTo(modalRef.current, 
                { x: "100%" }, 
                { 
                    x: "0%", 
                    duration: 0.5, 
                    ease: "power3.out" 
                }
            );
        }, 10);
    };
  
   
    const closeModal = () => {
       
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
        });
        
        
        gsap.to(modalRef.current, {
            x: "100%",
            duration: 0.5,
            ease: "power3.in",
            onComplete: () => {
                setIsModalOpen(false);
                setSelectedMember(null);
                lenis && lenis.start();
            }
        });
    };
    
    return (
        <>
            <section className='w-screen h-full bg-[#F2F2E9] pb-[10vw] mobile:overflow-hidden mobile:space-y-[8vw] tablet:pb-[7%]'>
                <div className='px-[5vw] py-[5vw] mobile:space-y-[5vw]'>
                    <h2 data-title-anim className='text-[5vw] font-display mb-[5vw] mobile:text-[12.5vw] tablet:mb-0'>{t('team')}</h2>
                    <div className='mobile:overflow-x-scroll mobile:px-0 mobile:w-screen '>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:flex-nowrap mobile:w-fit'>
                        {members.map((item, index) => (
                            <div 
                                className='w-[28vw] h-full flex flex-col gap-[1vw] fadeUp mobile:w-[70vw] cursor-pointer transition-transform hover:scale-[1.02] tablet:w-[43vw]'
                                key={index} 
                                onClick={() => openModal(item)}
                            >
                                <div className='h-full w-full'>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw] mobile:space-y-[2vw]'>
                                    <p data-para-anim className='text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]'>{item.name}</p>
                                    <p data-para-anim className='h-[5vw] mobile:text-[4.6vw] tablet:text-[2vw]'>{item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                
                <div className='p-[5vw] mobile:space-y-[5vw]'>
                    <h2 data-title-anim className='text-[3vw] font-display mb-[5vw] mobile:text-[8.2vw] tablet:text-[5vw] tablet:mb-0'>{t('teamSub')}</h2>
                    <div className='mobile:overflow-x-scroll mobile:px-0 mobile:w-screen mobile:h-full '>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] mobile:w-fit mobile:flex-nowrap mobile:pb-[5vw] tablet:gap-y-[7vw]'>
                        {boardMembers.map((item, index) => (
                            <div 
                                className='w-[28vw] h-full flex flex-col gap-[1vw] fadeUp mobile:w-[70vw] cursor-pointer transition-transform hover:scale-[1.02] tablet:w-[43vw]' 
                                key={index} 
                                onClick={() => openModal(item)}
                            >
                                <div className='h-full w-full'>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw] mobile:space-y-[2vw]'>
                                    <p data-para-anim className='text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]'>{item.name}</p>
                                    <p data-para-anim className='mobile:text-[4.6vw] tablet:text-[2vw]'>{item.des}</p>
                                
                                    <ul className='list-disc pt-[1vw] pl-[1.5vw] mobile:pl-[4vw]'>
                                        {item.role.map((list, index) => (
                                            <li data-para-anim className='text-[1.2vw] mobile:text-[4vw] tablet:text-[1.8vw]' key={index}>{list}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                <div className='p-[5vw] mobile:space-y-[12vw]'>
                    <h2 data-title-anim className='text-[3vw] font-display mb-[5vw] mobile:text-[10vw] tablet:text-[5vw] tablet:mt-[5vw] tablet:mb-0'>{t('teamSub2')}</h2>
                    <div className='mobile:overflow-x-scroll mobile:px-0 mobile:w-screen mobile:h-full mobile:pb-[5vw]'>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[2vw] mobile:w-fit mobile:flex-nowrap'>
                        {shariahMembers.map((item, index) => (
                            <div 
                                className='w-[28vw] h-full flex flex-col gap-[1vw] fadeUp mobile:w-[70vw]  cursor-pointer transition-transform hover:scale-[1.02] tablet:w-[43vw]' 
                                key={index} 
                                onClick={() => openModal(item)}
                            >
                                <div className='h-full w-full'>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw]'>
                                    <p data-para-anim className='text-[2.5vw] leading-[1.2] font-display mobile:text-[8vw] tablet:text-[3vw]'>{item.name}</p>
                                    <p data-para-anim className='h-[5vw] mobile:text-[4vw] mobile:h-[20vw] tablet:text-[2vw]'>{item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div 
                        className='text-[2.5vw] space-y-[2vw] fadeUp mobile:space-y-[4vw] mobile:text-[4.6vw] mobile:w-[90%] tablet:mt-[7vw]' 
                        dangerouslySetInnerHTML={{__html: t('shariahSub')}}
                    />
                </div>
            </section>

           
            {isModalOpen && selectedMember && (
                <>
                   
                    <div 
                        ref={overlayRef}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 opacity-0"
                        onClick={closeModal}
                    />
                    
                   
                    <div data-lenis-prevent 
                        ref={modalRef}
                        className="fixed top-0 right-0 h-screen w-[55vw] bg-[#98AD7E] z-50 shadow-lg overflow-y-auto mobile:w-full tablet:w-[70%]  "
                        style={{ transform: 'translateX(100%)' }}
                    >
                        <button
                            className="absolute top-5 left-5 z-[90] bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <Image src="/icons/cross.svg" alt='close' height={15} width={15} />
                        </button>
                        
                       
                        <div 
                           
                            className='h-full  p-[3vw] pt-[8vw] mobile:pt-[20vw] mobile:px-[8vw] tablet:pt-[12vw] '
                        >
                           
                            <div className="w-full flex flex-col">
                                <div className="relative w-[20vw] h-[26vw] mobile:w-[50vw] mobile:h-[65vw] tablet:w-[40vw] tablet:h-[50vw]">
                                    <Image 
                                        src={selectedMember.img} 
                                        fill
                                        alt={selectedMember.name}
                                        className='object-contain'

                                    />
                                </div>
                                
                                <div className="mt-[2vw] mobile:mt-[4vw]">
                                    <p className="text-[2.9vw] leading-[1.2] font-display mobile:text-[7vw] tablet:text-[3.5vw]">
                                        {selectedMember.name}
                                    </p>
                                    <p className="py-[0.5vw] mobile:text-[4vw] mobile:py-[2vw]">{selectedMember.des}</p>
                                    <span className='w-full h-[0.5px] bg-black my-[1vw] block'/>
                                    <div className='pl-[2vw] pt-[1vw]'>
                                        <ul className='list-disc'>
                                            {selectedMember.features && selectedMember.features.map((item, index) => (
                                                <li  key={index} className="mobile:text-[4vw] py-[0.5vw] tablet:text-[2vw]">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Team;