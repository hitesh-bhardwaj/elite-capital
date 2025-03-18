import React from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import projectsMap from "../../../public/assets/images/invest/projects-map.png"

const Projects = () => {
        const { t } = useTranslation('invest');        
    
  return (
   <section className='w-screen h-full bg-[#F2F2E9] p-[5vw]'>
    <div>
    <h2 data-title-anim className="text-[5vw] w-[50%] font-display leading-1.15 py-[3vw] mb-[3vw]">{t('projectsHead')}</h2>
    <Image src={projectsMap} alt="map-image" loading="lazy" width={1760} height={1235} className='fadeUp'/>
    </div>


   </section>
  )
}

export default Projects