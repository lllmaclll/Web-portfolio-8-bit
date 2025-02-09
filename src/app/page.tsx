'use client'
import React from "react";
import "nes.css/css/nes.min.css";
import AboutPage from "./backoffice/about/page";
import ProjectPage from "./backoffice/project/page";
import ContactPage from "./backoffice/contact/page";
import ScrollToTop from "./components/ScrollToTop";
// import NavBar from "./components/NavBar";
import { useTheme } from "./context/ThemeContext";

export default function page() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme

  return (
    <div className={`${isDarkMode ? "bg-portfolio-dark" : "bg-portfolio-light"}`}>
      {/* Navbar เป็น Client Component */}
      {/* <NavBar /> */}
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <ScrollToTop />
    </div>
  );
}
