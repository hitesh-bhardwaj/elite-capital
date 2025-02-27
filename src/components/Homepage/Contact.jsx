import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Checkbox, Textarea } from "@heroui/react";
import LinkButton from "@/components/ui/LinkButton";

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
      <section className="bg-[#F2F2E9] w-screen h-screen py-[5%]" id="contact">
        <div className="px-[5vw] w-full h-full flex justify-between">
          <div className="w-[45%] flex flex-col pt-[2vw] ">
            <h3 className="text-[5vw] font-display mb-[3vw] leading-[1]">
              {t("contactHead")}
            </h3>
            <p className="mb-[3vw] w-[60%] text-[1.8vw]">{t("contactSub")}</p>
          </div>
          <div className="w-[50%] bg-[#E5E5DC] rounded-[1vw] border border-black/5 p-[4vw]">
            <div className="flex flex-col gap-[2vw]">
              <h4 className="text-[2.5vw]">{t("form.head")}</h4>
                <Form
                    className="w-full "
                    validationErrors={errors}
                    onReset={() => setSubmitted(null)}
                    onSubmit={onSubmit}
                >
                    <div className="flex flex-col gap-4 max-w-md">
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: inputWrapperStyles,
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500  focus:py-[-5]" ,
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your first name";
                                }
                                return errors.name;
                            }}
                            label="First Name"
                            labelPlacement="inside"
                            name="firstname"
                            type="phone"
                        />

                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: inputWrapperStyles,
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your last name";
                                }

                                return errors.name;
                            }}
                            label="Last Name"
                            labelPlacement="inside"
                            name="lastname"
                            type="phone"

                        />

                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: inputWrapperStyles,
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your email";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid email address";
                                }
                            }}
                            label="Email"
                            labelPlacement="inside"
                            name="email"
                            type="phone"

                        />
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: inputWrapperStyles,
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your phone";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid phone number";
                                }
                            }}
                            label="Phone"
                            labelPlacement="inside"
                            name="phone"
                            type="phone"
                        />
                        <Textarea
                            isRequired
                            classNames={{
                                inputWrapper: inputWrapperStyles,
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your message";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid message";
                                }
                            }}
                            label="Message"
                            labelPlacement="inside"
                            name="message"
                            type="phone"
                        />
                        <Checkbox
                            isRequired
                            classNames={{
                                label: "text-small",
                            }}
                            isInvalid={!!errors.terms}
                            name="terms"
                            validationBehavior="aria"
                            value="true"
                            onValueChange={() => setErrors((prev) => ({ ...prev, terms: undefined }))}
                        >
                            Yes, I would like to receive communications about my selected communities from Elite Developments. * We will only use this information as described in our privacy policy.
                        </Checkbox>

                        {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                        <div className="flex gap-4">
                            <LinkButton href={"/"} text={"Submit"} type="submit" />
                        </div>
                    </div>

                    {submitted && (
                        <div className="text-small text-default-500 mt-4">
                            Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                        </div>
                    )}
                </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
