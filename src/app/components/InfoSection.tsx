'use client'
import { useTranslation } from 'react-i18next';
import BlurText from './BlurText';

interface InfoSectionProps {
  isDarkMode: boolean;
  title: string;
  items: (string | { category: string; examples: string })[]; // รองรับทั้ง string และ ออบเจกต์
  isTable?: boolean; // เพิ่ม prop สำหรับการเลือกแสดงแบบตาราง
}

const InfoSection: React.FC<InfoSectionProps> = ({ isDarkMode, title, items, isTable = false }) => {
  const { t } = useTranslation(); // ใช้แปลภาษา

  return (
    <div className={`nes-container ${isDarkMode ? "is-dark" : "is-light bg-[#fff]"} with-title !mt-10`}>
      <p className={`title ${isDarkMode ? "!text-rose-400" : "!text-rose-800"}`}>{title}</p>
      <div className="lists">
        {isTable ? (
          <div className="overflow-x-auto">
            <table className={`table-auto w-full border-collapse ${isDarkMode ? "text-white border-white" : "text-black border-black"}`}>
              <thead className="text-2xl border">
                <tr>
                  <th className="px-4 py-2 border">{t('category')}</th>
                  <th className="px-4 py-2 border">{t('example_technologies')}</th>
                </tr>
              </thead>
              <tbody className="moon-font">
                {items.map((item, index) => {
                  if (typeof item === 'object') {
                    return (
                      <tr key={index}>
                        <td className="px-4 py-2 border">{item.category}</td>
                        <td className="px-4 py-2 border">{item.examples}</td>
                      </tr>
                    );
                  }
                  return null; // ถ้าไม่ใช่ออบเจกต์ ให้ไม่แสดง
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <ul className="nes-list !list-disc justify-items-start !ms-20 text-start moon-font">
            {items.map((item, index) => {
              if (typeof item === 'string') {
                return <li key={index}>
                  <BlurText
                    text={item}
                    delay={40}
                    animateBy="letters"  // หรือ "letters" เพื่อแอนิเมทเป็นตัวอักษร
                    direction="top"  // หรือ "bottom" สำหรับทิศทางการแอนิเมท
                  />
                </li>; // ถ้าเป็น string ให้แสดงใน list
              }
              return null; // ถ้าไม่ใช่ string ให้ไม่แสดง
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
