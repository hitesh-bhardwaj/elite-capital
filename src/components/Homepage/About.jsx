
import aboutImage from "../../../public/assets/images/homepage/about.png"
import yellowRectangle from "../../../public/assets/images/homepage/yellow-rectangle.png"
import Image from "next/image";
import LineButton from "../ui/LineButton";
import ImageComponent from "../Common/ImageComponent";

const About = () => {


    return (
        <>
            <section className="relative bg-[#ffffff]  overflow-hidden h-[55vw] py-[5vw] pb-[8vw] mobile:h-full mobile:py-[15vw] tablet:min-h-fit tablet:pt-[10vw] dark tablet:h-full tablet:pb-[15vw]" id="about" >
                <div className="relative z-10 px-[5vw] flex items-start justify-between h-full mobile:flex-col mobile:justify-center mobile:h-full tablet:h-full mobile:gap-[10vw] tablet:flex-col">
                    <div className="text-black1 w-[65%] mobile:w-full tablet:w-full tablet:pb-[10vw] mobile:space-y-[4vw] ">
                        <h2 data-title-anim className="heading-1  mb-[3vw] mobile:mb-[4vw] ml-[-0.7vw] mobile:ml-[-2vw]">Who we are</h2>
                        <p data-para-anim className="content !tracking-normal !leading-[1.5] mb-[3vw] mobile:!mb-[7vw]  rtl:mobile:text-right ">Elite Capital is a DFSA-authorised private equity firm, combining in-depth local knowledge with strategic global fund management expertise to offer international investors with access to attractive real estate investment opportunities. Our success is built on creating long-lasting partnerships with our investors.</p>
                        <LineButton href={"/about-us"} aria-label="to about us page" text={"Learn More"} className="fadeUp" prefetch={false}/>
                    </div>

                    <div className="flex flex-col relative justify-end w-1/2 gap-[3vw] h-full mobile:w-[90%] mobile:ml-[5vw] tablet:w-full tablet:items-end">
                        <ImageComponent imgsrc={aboutImage} width={"w-full"} height={"h-[15vw] mobile:h-[30vw] tablet:h-[25vw]"} />
                        <div className="w-full absolute left-[-5%] bottom-[-2%] mobile:absolute mobile:left-[-5%] mobile:bottom-[-20%] tablet:left-[15%] tablet:bottom-[-20%]">
                            <Image src={yellowRectangle} height={22} width={47} alt="yelllow-rectangle" className="blockAnim mobile:w-[8vw] mobile:h-[3.5vw]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;