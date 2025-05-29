import { fadeIn, fadeUp, paraAnim, titleAnim } from "@/components/gsapAnimations";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Diversify from "@/components/Homepage/Diversify";
import Portfolio from "@/components/Homepage/Portfolio";
import Layout from "@/components/Common/Layout";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import dynamic from "next/dynamic";

// Dynamic imports
const Hero = dynamic(() => import("@/components/Homepage/Hero"));
const Assets = dynamic(() => import("@/components/Homepage/Assets"));
const Values = dynamic(() => import("@/components/Homepage/Values"));
const Contact = dynamic(() => import("@/components/Common/Contact"));
const Counter = dynamic(() => import("@/components/Homepage/Counter"));

import heroBg from "../../public/assets/images/homepage/hero-bg.jpg";

export default function Home() {
  // Animations
  fadeUp();
  paraAnim();
  titleAnim();
  fadeIn();

  const metadata = {
    title: "Elite Capital",
    metaDescription:
      "A real-estate focused fund manager delivering premium investment opportunities in real estate that generate exceptional risk-adjusted returns from developments that contribute to thriving communities.​",
    path: "",
    img: "homepage.png",
    date_published: "2025-04-29T00:00",
    date_modified: "2025-04-29T00:00",
  };

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero
          img={heroBg}
          nextSectionId={"about"}
          heading={"Providing investors with access to Real Assets with Real Returns."}
          para={
            "A real-estate focussed fund manager delivering premium investment opportunities in real estate that generate exceptional risk adjusted returns from developments that contribute to thriving communities."
          }
        />
        <About />
        <Counter />
        <Values />
        <Advantage />
        <Diversify />
        <Assets />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
}
