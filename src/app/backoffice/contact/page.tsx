'use client'
import FadeContent from '@/app/components/FadeContent';
import FadeInLeft from '@/app/components/FadeInLeft';
import ScrollToTop from '@/app/components/ScrollToTop';
import { useTheme } from '@/app/context/ThemeContext';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา
  const pathname = usePathname(); // ดึง pathname ปัจจุบัน

  // สร้าง state สำหรับเก็บข้อมูลจากฟอร์ม
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ฟังก์ชันที่ใช้เมื่อกดปุ่ม submit
  const handleSubmit = () => {
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // สร้างลิงก์ mailto
    window.location.href = `mailto:makky1593@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`flex flex-col items-center p-8`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`mt-8 nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} w-[447.99px] sm:w-[512px] md:w-[575.99px] lg:w-[672px] xl:w-[895.99px]`}>
            <h2 className="text-2xl text-center">{t('contact')}</h2>

            <div className="nes-field !mt-4">
              <label htmlFor="dark_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_name')}</label>
              <input type="text" id="dark_field" className={`nes-input ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_name')} value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="nes-field !mt-4">
              <label htmlFor="dark_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_email')}</label>
              <input type="text" id="dark_field" className={`nes-input ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_email')} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="nes-field !mt-4">
              <label htmlFor="textarea_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_message')}</label>
              <textarea id="textarea_field" className={`nes-textarea ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_message')} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <button type="button" onClick={handleSubmit} className="nes-btn is-primary">{t('submit')}</button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
              {/* facebook */}
              <a href="https://www.facebook.com/mac.sronkerd" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon facebook is-large"></i>
              </a>

              {/* instagram */}
              <a href="https://www.instagram.com/macky_rt/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon instagram is-large"></i>
              </a>

              {/* github */}
              <a href="https://github.com/lllmaclll" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-large"></i>
              </a>

              {/* gmail */}
              <a href="mailto:makky1593@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon gmail is-large"></i>
              </a>

              {/* medium */}
              <a href="https://medium.com/@makky1593" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon medium is-large"></i>
              </a>

              {/* linkedin */}
              <a href="https://www.linkedin.com/in/charuwat-sronkerd-a5b666218/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon linkedin is-large"></i>
              </a>
            </div>
          </section>
        </FadeInLeft>
      </FadeContent>

      {pathname === "/backoffice/contact" && <ScrollToTop />}
    </div>
  )
}

export default ContactPage