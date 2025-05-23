import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import About from "@/components/Homepage/About";
import Advantage from "@/components/Homepage/Advantage";
import Assets from "@/components/Homepage/Assets";
import Diversify from "@/components/Homepage/Diversify";
import Portfolio from "@/components/Homepage/Portfolio";
import Values from "@/components/Homepage/Values";
import heroBg from "../../public/assets/images/homepage/hero-bg.jpg"
import Contact from "@/components/Common/Contact";
import Layout from "@/components/Common/Layout";
import Hero from "@/components/Homepage/Hero";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import Counter from "@/components/Homepage/Counter";

export default function Home() {

  fadeUp();
  paraAnim();
  titleAnim();
  lineAnim();
  fadeIn();


  const metadata = {
    title: "Elite Capital",
    metaDescription: "A real-estate focused fund manager delivering premium investment opportunities in real estate that generate exceptional risk-adjusted returns from developments that contribute to thriving communities.​",
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
        <Hero img={heroBg} nextSectionId={"about"} />
        <About />
        <Counter />
        <Values />
        <Advantage />
        <Diversify />
        <Assets />
        <Portfolio />
        <Contact   />
      </Layout>
    </>
  );
}