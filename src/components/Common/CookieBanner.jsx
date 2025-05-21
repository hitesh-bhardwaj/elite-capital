import Link from "next/link";

export default function CookieBanner({ cookieVisible, setVisible }) {

    return (
        <div className={`w-[25vw] p-[1.5vw] mobile:w-[90%] rounded-[1vw] mobile:rounded-2xl mobile:p-4 tablet:p-4 tablet:rounded-2xl tablet:w-3/5 bg-white fixed bottom-[5%] left-[5%] drop-shadow-sm shadow-md z-[199] ${cookieVisible ? "pointer-events-auto" : "pointer-events-none opacity-0 hidden"}`}>
            <div className="w-full h-full flex flex-col gap-[1.5vw] mobile:gap-4 tablet:gap-6">
                <span className="text-[1vw] inline-block mobile:text-lg tablet:text-2xl">
                    By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                    <Link
                        href={"/cookie-policy"}
                        className="text-[1vw] inline-block w-fit ml-2  mobile:text-lg tablet:text-2xl link-line after:absolute after:left-0 relative after:bottom-0 after:w-[calc(100%+0.2rem)] after:h-[1.5px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:ease-in-out"
                        onClick={() => setVisible(false)}
                    >
                        Learn more
                    </Link>
                </span>
                <button
                    className="w-fit h-fit px-[1.2vw] py-[0.8vw] mobile:text-lg tablet:text-2xl mobile:px-4 mobile:py-2 tablet:py-4 tablet:px-6 bg-black rounded-full text-white text-[1.1vw] hover:scale-[0.95] duration-300"
                    onClick={() => setVisible(false)}
                >
                    Accept Cookies
                </button>
            </div>
        </div>
    )
}