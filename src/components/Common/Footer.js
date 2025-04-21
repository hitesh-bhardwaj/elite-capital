import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { lineAnim } from "../gsapAnimations";

const Footer = () => {
    const { t } = useTranslation('common');
    const footerNav = t('footerNav', { returnObjects: true });
    const footerNavBottom = t('footerNavBottom', { returnObjects: true });
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
    <footer className=" bg-transparent h-[30vw] text-white !font-body tablet:pb-[7%] mobile:h-[199vw] "  
    style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="px-[5vw] w-full bg-[#121212] fixed bottom-0 mobile:px-[7vw] mobile:py-[5vw]">
        <div className=" pb-[10vw] h-[25vw] flex  justify-between mobile:flex-col mobile:h-[100vw] mobile:py-[5vw]">
          <div className="flex items-start justify-between pt-[5vw] mobile:flex-col ">
            <Image
              src="/elite-logo.svg"
              width={100}
              height={100}
              alt="Logo"
              className="w-[35vw] h-auto fadeUp mobile:w-[90vw]"
            />
          </div>
          
          <div className="uppercase content font-medium flex items-center  justify-end gap-[5vw] mobile:flex-col  mobile:items-start mobile:mt-[8vw] mobile:my-[10vw] mobile:gap-[4vw] tablet:justify-start tablet:mt-[5vw] mobile:text-[6.65vw]">
          {footerNav.map((item,index)=>(
            <Link key={index} href={item.link} className="group" >
               <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.5rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                <span  className="">{item.text}</span>
            </div>
            </Link>
))}
          </div>
         
        </div>
        <div className="border-t border-white flex justify-between items-center py-6 mobile:flex-col-reverse mobile:items-start mobile:gap-[8vw] mobile:mt-[10vw] tablet:mt-[7vw]">
          <h6 className="text-[1.15rem] tablet:w-[50%] mobile:text-[5.1vw]">{t('footerCopy')}</h6>
          <div className="flex gap-[2.5vw] text-[1.3vw] mobile:flex-col-reverse">
           <div className="flex items-center justify-center gap-[0.7vw] mobile:flex-col mobile:py-[6vw] mobile:gap-[6vw]">
            {footerNavBottom.map((item,index)=>(
              <>
              <Link key={index} href={item.link} prefetch={false} className="group">
              <div className="flex gap-2 items-center after:absolute relative after:bottom-0 after:w-[calc(100%+0.5rem)] after:h-[1.5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out">
                <span  className="mobile:text-[5.1vw]">{item.text}</span>
            </div></Link>
              <span className="h-1 w-1 bg-white rounded-full block last:hidden mobile:hidden"/>
              </>
            ))}
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
