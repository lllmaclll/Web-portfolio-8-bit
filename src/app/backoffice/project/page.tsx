'use client'
import { useTheme } from '@/app/context/ThemeContext';
import React from 'react'
import { useTranslation } from 'react-i18next';

function ProjectPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา

  return (
    <div className={`${isDarkMode ? "text-white bg-portfolio-dark" : "text-black bg-portfolio-light"} flex flex-col items-center p-8`}>
      <section className={`mt-8 w-full max-w-4xl nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} p-4`}>
        <h2 className="text-2xl">{t('projects')}</h2>

        <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_1')}</p>
            <p className='moon-font'>{t('project_example__introduce_1')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_2')}</p>
            <p className='moon-font'>{t('project_example__introduce_2')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_1')}</p>
            <p className='moon-font'>{t('project_example__introduce_1')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_2')}</p>
            <p className='moon-font'>{t('project_example__introduce_2')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_1')}</p>
            <p className='moon-font'>{t('project_example__introduce_1')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_2')}</p>
            <p className='moon-font'>{t('project_example__introduce_2')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_1')}</p>
            <p className='moon-font'>{t('project_example__introduce_1')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>

          <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
            <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('project_example_title_2')}</p>
            <p className='moon-font'>{t('project_example__introduce_2')}</p>
            <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default ProjectPage