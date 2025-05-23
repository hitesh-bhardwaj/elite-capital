import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    document.querySelectorAll("Swiper").forEach((swiper) => {
      swiper.setAttribute("dir", dir);
    });
  }, [locale]);

  return (
    <>
      <LocalBusiness />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
