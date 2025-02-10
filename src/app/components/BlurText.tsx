import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BlurTextProps = {
  text: string; // ข้อความที่จะแสดง
  delay?: number; // ความหน่วงเวลา
  className?: string; // ชื่อคลาสที่สามารถนำไปใช้ในการตกแต่ง
  animateBy?: 'words' | 'letters'; // กำหนดว่าจะอนิเมทเป็นคำหรืออักษร
  direction?: 'top' | 'bottom'; // ทิศทางของอนิเมชัน
  threshold?: number; // ค่า threshold สำหรับ IntersectionObserver
  rootMargin?: string; // rootMargin สำหรับ IntersectionObserver
  easing?: (t: number) => number; // กำหนดฟังก์ชัน easing
  onAnimationComplete?: () => void; // ฟังก์ชันที่จะเรียกเมื่อการอนิเมชันเสร็จสิ้น
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  easing = (t) => t, // Default to linear easing
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Default animations based on direction
  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: '-50px' }
      : { filter: 'blur(10px)', opacity: 0, y: '50px' };

  const defaultTo = {
    filter: 'blur(0px)',
    opacity: 1,
    y: '0px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
          if (onAnimationComplete) onAnimationComplete();
        }
      },
      { threshold, rootMargin }
    );

    const target = document.getElementById('blurText');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasAnimated, onAnimationComplete]);

  return (
    <p
      id="blurText"
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {elements.map((el, index) => {
        const animationProps = {
          initial: defaultFrom, // Replace animationFrom with defaultFrom
          animate: inView ? defaultTo : defaultFrom, // Replace animationTo with defaultTo
          transition: {
            delay: index * delay / 1000, // Delay for each word or letter
            ease: easing,
          },
        };

        return (
          <motion.span
            key={index}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
            {...animationProps}
          >
            {el === ' ' ? '\u00A0' : el}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
