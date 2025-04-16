import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import ContactForm from "../Homepage/ContactForm";

const Contact = () => {
  const [action, setAction] = useState(null);
  const { t } = useTranslation("common");

   const [submitted, setSubmitted] = React.useState(null);
      const [errors, setErrors] = React.useState({});
  
      const onSubmit = (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
  
          // Custom validation checks
          const newErrors = {};
  
          // Password validation
          const passwordError = getPasswordError(data.password);
  
          if (passwordError) {
              newErrors.password = passwordError;
          }
  
          // Username validation
          if (data.name === "admin") {
              newErrors.name = "Nice try! Choose a different username";
          }
  
          if (Object.keys(newErrors).length > 0) {
              setErrors(newErrors);
  
              return;
          }
  
          if (data.terms !== "true") {
              setErrors({ terms: "Please accept the terms" });
  
              return;
          }
  
          // Clear errors and submit
          setErrors({});
          setSubmitted(data);
      };
  
  return (
    <>
      <section className="bg-[#F2F2E9] w-screen h-full py-[5%] mobile:py-[10vw] tablet:pb-[10%]" id="contact">
        <div className="px-[5vw] w-full h-full flex justify-between mobile:flex-col mobile:gap-[5vw] tablet:flex-col tablet:gap-[5vw]">
          <div className="w-[45%] flex flex-col pt-[2vw] mobile:w-full tablet:w-[60%]">
            <h2 data-title-anim className="heading-1 mb-[3vw]">
              {t("contactHead")}
            </h2>
            <p data-para-anim className="mb-[3vw] w-[80%] text-[1.8vw]">{t("contactSub")}</p>
          </div>
          <div className="w-[45%] h-fit bg-[#E5E5DC] rounded-[1vw] border border-black/5 p-[4vw] fadeUp mobile:w-full mobile:rounded-[2vw] tablet:w-full tablet:p-0 tablet:rounded-[3vw]">
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
