'use client'
import FadeContent from '@/app/components/FadeContent';
import FadeInLeft from '@/app/components/FadeInLeft';
import { useTheme } from '@/app/context/ThemeContext';
import React from 'react'
import { useTranslation } from 'react-i18next';
import ProjectCard from '@/app/components/ProjectCard';

function ProjectPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา

  return (
    <div className={`flex flex-col items-center p-8`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`mt-8 w-full max-w-4xl nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} p-4`}>
            <h2 className="text-2xl">{t('projects')}</h2>

            <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4`}>
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
    </div>
  )
}

export default ProjectPage