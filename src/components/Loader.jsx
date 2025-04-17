import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const svgWrapperRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);

  useEffect(() => {
    gsap.set([path1Ref.current, path2Ref.current, path3Ref.current], {
      scaleX: 0,
      transformOrigin: 'left center',
    });

    const tl = gsap.timeline();

    tl.to(path3Ref.current, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, 0.2)
      .to(path1Ref.current, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '+=0.2')
      .to(path2Ref.current, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '+=0.2')

      .to(svgWrapperRef.current, {
        x: '-44vw', 
        y: '-42vh', 
        opacity:0,
        scale: 0.3,
        duration: 1.5,
        ease: 'power3.inOut',
      }, '+=0.5')
      .to(loaderRef.current, {
        backgroundColor: 'transparent',
        duration: 1,
        ease: 'power2.inOut',
      }, '-=0.8')
      .set(loaderRef.current, { pointerEvents: 'none' });

  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-screen h-screen bg-white z-[200] flex items-center justify-center overflow-hidden"
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
  );
};

export default Loader;
