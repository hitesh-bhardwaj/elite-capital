import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Checkbox, Textarea } from "@heroui/react";
import LinkButton from "@/components/ui/LinkButton";
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
  
      const inputWrapperStyles = `
      pb-[1vw]
          relative w-full inline-flex tap-highlight-transparent  
          shadow-sm px-3 gap-5 h-10 min-h-30 rounded-medium 
          transition-none !duration-0 outline-none 
          shadow-none drop-shadow-none
          data-[hover=true]:bg-transparent
          group-data-[focus=true]:bg-transparent
          group-data-[focus-visible=true]:z-10 
          group-data-[focus-visible=true]:ring-0
          bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none
      `;
  return (
    <>
      <section className="bg-[#F2F2E9] w-screen h-full py-[5%]" id="contact">
        <div className="px-[5vw] w-full h-full flex justify-between">
          <div className="w-[45%] flex flex-col pt-[2vw] ">
            <h3 data-title-anim className="text-[5vw] font-display mb-[3vw] leading-[1]">
              {t("contactHead")}
            </h3>
            <p data-para-anim className="mb-[3vw] w-[80%] text-[1.8vw]">{t("contactSub")}</p>
          </div>
          <div className="w-[45%] h-fit bg-[#E5E5DC] rounded-[1vw] border border-black/5 p-[4vw] fadeUp">
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
