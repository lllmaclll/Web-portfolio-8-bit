"use client";
import { motion } from "framer-motion";

const FadeInLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -2000 }} // เริ่มต้นโปร่งใสและอยู่ทางซ้าย (-50px)
      animate={{ opacity: 1, x: 0 }} // ค่อย ๆ ปรากฏและเลื่อนมาตำแหน่งปกติ
      exit={{ opacity: 0, x: -50 }} // หายไปโดยเลื่อนกลับไปทางซ้าย
      transition={{ duration: 2, ease: "backOut" }} // ตั้งค่า transition
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;