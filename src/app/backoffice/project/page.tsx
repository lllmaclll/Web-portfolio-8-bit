'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import FadeContent from '@/app/components/FadeContent';
import FadeInLeft from '@/app/components/FadeInLeft';
import ProjectCard from '@/app/components/ProjectCard';
import ScrollToTop from '@/app/components/ScrollToTop';

function ProjectPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา
    const pathname = usePathname(); // ดึง pathname ปัจจุบัน

  return (
    <div className={`card-container`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`nes-container is-rounded main-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"}`}>
            <h2 className="text-2xl text-center">{t('projects')}</h2>

            <div className={`content-project`}>
              <ProjectCard titleKey="project_example_title_1" introKey="project_example__introduce_1" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_2" introKey="project_example__introduce_2" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_1" introKey="project_example__introduce_1" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_2" introKey="project_example__introduce_2" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_1" introKey="project_example__introduce_1" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_2" introKey="project_example__introduce_2" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_1" introKey="project_example__introduce_1" darkMode={isDarkMode} t={t} />
              <ProjectCard titleKey="project_example_title_2" introKey="project_example__introduce_2" darkMode={isDarkMode} t={t} />
            </div>
            
          </section>
        </FadeInLeft>
      </FadeContent>

      {pathname === "/backoffice/project" && <ScrollToTop />}
    </div>
  )
}

export default ProjectPage