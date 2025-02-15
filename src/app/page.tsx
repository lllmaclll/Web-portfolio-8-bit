'use client'
import React from "react";
import AboutPage from "./backoffice/about/page";
import ProjectPage from "./backoffice/project/page";
import ContactPage from "./backoffice/contact/page";
import ScrollToTop from "./components/ScrollToTop";

export default function page() {
  return (
    <>
      <AboutPage />
      <ProjectPage />
      <ContactPage />

      <ScrollToTop />
    </>
  );
}
