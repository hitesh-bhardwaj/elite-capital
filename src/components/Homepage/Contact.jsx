import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Button } from "@heroui/react";

const Contact = () => {
  const [action, setAction] = useState(null);
  const { t } = useTranslation("common");
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
            <div className="flex flex-col gap-[1vw]">
              <h4 className="text-[2.5vw]">{t("form.head")}</h4>

              <Form
                className="w-full max-w-xs flex flex-col gap-4"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));

                  setAction(`submit ${JSON.stringify(data)}`);
                }}
              >
                <Input
                  isClearable
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "border-none",
                      "shadow-xl",
                      "bg-default-200/50",
                      "dark:bg-default/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-default-200/70",
                      "dark:hover:bg-default/70",
                      "group-data-[focus=true]:bg-default-200/50",
                      "dark:group-data-[focus=true]:bg-default/60",
                      "!cursor-text",
                    ],
                  }}
                  label="Search"
                 
                  radius="lg"
                
                />
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className="flex gap-2">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                  <Button type="reset" variant="flat">
                    Reset
                  </Button>
                </div>
                <p className="text-[1vw]">{t("form.terms")}</p>
                {action && (
                  <div className="text-small text-default-500">
                    Action: <code>{action}</code>
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
