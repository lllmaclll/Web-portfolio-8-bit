'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@/app/context/ThemeContext';
import PixelTransition from '@/app/components/PixelTransition'
import LogoWall from '@/app/components/LogoWall';
import ScrollToTop from '@/app/components/ScrollToTop';
import FadeInLeft from '@/app/components/FadeInLeft';
import FadeContent from '@/app/components/FadeContent';
import InfoSection from '@/app/components/InfoSection';

const logoImgs = [
  { imgUrl: "/icons/html-logo.png", altText: "HTML" },
  { imgUrl: "/icons/css-logo.png", altText: "CSS" },
  { imgUrl: "/icons/javascript-logo.png", altText: "JavaScript" },
  { imgUrl: "/icons/typescript-logo.png", altText: "TypeScript" },
  { imgUrl: "/icons/python-logo.png", altText: "Python" },
  { imgUrl: "/icons/react-logo.png", altText: "React.js" },
  { imgUrl: "/icons/vue-logo.png", altText: "Vue.js" },
  { imgUrl: "/icons/svelte-logo.png", altText: "Svelte.js" },
  { imgUrl: "/icons/nextjs-logo.png", altText: "Next.js" },
  { imgUrl: "/icons/astro-logo.png", altText: "Astro.js" },
  { imgUrl: "/icons/express-logo.png", altText: "Express.js" },
  { imgUrl: "/icons/elysia-logo.png", altText: "Elysia.js" },
  { imgUrl: "/icons/bootstrap-logo.png", altText: "Bootstrap CSS" },
  { imgUrl: "/icons/tailwind-logo.png", altText: "Tailwind CSS" },
  { imgUrl: "/icons/bun-logo.png", altText: "Bun" },
  { imgUrl: "/icons/firebase-logo.png", altText: "Firebase" },
  { imgUrl: "/icons/git-logo.png", altText: "Git" },
  { imgUrl: "/icons/mariadb-logo.png", altText: "MariaDB" },
  { imgUrl: "/icons/mongoose-odm-logo.png", altText: "Mongoose ODM" },
  { imgUrl: "/icons/mongodb-logo.png", altText: "MongoDB" },
  { imgUrl: "/icons/mysqldb-logo.png", altText: "MySQL" },
  { imgUrl: "/icons/nodejs-logo.png", altText: "Node.js" },
  { imgUrl: "/icons/postgresql-logo.png", altText: "PostgresSQL" },
  { imgUrl: "/icons/prisma-orm-logo.png", altText: "Prisma ORM" },
  { imgUrl: "/icons/sequelize-logo.png", altText: "Sequelize ORM" },
  { imgUrl: "/icons/sql-server-logo.png", altText: "SQL-Server" },
  { imgUrl: "/icons/typeorm-logo.png", altText: "TypeORM" },
];

function AboutPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา
  const pathname = usePathname(); // ดึง pathname ปัจจุบัน

  return (
    <div className={`card-container`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`nes-container is-rounded main-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"}`}>
            <h2 className="text-2xl text-center">{t('profile')}</h2>

            <div className="w-full justify-items-center">
              <PixelTransition
                firstContent={
                  <img
                    src="/images/profile.jpg"
                    className="w-full" 
                    alt="my profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <div className="w-full h-full grid place-items-center bg-[#111]">
                    <i className="nes-bcrikko mt-16" style={{ transform: "scale(2)", display: "block" }}></i>

                    <p className='mt-12' style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>{t('nickname')}</p>
                  </div>
                }
                gridSize={12}
                pixelColor={isDarkMode ? '#ffffff' : '#a7a7a7'}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            <h2 className="mt-4 text-2xl">
              <TypeAnimation
                sequence={[t('name'), 2000, '']}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </h2>

            <p className={`text-lg ${isDarkMode ? "text-lime-400" : "text-lime-700"}`}>{t('position')}</p>
            <p className='moon-font'>{t('introduce_yourself')}</p>

            <div className={`content-about`}>
              <InfoSection
                isDarkMode={isDarkMode}
                title={t("personal_profile")}
                items={[t("date_of_birth"), t("nationality"), t("age")]}
              />

              <InfoSection
                isDarkMode={isDarkMode}
                title={t("work_experience")}
                items={[t("work_line_1"), t("work_line_2")]}
              />

              <InfoSection
                isDarkMode={isDarkMode}
                title={t("education_history")}
                items={[t("education_line_1"), t("education_line_2"), t("education_line_3")]}
              />

              <LogoWall
                items={logoImgs}
                direction="horizontal"
                pauseOnHover={true}
                size="clamp(6rem, 1rem + 10vmin, 15rem)" // ลดขนาดไอคอนในมือถือ
                duration="50s"
                bgColor={isDarkMode ? "#212529" : "#fff"}
                bgAccentColor={isDarkMode ? "#413f3f" : "#6d6d6d"}
              />

              <InfoSection
                isDarkMode={isDarkMode}
                title={t("skills")}
                items={[
                  { category: "Programming Languages", examples: "HTML, CSS, JavaScript, TypeScript, Python, SQL, Dart, Flutter" },
                  { category: "Frontend Frameworks/Libraries", examples: "React.js, Vue.js, Svelte, Astro, Next.js" },
                  { category: "Backend Frameworks", examples: "Express.js, Elysia.js, Nest.js" },
                  { category: "CSS Frameworks", examples: "Bootstrap, Tailwind CSS, DaisyUI" },
                  { category: "Databases", examples: "MySQL, MongoDB, PostgreSQL, SQL Server, Firebase" },
                  { category: "ORM/ODM", examples: "Prisma, Sequelize, TypeORM, Drizzle (ORM) / Mongoose (ODM)" },
                  { category: "Runtime Environment", examples: "Node.js, Bun" },
                  { category: "Package Managers", examples: "NPM, PNPM, Yarn" },
                  { category: "Containerization & Virtualization", examples: "Docker" },
                  { category: "Version Control & Collaboration", examples: "Git, GitHub" },
                  { category: "API & Testing Tools", examples: "Postman" },
                ]}
                isTable={true}
              />

            <div className="text-center mt-2">
              <a href="/files/Resume_Charuwat_Sronkerd.pdf" download="My_Resume.pdf" className="nes-btn is-primary">
                {t('download_resume')}
              </a>
            </div>

            </div>

          </section>
        </FadeInLeft>
      </FadeContent>

      {pathname === "/backoffice/about" && <ScrollToTop />}

    </div>
  )
}

export default AboutPage