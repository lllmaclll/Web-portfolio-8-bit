'use client'; // บอกว่าเป็น Client Component
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaGlobe, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // ใช้ useTheme ที่นี่
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme(); // ใช้ useTheme จาก context
  const [isPlaying, setIsPlaying] = useState(false); // สถานะเล่น/ปิดเสียง
  const audioRef = useRef<HTMLAudioElement | null>(null); // ใช้อ้างอิงถึง <audio>

  // const playAudio = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((error) => console.error("Autoplay blocked:", error));
  //     setIsPlaying(true); // ตั้งค่าให้เพลงกำลังเล่น
  //   }
  // };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio("/musics/240_full_deck-the-halls-with-cpus_0128_preview.mp3");
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="flex justify-between items-center nes-container is-dark">
      <Link href={"/"}>
        <h1 className="title text-yellow-300 text-3xl">
          {t('my_portfolio')}
        </h1>
      </Link>

      <div className="flex gap-2">
        <Link href={"/"}>{t('home')}</Link>
        <Link href={"/backoffice/about"}>{t('about')}</Link>
        <Link href={"/backoffice/project"}>{t('project')}</Link>
        <Link href={"/backoffice/contact"}>{t('contact')}</Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button onClick={toggleAudio} className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-[#3b4249] outline-none focus:outline-none">
          {isPlaying ? (
            <FaVolumeUp className="text-red-200" size={24} />
          ) : (
            <FaVolumeMute className="text-red-400" size={24} />
          )}
        </button>

        <div className="flex justify-center items-center">
          <button onClick={changeLanguage} className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-[#3b4249] outline-none focus:outline-none me-2">
            <FaGlobe className="text-sky-400" size={24} />
          </button>
          <div>{i18n.language.toUpperCase()}</div>
        </div>

        <button onClick={toggleTheme} className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-[#3b4249] outline-none focus:outline-none">
          {isDarkMode ? (
            <FaMoon className="text-yellow-300" size={24} />
          ) : (
            <FaSun className="text-yellow-500" size={24} />
          )}
        </button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/musics/240_full_deck-the-halls-with-cpus_0128_preview.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </nav>
  );
}

export default NavBar;
