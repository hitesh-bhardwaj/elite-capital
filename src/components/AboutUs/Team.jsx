import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import { useLenis } from "lenis/react";



const Team = () => {
    const { t } = useTranslation('about');
    const members = t('teamMembers', { returnObjects: true });
    const boardMembers = t('boardMembers', { returnObjects: true });
    const shariahMembers = t('shariahMembers', { returnObjects: true });

    const [selectedMember, setSelectedMember] = useState(null);
    const [isClosing, setIsClosing] = useState(false); 
  const lenis = useLenis();

  
    const openModal = (member) => {
      setSelectedMember(member);
      setIsClosing(false); 
      lenis && lenis.stop();
    };
  
    const closeModal = () => {
      setIsClosing(true); 
      setTimeout(() => setSelectedMember(null), 300); 
      lenis && lenis.start();
    };

    
    return (
        <>
            <section className='w-screen h-full bg-[#F2F2E9] pb-[10vw]'>
                <div className='px-[5vw] py-[5vw]'>
                    <h2 data-title-anim className='text-[5vw] font-display mb-[5vw]'>{t('team')}</h2>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw]'>
                        {members.map((item, index) => (
                            <div className='w-[28vw] h-full  flex flex-col gap-[1vw] fadeUp' key={index} onClick={() => openModal(item)}>
                                <div className='h-full w-full'>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw]'>
                                <p data-para-anim className=' text-[2.5vw] leading-[1.2] font-display'>{item.name}</p>
                                <p data-para-anim className=' h-[5vw]'>{item.des}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
                <div className='p-[5vw]'>
                    <h2 data-title-anim className='text-[3vw] font-display mb-[5vw]'>{t('teamSub')}</h2>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[3vw] '>
                        {boardMembers.map((item, index) => (
                            <div className='w-[28vw] h-full  flex flex-col gap-[1vw] fadeUp' key={index} onClick={() => openModal(item)}>
                                <div className='h-full w-full '>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw]'>
                                <p data-para-anim className='  text-[2.5vw] leading-[1.2] font-display'>{item.name}</p>
                                <p data-para-anim className=''>{item.des}</p>
                                
                                <ul className='list-disc pt-[1vw]  pl-[1.5vw]'>
                                    {item.role.map((list, index) => (
                                        <li data-para-anim className='text-[1.2vw]' key={index}>{list}</li>
                                    ))}
                                </ul>
                                </div>
                                

                            </div>
                        ))}
                    </div>
                </div>


                <div className='p-[5vw]'>
                    <h2 data-title-anim className='text-[3vw] font-display mb-[5vw]'>{t('teamSub2')}</h2>
                    <div className='w-full h-full flex flex-wrap justify-start gap-[3vw] gap-y-[2vw] '>
                        {shariahMembers.map((item, index) => (
                            <div className='w-[28vw] h-full  flex flex-col gap-[1vw] fadeUp' key={index} onClick={() => openModal(item)}>
                                <div className='h-full w-full '>
                                    <Image
                                        src={item.img}
                                        height={626}
                                        width={535}
                                        alt='team'
                                    />
                                </div>
                                <div className='space-y-[0.5vw]'>
                                <p data-para-anim className='  text-[2.5vw] leading-[1.2] font-display'>{item.name}</p>
                                <p data-para-anim className=' h-[5vw]'>{item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-[2.5vw] font-display space-y-[2vw] fadeUp' dangerouslySetInnerHTML={{__html: t('shariahSub')}}/>
                </div>
            </section>

            {selectedMember && (
        <div
          className={`fixed top-0 right-0 h-screen w-[55vw] bg-[#98AD7E]  z-[50] p-[3vw] shadow-lg  transition-transform duration-300 ease-in-out ${
            isClosing ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <button
            className="absolute top-5 left-5   z-[90] bg-white p-3 rounded-full"
            onClick={closeModal}
          >
            <Image src={"/icons/cross.svg"} alt='cross-icon' height={15} width={15}/>
          </button>
          <div className='flex flex-col justify-center h-full pl-[3vw] pt-[3vw]'>
          <div className="h-full w-full ">
            <Image src={selectedMember.img} width={382} height={498} alt="team" className='w-[20vw] h-[26vw]'/>
          </div>
          <p className="pt-[1vw] text-[2.9vw] leading-[1.2] font-display">
            {selectedMember.name}
          </p>
          <p className="py-[0.5vw] h-[5vw]">{selectedMember.des}</p>
          <span className='w-[95%] h-[0.5px] bg-black'/>
          <div className='pl-[2vw] pt-[1vw]'>
            <ul className='list-disc'>
            {selectedMember.features.map((item, index) => (
                <li>{item}</li>
            ))}
            </ul>
          </div>
        </div>
        </div>
      )}
        </>
    )
}

export default Team