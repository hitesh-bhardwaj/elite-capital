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
        <footer className="bg-[#121212] text-white">
            <div className="px-[5vw]">
                <div className="pt-[5vw] mobile:pt-[10vw]">
                    <div className="flex items-start justify-between mobile:flex-col">
                        <div>
                            <Image 
                                src="/elite-logo.svg"
                                width={100}
                                height={100}
                                alt="Logo"
                                className="w-[35vw] h-auto fadeUp mobile:w-[70vw]"
                            />
                        </div>
                        <div className="uppercase mt-4 font-medium flex items-end justify-end gap-[5vw] mobile:flex-col mobile:text-[6.7vw] mobile:items-start mobile:my-[8vw] mobile:gap-[4vw]">
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
                    <div className="flex justify-start items-end flex-col ">
                        <div className="w-1/4 h-[15vw] mobile:w-full">
                            <p className="text-lg">Subscribe for our Newsletter to Receive Updates and Content.</p>
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
                                className="group flex items-center justify-center border-[1.5px] border-white rounded-full p-[1vw] hover:bg-white duration-300 mobile:items-start mobile:p-[2vw]" 
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