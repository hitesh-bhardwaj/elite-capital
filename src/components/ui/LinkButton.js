import { useRouter } from "next/router";
import { useState, useRef, useCallback } from "react";

export default function LinkButton({ className = "", href, text, ...props }) {
  const { locale } = useRouter();
  const buttonRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (buttonRef.current.querySelector(".hover-circle")) {
      buttonRef.current.querySelector(".hover-circle").style.left = `${x}px`;
      buttonRef.current.querySelector(".hover-circle").style.top = `${y}px`;
    }
  }, []);

  return (
    <a {...props} href={href} className={className}>
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        className={`
                    group relative font-body block font-medium w-fit text-[1.2vw] 
                    bg-white border border-white text-black1 rounded-full 
                    px-8 py-[1.15vw] transition-all duration-500 ease hover:scale-[0.95]
                    overflow-hidden
                    ${className} mobile:text-[4vw] mobile:py-[4.2vw] tablet:text-[2.5vw] tablet:py-[2vw]
                `}
      >
        <span
          className="hover-circle absolute aspect-square rounded-full bg-black 
                    transition-all duration-500 ease transform -translate-x-1/2 -translate-y-1/2 
                    pointer-events-none opacity-1 scale-0  group-hover:scale-100"
          style={{
            width: "300%",
          }}
        ></span>

        <div className="flex gap-2 items-center relative z-10 group-hover:text-white">
          <span className="group-hover:text-white transition-colors duration-300">
            {text}
          </span>
          <svg
            className="relative -rotate-90 w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[4.2vw] mobile:h-[4.2vw] tablet:w-[2.2vw] tablet:h-[2.2vw] rtl:rotate-90"
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
              d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
              fill="currentColor"
            />
            <path
              className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
              d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}