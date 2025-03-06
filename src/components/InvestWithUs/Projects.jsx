import React from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import projectsMap from "../../../public/assets/images/invest/projects-map.png"

const Projects = () => {
        const { t } = useTranslation('invest');
    const projects= t('projects', { returnObjects: true });
        
    
  return (
   <section className='w-screen h-full bg-[#F2F2E9] p-[5vw]'>
    <div>
    <h2 data-title-anim className="text-[5vw] w-[50%] font-display leading-1.15 font-medium mb-[3vw]">{t('projectsHead')}</h2>
    <Image src={projectsMap} alt="map-image" loading="lazy" width={1760} height={1235}/>

    <div className='px-[3%] py-[5vw] flex flex-wrap justify-between items-center gap-[4vw]'>
        {projects.map((item,index)=>(
            <div key={index}  className={`w-[25vw] h-[13vw] ${index < 3 ? 'border-b border-black' : ''}`} >
            <p className='font-display font-medium text-[2vw]'>{item.title}</p>
            <p className='mt-[0.5vw]'>{item.location}</p>
            <div className='font-display' dangerouslySetInnerHTML={{__html:item.address}}/>
            
        </div>
        ))}
        
       
        

    </div>
    </div>


   </section>
  )
}

export default Projects