import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/elite-logo.svg";

const LanguageButton = () => {
    const { locale, asPath } = useRouter();
    return (
        <div className="text-golden flex items-center gap-x-2 text-lg">
            <Link className={`${locale === 'en' ? 'text-white' : ''} hover:scale-110 block duration-150`} href={asPath} locale="en">
                EN
            </Link>
            <span className="bg-white w-[1px] block h-[18px]"></span>
            <Link className={`${locale === 'ae' ? 'text-white' : ''} hover:scale-110 block duration-150`} href={asPath} locale="ae">
                AE
            </Link>
        </div>
    )
};

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-screen z-50">
            <div className="w-full px-[5vw] py-12 flex justify-between items-center">
                <div>
                    <Link href="/">
                        <Image
                            className="w-[16vw]"
                            src={logo}
                            alt="Elite Logo"
                            width={220}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-10">
                    <LanguageButton />
                    <div>
                        <svg className="w-[2vw]" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.211914" width="42" height="3" fill="white" />
                            <rect x="0.211914" y="12" width="42" height="3" fill="white" />
                            <rect x="0.211914" y="24" width="42" height="3" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header