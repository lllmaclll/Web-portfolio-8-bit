'use client'
import React from "react";
import "nes.css/css/nes.min.css";
import AboutPage from "./backoffice/about/page";
import ProjectPage from "./backoffice/project/page";
import ContactPage from "./backoffice/contact/page";
import ScrollToTop from "./components/ScrollToTop";
import FadeContent from "./components/FadeContent";

export default function page() {
  return (
    <>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <AboutPage />
      </FadeContent>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <ProjectPage />
      </FadeContent>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <ContactPage />
      </FadeContent>

      <ScrollToTop />
    </>
  );
}
