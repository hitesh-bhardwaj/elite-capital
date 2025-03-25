import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const socials = [
        {
            icon: '/icons/facebook.svg',
            link: 'https://www.facebook.com/yourfacebookpage',
            alt: 'Facebook Icon',
        },
        {
            icon: '/icons/linkedin.svg',
            link: 'https://www.linkedin.com/yourlinkedinpage',
            alt: 'LinkedIn Icon',
        },
        {
            icon: '/icons/instagram.svg',
            link: 'https://www.instagram.com/yourinstagrampage',
            alt: 'Instagram Icon',
        }
    ]

    return (
        <footer className="bg-[#121212] text-white mobile:py-[10vw]">
            <div className="px-[5vw] ">
                <div className="pt-[5vw]  ">
                    <div className="flex items-start justify-between mobile:flex-col">
                            <Image 
                                src="/elite-logo.svg"
                                width={100}
                                height={100}
                                alt="Logo"
                                className="w-[35vw] h-auto fadeUp mobile:w-[70vw]"
                            /> 
                    </div>
                    <div className="uppercase mt-4 content font-medium flex items-end justify-end gap-[5vw] mobile:flex-col  mobile:items-start mobile:my-[8vw] mobile:gap-[4vw] ">
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
                    <div className="flex justify-start items-end flex-col  pb-[5vw] ">
                        <div className="w-[25vw]  mobile:w-full">
                            <p className="text-lg">Subscribe for our Newsletter to Receive Updates and Content.</p>
                        </div>
                        <div className="w-[25vw] pb-[0.5vw] relative flex justify-end items-start border-b-[1.5px] border-white pt-[5vw] mobile:w-full mobile:px-[3vw]">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-[80%] placeholder:px-[0.5vw] focus-visible:ring-0 focus:!border-none focus:!outline-0 bg-transparent outline-0 mt-[0.5vw] tablet:mt-5 p-[0.5vw] pl-0 border-none placeholder:text-white placeholder:text-[1.25vw] mobile:placeholder:text-[4vw] tablet:w-full tablet:placeholder:text-[2.5vw] tablet:text-[2.5vw]"
                />
                <div className="text-[1.25vw] mobile:text-[4.6vw] mt-[0.7vw] text-[#D8AF00] cursor-pointer flex items-center gap-[0.5vw]">
                    <p className="">
                    SUBSCRIBE 
                    </p>
                    <div className="h-[0.98vw] w-[1vw]  cursor-pointer -rotate-45">
                  <svg
                    className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 `}
                      d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                      fill="currentColor"
                    />
                    <path
                      className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] `}
                      d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                </div>
              </div>
                        
                    </div>
                </div>
                <div className="border-t border-white flex justify-between items-center py-6 mobile:flex-col-reverse mobile:items-start mobile:gap-[8vw] mobile:mt-[10vw]">
                    <h6 className="text-[1.25rem]">Copyright © 2025 All Rights Reserved. Elite Developments</h6>
                    <div className="flex items-center gap-4">
                        {socials.map((social, index) => (
                            <Link
                                target="_blank"
                                href={social.link}
                                className="group flex items-center justify-center border-[1.5px] border-white rounded-full p-[1vw] hover:bg-white duration-300 mobile:items-start mobile:p-[3.5vw]" 
                                key={index}>
                                <Image
                                    className="w-[1.8rem] h-[1.8rem] group-hover:invert duration-300"
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
        </footer>
    )
}

export default Footer;