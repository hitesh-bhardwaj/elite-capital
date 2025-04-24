/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useTranslation } from "next-i18next";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z
    .string()
    .regex(/^\d{10,15}$/, { message: "Phone number must be 10-15 digits." }),
  company: z.string().min(2, { message: "Company name is required." }),
  designation: z.string().min(2, { message: "Designation is required." }),
  message: z.string().optional(),
  terms: z
    .boolean()
    .refine((val) => val, { message: "You must agree to terms." }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      company: "",
      designation: "",
      message: "",
      terms: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("common");

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("Form Submitted:", data);

    const formData = {
      name: data.name,
      email: data.email,
      number: data.number,
      message: data.message,
      companyName: data.company,
      designation: data.designation,
    };

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mobile:pt-0" id="formoem">
      <div className="w-full h-full mobile:p-0 tablet:p-[6.5vw]">
        <div className="w-full flex flex-col gap-[2vw] mobile:gap-[5vw] tablet:w-full">
          <h3 className="heading-2 !font-body">{t("formHead")}</h3>
          <Form {...form}>
            <form
              autoComplete="off"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2vw] mobile:space-y-[10vw] tablet:space-y-[5vw]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder={t("formName")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder={t("formEmail")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder={t("formPhone")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder={t("formCompany")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder={t("formDesignation")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        autoComplete="off"
                        placeholder={t("formMessage")}
                        {...field}
                        className="mobile:placeholder:text-[4.5vw] tablet:placeholder:text-[2.2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex gap-[1vw] items-start mobile:gap-[5vw] tablet:gap-[1.5vw]">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      htmlFor="terms"
                      className="text-[1.2vw] mobile:text-[4.5vw] tablet:text-[2vw] w-[90%] mt-[-0.5vw]"
                    >
                      {t("formAgreement")}
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-[2vw] w-full flex justify-start">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="font-body block font-medium group w-fit h-fit text-[1.2vw] bg-black1 text-white hover:bg-white hover:text-black1 rounded-full px-8 py-[1vw] mobile:w-[35vw] mobile:h-[15vw] tablet:h-[7vw]"
                >
                  {!isLoading ? (
                    <div className="flex gap-[0.7vw] mobile:gap-[1.5vw] tablet:gap-[1vw] items-center">
                      <span className="text-[1.1vw] mobile:text-[4.5vw] tablet:text-[2.5vw]">
                        {t("formcta")}
                      </span>
                      {/* <svg
                        className="relative -rotate-90 w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[4.2vw] mobile:h-[4.2vw] tablet:w-[2.2vw] tablet:h-[2.2vw] rtl:rotate-90"
                        width="19"
                        height="23"
                        viewBox="0 0 19 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                          d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973..."
                          fill="currentColor"
                        />
                        <path
                          className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                          d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973..."
                          fill="currentColor"
                        />
                      </svg> */}
                    </div>
                  ) : (
                    <span className="text-[1.1vw] mobile:text-[4.5vw] tablet:text-[2.5vw]">
                      {t("formSubmitting")}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
