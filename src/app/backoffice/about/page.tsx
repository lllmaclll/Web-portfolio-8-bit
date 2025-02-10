'use client'
import PixelTransition from '@/app/components/PixelTransition'
import React, { useEffect, useState } from 'react'
import LogoWall from '@/app/components/LogoWall';
import ScrollToTop from '@/app/components/ScrollToTop';
import { useTheme } from '@/app/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import FadeInLeft from '@/app/components/FadeInLeft';
import FadeContent from '@/app/components/FadeContent';
import InfoSection from '@/app/components/InfoSection';
import { usePathname } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';
import BlurText from '@/app/components/BlurText';

const logoImgs = [
  { imgUrl: "/images/icons8-html-logo-96.png", altText: "HTML" },
  { imgUrl: "/images/icons8-css-logo-96.png", altText: "CSS" },
  { imgUrl: "/images/icons8-javascript-96.png", altText: "JavaScript" },
  { imgUrl: "/images/icons8-typescript-96.png", altText: "TypeScript" },
  { imgUrl: "/images/python-logo.png", altText: "Python" },
  { imgUrl: "/images/react-logo.png", altText: "React.js" },
  { imgUrl: "/images/vue-logo.png", altText: "Vue.js" },
  { imgUrl: "/images/svelt-logo.png", altText: "Svelte.js" },
  { imgUrl: "/images/nextjs-logo.jpg", altText: "Next.js" },
  { imgUrl: "/images/astro-logo.png", altText: "Astro.js" },
  { imgUrl: "/images/expressjs-logo.png", altText: "Express.js" },
  { imgUrl: "/images/elysia-logo.png", altText: "Elysia.js" },
  { imgUrl: "/images/bootstrap-logo.png", altText: "Bootstrap CSS" },
  { imgUrl: "/images/tailwind-logo.png", altText: "Tailwind CSS" },
  { imgUrl: "/images/bun-logo.png", altText: "Bun" },
  { imgUrl: "/images/firebase-logo.png", altText: "Firebase" },
  { imgUrl: "/images/git-logo.png", altText: "Git" },
  { imgUrl: "/images/mariadb-logo.png", altText: "MariaDB" },
  { imgUrl: "/images/mongoose-logo.png", altText: "Mongoose ODM" },
  { imgUrl: "/images/mongo-logo.png", altText: "MongoDB" },
  { imgUrl: "/images/mysql-logo.png", altText: "MySQL" },
  { imgUrl: "/images/nodejs-logo.png", altText: "Node.js" },
  { imgUrl: "/images/postgresql-logo.png", altText: "PostgresSQL" },
  { imgUrl: "/images/prisma-logo.png", altText: "Prisma ORM" },
  { imgUrl: "/images/sequelize-logo.png", altText: "Sequelize ORM" },
  { imgUrl: "/images/sqlserver-logo.png", altText: "SQL-Server" },
  { imgUrl: "/images/typeorm-logo.png", altText: "TypeORM" },
];

function AboutPage() {
  const { isDarkMode } = useTheme(); // ใช้ useTheme
  const { t } = useTranslation(); // ใช้แปลภาษา
  const pathname = usePathname(); // ดึง pathname ปัจจุบัน

  return (
    <div className={`flex flex-col items-center p-8`}>
      <FadeContent blur={true} duration={2000} easing="ease-in-out" initialOpacity={0}>
        <FadeInLeft>
          <section className={`mt-8 w-full max-w-4xl nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} p-4 text-center`}>
            {/* <h2 className="flex text-2xl">
              <TypeAnimation
                sequence={[1000, t('profile')]}
                speed={40}
                // repeat={Infinity}
                cursor={false}
              />
            </h2> */}
            <h2 className="flex text-2xl">{t('profile')}</h2>

            <div className="w-full justify-items-center">
              <PixelTransition
                firstContent={
                  <img
                    src="/images/profile.jpg"
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt="default pixel transition content, a cat!"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111"
                    }}
                  >
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
            {/* <h2 className="mt-4 text-2xl">{t('name')}</h2> */}

            <p className={`text-lg ${isDarkMode ? "text-lime-400" : "text-lime-700"}`}>{t('position')}</p>
            <div className='moon-font'>
              <BlurText
                text={t('introduce_yourself')}
                delay={30}
                animateBy="letters"  // หรือ "letters" เพื่อแอนิเมทเป็นตัวอักษร
                direction="top"  // หรือ "bottom" สำหรับทิศทางการแอนิเมท
              />
            </div>
            {/* <p className='moon-font'>{t('introduce_yourself')}</p> */}

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
              size="clamp(8rem, 1rem + 20vmin, 25rem)"
              duration="50s"
              bgColor={isDarkMode ? "#212529" : "#fff"}
              bgAccentColor={isDarkMode ? "#413f3f" : "#aeaeae"}
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


          </section>
        </FadeInLeft>
      </FadeContent>

      {pathname === "/backoffice/about" && <ScrollToTop />}

    </div>
  )
}

export default AboutPage