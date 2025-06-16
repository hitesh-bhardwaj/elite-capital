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
    pageURL: z.string()
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
      pageURL: typeof window !== 'undefined' ? window.location.href : '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("common");

  const onSubmit = async (data) => {
    setIsLoading(true);

    const formData = {
      name: data.name,
      email: data.email,
      number: data.number,
      message: data.message,
      companyName: data.company,
      designation: data.designation,
      pageURL: typeof window !== 'undefined' ? window.location.href : '',
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
        <div className="w-full flex flex-col gap-[2vw] mobile:gap-[5vw] tablet:w-full mobile:px-[3vw] mobile:py-[5vw]">
          <h3 className="heading-2 ltr:font-body">{t("formHead")}</h3>
          <Form {...form}>
            <form
              autoComplete="off"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2vw] mobile:space-y-[10vw] tablet:space-y-[5vw]  mobile:pt-[5vw]"
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
                  <FormItem className="">
                    <div className="flex gap-[1vw] items-start mobile:gap-[5vw] tablet:gap-[1.5vw]">
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
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-[2vw] w-full flex justify-start">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="font-body block font-medium group w-fit h-fit text-[1.2vw] bg-black1 text-white hover:bg-white hover:text-black1 hover:scale-[0.95] transition-all duration-500 rounded-full px-8 py-[1vw] mobile:w-[35vw] mobile:h-[15vw] tablet:h-[7vw]"
                >
                  {!isLoading ? (
                    <div className="flex gap-[0.7vw] mobile:gap-[1.5vw] tablet:gap-[1vw] items-center">
                      <span className="text-[1.1vw] mobile:text-[4.5vw] tablet:text-[2.5vw]">
                        {t("formcta")}
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
                  ) : (
                    <span className="text-[1.1vw] mobile:text-[4.5vw] tablet:text-[2.5vw]">
                      Submitting..
                    </span>
                  )}
                </Button>
              </div>
              <div 
                className="flex gap-[1vw] items-start mobile:gap-[5vw] tablet:gap-[1.5vw] text-[1.2vw] mobile:text-[4.5vw] tablet:text-[2vw] w-[90%] mt-[-0.5vw]" 
                dangerouslySetInnerHTML={{ __html: t("formPrivacy") }} 
              />
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
