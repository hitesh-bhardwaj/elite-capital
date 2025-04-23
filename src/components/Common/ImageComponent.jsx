import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageComponent = ({ imgsrc , width , height}) => {
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
          { scaleX: 1, duration: 0.5, ease: "power3.out" }
        )
        .to(overlay,
          { scaleX: 0, transformOrigin: "left", duration: 0.5, ease: "power3.out" }
        )
        .to(image,
          { opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.38" 
        );
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
      <span className={`absolute top-0 left-0 bg-[#CE8000] z-20 image-overlay ${width} ${height?height:"h-full"}`}  style={{
      clipPath: 'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)'
    }}></span>
      <Image
        className={`about-image relative z-10 opacity-0 ${width} ${height}`}
        src={imgsrc}
        alt="about image"
        loading="lazy"
      />
    </div>
  );
};

export default ImageComponent;
