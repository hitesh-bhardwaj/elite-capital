import React from "react";
import { useTranslation } from "next-i18next";
import ContactForm from "./ContactForm";

const Contact = ({translation, heading, para}) => {
  const { t } = useTranslation(`${translation}`);
  return (
    <>
      <section className="bg-[#F2F2E9] w-screen h-full py-[5%] mobile:py-[10vw] tablet:pb-[10%]" id="contact">
        <div className="px-[5vw] w-full h-full flex justify-between mobile:flex-col mobile:gap-[5vw] tablet:flex-col tablet:gap-[5vw]">
          <div className="w-[45%] flex flex-col pt-[2vw] mobile:w-full tablet:w-[60%]">
            <h2 data-title-anim className="heading-1 mb-[3vw]">
              {heading}
            </h2>
            <p data-para-anim className="mb-[3vw] w-[80%] text-[1.8vw] mobile:text-[4.6vw] mobile:w-full">{para}</p>
          </div>
          <div className="w-[45%] h-fit bg-[#E5E5DC] rounded-[1vw] border border-black/5 p-[4vw] fadeUp mobile:w-full mobile:rounded-[2vw] tablet:w-full tablet:p-0 tablet:rounded-[3vw] fadeUp">
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
