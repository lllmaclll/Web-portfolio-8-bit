'use client'
import PixelTransition from '@/app/components/PixelTransition'
import React from 'react'
import LogoWall from '@/app/components/LogoWall';
import ScrollToTop from '@/app/components/ScrollToTop';
import { useTheme } from '@/app/context/ThemeContext';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className={`min-h-screen ${isDarkMode ? "text-white bg-portfolio-dark" : "text-black bg-portfolio-light"} flex flex-col items-center p-8`}>
      <section className={`mt-8 w-full max-w-4xl nes-container is-rounded ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} p-4 text-center`}>
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

        <h2 className="mt-4 text-2xl">{t('name')}</h2>
        <p className={`text-lg ${isDarkMode ? "text-lime-400" : "text-lime-700"}`}>{t('position')}</p>
        <p className='moon-font'>
          {t('introduce_yourself')}
        </p>

        <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title !mt-10`}>
          <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('personal_profile')}</p>
          <div className="lists">
            <ul className="nes-list !list-disc justify-items-start !ms-20 text-start moon-font">
              <li>{t('date_of_birth')}</li>
              <li>{t('nationality')}</li>
              <li>{t('age')}</li>
            </ul>
          </div>
        </div>

        <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title !mt-10`}>
          <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('work_experience')}</p>
          <div className="lists">
            <ul className="nes-list !list-disc justify-items-start !ms-20 text-start moon-font">
              <li>{t('work_line_1')}</li>
              <li>{t('work_line_2')}</li>
            </ul>
          </div>
        </div>

        <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title !mt-10`}>
          <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('education_history')}</p>
          <div className="lists">
            <ul className="nes-list !list-disc justify-items-start !ms-20 text-start moon-font">
              <li>{t('education_line_1')}</li>
              <li>{t('education_line_2')}</li>
              <li>{t('education_line_3')}</li>
            </ul>
          </div>
        </div>

        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="50s"
          bgColor={isDarkMode ? "#212529" : "#fff"}
          bgAccentColor={isDarkMode ? "#413f3f" : "#aeaeae"}
        />

        <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title !mt-10`}>
          <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t('skills')}</p>

          <div className="overflow-x-auto">
            <table className={`table-auto w-full border-collapse ${isDarkMode ? "text-white border-white" : "text-black border-black"}`}>
              <thead className="text-2xl border">
                <tr>
                  <th className="px-4 py-2 border">{t('category')}</th>
                  <th className="px-4 py-2 border">{t('example_technologies')}</th>
                </tr>
              </thead>
              <tbody className="moon-font">
                {/* Programming Languages */}
                <tr>
                  <td className="px-4 py-2 border">Programming Languages</td>
                  <td className="px-4 py-2 border">HTML, CSS, JavaScript, TypeScript, Python, SQL, Dart, Flutter</td>
                </tr>

                {/* Frontend Frameworks */}
                <tr>
                  <td className="px-4 py-2 border">Frontend Frameworks/Libraries</td>
                  <td className="px-4 py-2 border">React.js, Vue.js, Svelte, Astro, Next.js</td>
                </tr>

                {/* Backend Frameworks */}
                <tr>
                  <td className="px-4 py-2 border">Backend Frameworks</td>
                  <td className="px-4 py-2 border">Express.js, Elysia.js, Nest.js</td>
                </tr>

                {/* CSS Frameworks */}
                <tr>
                  <td className="px-4 py-2 border">CSS Frameworks</td>
                  <td className="px-4 py-2 border">Bootstrap, Tailwind CSS, DaisyUI</td>
                </tr>

                {/* Databases */}
                <tr>
                  <td className="px-4 py-2 border">Databases</td>
                  <td className="px-4 py-2 border">MySQL, MongoDB, PostgreSQL, SQL Server, Firebase</td>
                </tr>

                {/* ORM/ODM */}
                <tr>
                  <td className="px-4 py-2 border">ORM/ODM</td>
                  <td className="px-4 py-2 border">Prisma, Sequelize, TypeORM, Drizzle (ORM) / Mongoose (ODM)</td>
                </tr>

                {/* Runtime Environment */}
                <tr>
                  <td className="px-4 py-2 border">Runtime Environment</td>
                  <td className="px-4 py-2 border">Node.js, Bun</td>
                </tr>

                {/* Package Managers */}
                <tr>
                  <td className="px-4 py-2 border">Package Managers</td>
                  <td className="px-4 py-2 border">NPM, PNPM, Yarn</td>
                </tr>

                {/* Containerization & Virtualization */}
                <tr>
                  <td className="px-4 py-2 border">Containerization & Virtualization</td>
                  <td className="px-4 py-2 border">Docker</td>
                </tr>

                {/* Version Control & Collaboration */}
                <tr>
                  <td className="px-4 py-2 border">Version Control & Collaboration</td>
                  <td className="px-4 py-2 border">Git, GitHub</td>
                </tr>

                {/* API & Testing Tools */}
                <tr>
                  <td className="px-4 py-2 border">API & Testing Tools</td>
                  <td className="px-4 py-2 border">Postman</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </section>

      <ScrollToTop />
    </div>
  )
}

export default AboutPage