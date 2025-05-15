import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {useLenis} from "lenis/react"

const Loader2 = () => {
  const loaderRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const lenis = useLenis();
  const svgWrapperRef = useRef(null)

  useEffect(() => {
    gsap.set([path1Ref.current, path2Ref.current, path3Ref.current], {
      scaleX: 0,
      transformOrigin: 'left center',
    });

    gsap.set(svgWrapperRef.current, {
      transformOrigin: 'center center',
    });
  
    const tl = gsap.timeline();


  
    tl.to(path3Ref.current, {
      scaleX: 1,
      duration: 0.5,
      delay:0.2,
      ease: 'power2.out',
      
    })
      .to(path1Ref.current, {
        scaleX: 1,
        duration: 0.5,
        delay:-0.2,
        ease: 'power2.out',
      })
      .to(path2Ref.current, {
        scaleX: 1,
        duration: 0.5,
        delay:-0.2, 
        ease: 'power2.out',
      }) 
      .to(loaderRef.current, {
        duration: 1,
        yPercent:-100,
        ease: 'power2.inOut',
      }) 
  
      .set(loaderRef.current, { pointerEvents: 'none' });

  }, []);
      
  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 2200);

    return()=>clearTimeout(timeout)
  }, [lenis]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-screen h-screen bg-white z-[200] flex items-center justify-center overflow-hidden"
       style={{ perspective: '1000px', transformStyle: 'preserve-3d', }}
    >
      <div ref={svgWrapperRef} className="w-[100px] h-[100px]">
        <svg width="100" height="100" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={path1Ref}
            d="M7.27734 10.8817V17.5081H21.9253L27.1156 10.8817H7.27734Z"
            fill="#CE8000"
          />
          <path
            ref={path2Ref}
            d="M0.650391 20.8111V27.417H15.3394L20.4887 20.8111H0.650391Z"
            fill="#CE8000"
          />
          <path
            ref={path3Ref}
            d="M33.7211 0.972778H13.8828V7.5787H28.5102L33.7211 0.972778Z"
            fill="#CE8000"
          />
        </svg>
      </div>
    </div>
  );}

  export default Loader2