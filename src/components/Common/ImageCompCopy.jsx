import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ImageCompCopy = ({ imgsrc }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = document.querySelectorAll('.about-image-wrapper');
      wrappers.forEach(wrapper => {
        const overlay = wrapper.querySelector('.image-overlay');
        const image = wrapper.querySelector('.about-image');
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
            // markers: true,
          }
        });
  
        tl.fromTo(overlay,
          { scaleX: 0, transformOrigin: "right" },
          { scaleX: 1, duration: 1, ease: "power3.out" }
        )
        .to(overlay,
          { scaleX: 0, transformOrigin: "left", duration: 1, ease: "power3.out" }
        )
        .fromTo(image,
            { x: "100%"},
            { x: "0%", duration: 1, ease: "power3.out" },"-=0.985");
      });
    });
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden h-[40%] inline-block w-full max-w-xl about-image-wrapper"
      style={{ clipPath: 'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)' }}
    >
      <span className={`absolute top-0 left-0 bg-[#CE8000] z-20 image-overlay w-[50vw] h-[20vw]`}  style={{
      clipPath: 'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)'
    }}/>
      <Image
        className={`about-image relative z-10  w-[50vw] h-[20vw] `}
        src={imgsrc}
        width={1000}
        height={1000}
        alt="about image"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCompCopy;
