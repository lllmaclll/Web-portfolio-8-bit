"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // ตรวจจับเมื่อเลื่อนลงมาเกิน 300px แล้วแสดงปุ่ม
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ฟังก์ชันเลื่อนขึ้นบนสุด
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-[#3b4249] outline-none focus:outline-none p-2 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image src="/images/arrow-up.png" alt="Scroll to top" width={36} height={36} />
    </button>
  );
}
