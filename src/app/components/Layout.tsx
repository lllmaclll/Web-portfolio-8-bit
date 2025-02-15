'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import NavBar from '@/app/components/NavBar';
import FadeInDown from './FadeInDown';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme(); // ใช้ ThemeContext เพื่อเปลี่ยนธีม
  const pathname = usePathname(); // ดึง pathname ปัจจุบัน

  return (
    <div className={`${isDarkMode ? 'bg-portfolio-dark text-white' : 'bg-portfolio-light text-black'} min-h-screen`}>
      <FadeInDown key={pathname}> {/* ใช้ key เพื่อให้ FadeInDown ทำงานใหม่ทุกครั้ง */}
        <NavBar />
      </FadeInDown>
      <main>{children}</main>
    </div>
  );
};

export default Layout;