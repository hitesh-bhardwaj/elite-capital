import Link from "next/link";
import { useRouter } from "next/router";

export default function LinkButton({ className = "", href, text, ...props }) {
    const { locale } = useRouter();

    return (
        <Link {...props} href={href} className={`font-body block font-medium w-fit text-[1.2vw] bg-white text-black1 rounded-full px-8 py-[1.15vw] ${className}`}>
            <div className="flex gap-2 items-center">
                <span className="">{text}</span>
                <svg className={`w-4 ${locale === 'ae' ? 'rotate-180' : ''}`} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3287 10.01L12.4564 17.7716C12.2922 17.9334 12.0738 18.0243 11.8493 18.0243C11.6247 18.0243 11.4122 17.9334 11.2587 17.7716C11.1052 17.6097 11.0232 17.3903 11.0307 17.1614C11.0383 16.9326 11.1347 16.7131 11.2988 16.5513L17.6787 10.2622L1.10136 10.2622C0.876884 10.2622 0.66459 10.1714 0.511176 10.0096C0.357763 9.84791 0.275797 9.62856 0.283311 9.39984C0.290824 9.17111 0.387201 8.95176 0.55124 8.79003C0.715279 8.6283 0.933542 8.53744 1.15801 8.53744H17.7353L11.7687 2.24841C11.6152 2.08659 11.5332 1.86712 11.5407 1.63827C11.5482 1.40942 11.6446 1.18994 11.8088 1.02812C11.9729 0.8663 12.1913 0.775391 12.4159 0.775391C12.6405 0.775391 12.8529 0.8663 13.0064 1.02812L20.3688 8.78969C20.4448 8.86978 20.5042 8.9649 20.5433 9.06959C20.5825 9.17428 20.6007 9.2865 20.597 9.39984C20.5933 9.51317 20.5676 9.62539 20.5216 9.73008C20.4756 9.83477 20.41 9.92989 20.3287 10.01Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                </svg>
            </div>
        </Link>
    )
}