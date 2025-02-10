"use client";

import { motion } from "framer-motion";

const FadeInTopRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -50 }} // เริ่มจากโปร่งใสและอยู่ขวาบน (+50px, -50px)
      animate={{ opacity: 1, x: 0, y: 0 }} // ค่อย ๆ ปรากฏและเลื่อนมาตำแหน่งปกติ
      exit={{ opacity: 0, x: 50, y: -50 }} // หายไปโดยเลื่อนกลับไปทางขวาบน
      transition={{ duration: 0.5, ease: "easeOut" }} // ตั้งค่า transition
    >
      {children}
    </motion.div>
  );
};

export default FadeInTopRight;
