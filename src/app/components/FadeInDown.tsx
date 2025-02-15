"use client";
import { motion } from "framer-motion";

const FadeInDown = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // เริ่มต้นโปร่งใสและอยู่สูงขึ้นไป 20px
      animate={{ opacity: 1, y: 0 }} // ค่อย ๆ ปรากฏและเลื่อนลง
      exit={{ opacity: 0, y: 20 }} // หายไปโดยเลื่อนลง
      transition={{ duration: 2, ease: "backOut" }} // กำหนดระยะเวลาและการเคลื่อนไหว
    >
      {children}
    </motion.div>
  );
};

export default FadeInDown;