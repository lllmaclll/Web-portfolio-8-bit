'use client'
import { TFunction } from "i18next";
import BlurText from "./BlurText";

interface ProjectCardProps {
    titleKey: string;
    introKey: string;
    darkMode: boolean;
    t: TFunction<"translation", undefined>;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ titleKey, introKey, darkMode, t }) => {
    return (
      <div className={`nes-container ${darkMode ? "is-dark" : "is-light bg-[#fff]"} with-title`}>
        <p className={`title ${darkMode ? "!text-rose-400" : "!text-rose-800"}`}>{t(titleKey)}</p>
        <div className="moon-font">
          <BlurText
            text={t(introKey)}
            delay={30}
            animateBy="letters"  // หรือ "letters" เพื่อแอนิเมทเป็นตัวอักษร
            direction="top"  // หรือ "bottom" สำหรับทิศทางการแอนิเมท
          />
        </div>
        {/* <p className="moon-font">{t(introKey)}</p> */}
        <button className="nes-btn is-primary mt-2">{t('project_view')}</button>
      </div>
    );
  };
  
  export default ProjectCard;