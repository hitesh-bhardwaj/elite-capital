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
import Image from "next/image";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),

  companyName: z.string().min(1, {
    message: "company name must be at least 2 characters.",
  }),

  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      companyName: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("Form Submitted:", data);
    const formData = {
      name: data.name,
      email: data.email,
      number: data.number,
      message: data.message,
      companyName: data.companyName,
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
    }
  };

  return (
    <section className=" tablet:pt-[10%] mobile:pt-0" id="formoem">
      <div className="w-full h-full mobile:p-0 mobile:bg-transparent mobile:hover:bg-transparent mobile:hover:shadow-none mobile:border-none tablet:p-[5.5vw] fadeUp">
        <div className="w-full flex flex-col gap-[2vw] mobile:w-full  mobile:rounded-[10vw] mobile:px-[1vw] mobile:py-[5vw] mobile:border mobile:gap-[5vw]  tablet:w-full">
          <h3
            data-para-anim
            className="heading-2 !font-body"
          >
            Get in touch
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2vw] mobile:space-y-[10vw] tablet:space-y-[3vw] mobile:w-full "
            >
              {/* <Label>First name</Label> */}
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full Name*" {...field} className="mobile:placeholder:text-[4.5vw]" />
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
                      <Input placeholder="Email*" {...field} className="mobile:placeholder:text-[4.5vw]" />
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
                      <Input placeholder="Phone*" {...field} className="mobile:placeholder:text-[4.5vw]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Company Name*" {...field} className="mobile:placeholder:text-[4.5vw]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Designation*" {...field} className="mobile:placeholder:text-[4.5vw]" />
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
                      <Textarea placeholder="Message*" {...field} className="mobile:placeholder:text-[4.5vw]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-[0.5vw] mobile:gap-[5vw]">
              <Checkbox id="terms" />
              <p
                htmlFor="terms"
                className="text-[0.9vw] mobile:text-[4.5vw] capitalize"
              >
                Yes, I would like to receive communications about my selected communities from Elite Developments. * We will only use this information as described in our privacy policy.
              </p>

              </div>
              <div className="mt-[2vw] w-full flex justify-start">
                <Button
                  type="submit"
                  className="font-body block font-medium w-fit h-fit text-[1.2vw] bg-black1 text-white hover:bg-white hover:text-black1 rounded-full px-8 py-[1vw] relative mobile:w-[35vw] mobile:h-[15vw] tablet:w-[17vw] tablet:h-[7vw] "
                >
                  {!isLoading ? (
                    <div className="flex gap-[0.5vw] mobile:gap-[1.5vw]">

                    <span className="text-[1.1vw]  mobile:text-[4.5vw] tablet:text-[2.5vw]">
                      Submit
                    </span>
                    <svg className={`w-4 mt-[0.2vw] mobile:mt-[1.5vw] `} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3287 10.01L12.4564 17.7716C12.2922 17.9334 12.0738 18.0243 11.8493 18.0243C11.6247 18.0243 11.4122 17.9334 11.2587 17.7716C11.1052 17.6097 11.0232 17.3903 11.0307 17.1614C11.0383 16.9326 11.1347 16.7131 11.2988 16.5513L17.6787 10.2622L1.10136 10.2622C0.876884 10.2622 0.66459 10.1714 0.511176 10.0096C0.357763 9.84791 0.275797 9.62856 0.283311 9.39984C0.290824 9.17111 0.387201 8.95176 0.55124 8.79003C0.715279 8.6283 0.933542 8.53744 1.15801 8.53744H17.7353L11.7687 2.24841C11.6152 2.08659 11.5332 1.86712 11.5407 1.63827C11.5482 1.40942 11.6446 1.18994 11.8088 1.02812C11.9729 0.8663 12.1913 0.775391 12.4159 0.775391C12.6405 0.775391 12.8529 0.8663 13.0064 1.02812L20.3688 8.78969C20.4448 8.86978 20.5042 8.9649 20.5433 9.06959C20.5825 9.17428 20.6007 9.2865 20.597 9.39984C20.5933 9.51317 20.5676 9.62539 20.5216 9.73008C20.4756 9.83477 20.41 9.92989 20.3287 10.01Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                </svg>

                    </div>

                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[100]">
                      <Image
                        src="/button-loading.png"
                        alt="button-loading"
                        className="animate-spin invert "
                        width={20}
                        height={20}
                      />
                    </div>
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
