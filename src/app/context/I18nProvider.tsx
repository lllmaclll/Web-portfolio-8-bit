'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../lib/i18n'; // สร้าง i18n instance แยกต่างหาก

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    i18n.init().then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) return null; // ป้องกันการโหลดก่อน config เสร็จ

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
