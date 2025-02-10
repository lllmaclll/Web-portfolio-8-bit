'use client'
import FadeContent from '@/app/components/FadeContent';
import FadeInLeft from '@/app/components/FadeInLeft';
import { useTheme } from '@/app/context/ThemeContext';
import React from 'react'
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา

  return (
    <div className={`flex flex-col items-center p-8`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`mt-8 w-[895.99px] nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} p-4`}>
            <h2 className="text-2xl text-center">{t('contact')}</h2>

            <div className="nes-field !mt-4">
              <label htmlFor="dark_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_name')}</label>
              <input type="text" id="dark_field" className={`nes-input ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_name')} />
            </div>

            <div className="nes-field !mt-4">
              <label htmlFor="dark_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_email')}</label>
              <input type="text" id="dark_field" className={`nes-input ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_email')} />
            </div>

            <div className="nes-field !mt-4">
              <label htmlFor="textarea_field" className={`${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('your_message')}</label>
              <textarea id="textarea_field" className={`nes-textarea ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} moon-font`} placeholder={t('please_enter_your_message')} />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <button type="button" className="nes-btn is-primary">{t('submit')}</button>
            </div>

            <div className="mt-4 flex justify-center items-center gap-3">
              {/* facebook */}
              <i className="nes-icon facebook is-large"></i>

              {/* instagram */}
              <i className="nes-icon instagram is-large"></i>

              {/* github */}
              <i className="nes-icon github is-large"></i>

              {/* gmail */}
              <i className="nes-icon gmail is-large"></i>

              {/* medium */}
              <i className="nes-icon medium is-large"></i>

              {/* linkedin */}
              <i className="nes-icon linkedin is-large"></i>
            </div>
          </section>
        </FadeInLeft>
      </FadeContent>
    </div>
  )
}

export default ContactPage