import ImageCompCopy from '@/components/Common/ImageCompCopy'
import React from 'react'
import aboutImage from "../../public/assets/images/homepage/about.png"


const trial = () => {
  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center'>
    <ImageCompCopy imgsrc={aboutImage} />
    </div>
    </>
  )
}

export default trial