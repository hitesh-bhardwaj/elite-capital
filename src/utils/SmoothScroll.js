import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const SmoothSroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, []);

  return <ReactLenis root options={{ autoRaf: false, duration: 1.2 }} ref={lenisRef} />
}

export default SmoothSroll;