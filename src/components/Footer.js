import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/yourlinkedinpage",
      alt: "LinkedIn Icon",
    },
    {
      icon: "/icons/instagram.svg",
      link: "https://www.instagram.com/yourinstagrampage",
      alt: "Instagram Icon",
    },
  ];

  return (
    <footer className="bg-[#121212] text-white !font-body mobile:py-[10vw] tablet:pb-[7%]">
      <div className="px-[5vw] ">
        <div className=" pb-[10vw] h-[25vw] flex  justify-between ">
          <div className="flex items-start justify-between pt-[5vw] mobile:flex-col ">
            <Image
              src="/elite-logo.svg"
              width={100}
              height={100}
              alt="Logo"
              className="w-[35vw] h-auto fadeUp mobile:w-[70vw]"
            />
          </div>
          <div className="uppercase content font-medium flex items-center  justify-end gap-[5vw] mobile:flex-col  mobile:items-start mobile:my-[8vw] mobile:gap-[4vw] tablet:justify-start tablet:mt-[5vw] ">
            <Link href="/about-us" className="">
              <span data-para-anim>Who We Are</span>
            </Link>
            <Link href="/invest-with-us" className="">
              <span data-para-anim>Invest With Us</span>
            </Link>
            <Link href="/contact" className="">
              <span data-para-anim>Contact Us</span>
            </Link>
          </div>
         
        </div>
        <div className="border-t border-white flex justify-between items-center py-6 mobile:flex-col-reverse mobile:items-start mobile:gap-[8vw] mobile:mt-[10vw] tablet:mt-[7vw]">
          <h6 className="text-[1.15rem] tablet:w-[50%]">
            Copyright © 2025 All Rights Reserved. Elite Capital
          </h6>
          <div className="flex gap-[2.5vw] text-[1.3vw]">
           <div className="flex items-center justify-center gap-[0.7vw]">
              <Link href="privacy-policy" prefetch={false}>Privacy Policy</Link>
              <span className="h-1 w-1 bg-white rounded-full block"/>
             <Link href="cookie-policy" prefetch={false}>Cookie Policy</Link>
              </div>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <Link
                target="_blank"
                href={social.link}
                className="group flex items-center justify-center border-[1.5px] border-white rounded-full p-[1vw] hover:bg-white duration-300 mobile:items-start mobile:p-[3.5vw]"
                key={index}
              >
                <Image
                  className="w-[1.2rem] h-[1.2rem] group-hover:invert duration-300"
                  src={social.icon}
                  alt={social.alt}
                  width={25}
                  height={25}
                />
              </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
