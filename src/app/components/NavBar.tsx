'use client'; // บอกว่าเป็น Client Component
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaGlobe, FaVolumeMute, FaVolumeUp, FaHome, FaHamburger } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // ใช้ useTheme ที่นี่
import { useAudio } from "../context/AudioContext";

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme(); // ใช้ useTheme จาก context
  const { isPlaying, toggleAudio } = useAudio(); // ดึงค่าจาก Context
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="!m-0 !p-3 flex justify-between items-center nes-container is-dark">
      <Link href={"/"} className="">
        <button className="icon-nav-1">
          <FaHome className="text-yellow-300 lg:hidden" size={24} />
        </button>
        <h1 className=" text-yellow-300 hidden lg:flex lg:items-center lg:text-3xl">
          {t('my_portfolio')}
        </h1>
      </Link>

      <div className="hidden sm:flex sm:gap-6">
        <Link href={"/"}>{t('home')}</Link>
        <Link href={"/backoffice/about"}>{t('about')}</Link>
        <Link href={"/backoffice/project"}>{t('project')}</Link>
        <Link href={"/backoffice/contact"}>{t('contact')}</Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-nav">
          <FaHamburger className="text-yellow-300 lg:hidden" size={24} />
        </button>
        <button onClick={toggleAudio} className="icon-nav-2">
          {isPlaying ? (
            <FaVolumeUp className="text-red-200" size={24} />
          ) : (
            <FaVolumeMute className="text-red-400" size={24} />
          )}
        </button>
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <button onClick={changeLanguage} className="icon-nav-3">
            <FaGlobe className="text-sky-400" size={24} />
          </button>
          <div>{i18n.language.toUpperCase()}</div>
        </div>
        <button onClick={toggleTheme} className="icon-nav-2">
          {isDarkMode ? (
            <FaMoon className="text-yellow-300" size={24} />
          ) : (
            <FaSun className="text-yellow-500" size={24} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* พื้นหลังเบลอและโปร่งแสงครอบคลุมทั้งหน้าจอ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-100 backdrop-blur-3xl z-10"
            />

            {/* เมนู */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-800 p-5 flex flex-col items-center shadow-lg z-20"
            >
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="self-end icon-nav-4">
                <MdOutlineRestaurantMenu className="text-yellow-300" size={24} />
              </button>
              <Link href="/" className="text-white text-lg py-2 sm:hidden">{t('home')}</Link>
              <Link href="/backoffice/about" className="text-white text-lg py-2 sm:hidden">{t('about')}</Link>
              <Link href="/backoffice/project" className="text-white text-lg py-2 sm:hidden">{t('project')}</Link>
              <Link href="/backoffice/contact" className="text-white text-lg py-2 sm:hidden">{t('contact')}</Link>

              <div className="flex gap-4 mt-4">
                <button onClick={toggleAudio} className="icon-nav-4">
                  {isPlaying ? <FaVolumeUp className="text-red-200" size={24} /> : <FaVolumeMute className="text-red-400" size={24} />}
                </button>
                <button onClick={changeLanguage} className="icon-nav-4">
                  <FaGlobe className="text-sky-400" size={24} />
                </button>
                <button onClick={toggleTheme} className="icon-nav-4">
                  {isDarkMode ? <FaMoon className="text-yellow-300" size={24} /> : <FaSun className="text-yellow-500" size={24} />}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default NavBar;
