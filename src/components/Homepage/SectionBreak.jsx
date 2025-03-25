import { useTranslation } from "next-i18next";
import Image from "next/image";
import image from "../../../public/assets/images/homepage/section-break-img.png";

const SectionBreak = () => {
  const { t } = useTranslation("home");

  return (
    <section className="h-screen overflow-hidden bg-black relative tablet:h-[100vw] " id="section-break">
      <div className="w-full h-full overflow-hidden relative">
        <Image
          src={image}
          alt="Section Break"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="absolute z-[1] top-0 left-0 object-cover w-full h-full break-image"
        />
        <div className="absolute top-0 z-[10] h-full w-full overflow-hidden flex items-center justify-start">
           <div  className="text-white  heading-1  px-[5vw] fadeUp "   
                  > {t("sectionBreak")} </div>
          </div>
      </div>
    </section>
  );
};

export default SectionBreak;
