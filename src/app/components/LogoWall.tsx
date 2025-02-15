'use client'
import React, { useState, FC } from "react";

interface LogoItem {
  imgUrl: string;
  altText: string;
}

interface LogoWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

const LogoWall: FC<LogoWallProps> = ({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(6rem, 1rem + 20vmin, 20rem)", // ปรับให้ responsive มากขึ้น
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[10px] sm:p-[15px] md:p-[20px]",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass + " !mt-10"}
      style={{
        ["--size" as any]: size,
        ["--duration" as any]: duration,
        ["--color-text" as any]: textColor,
        ["--color-bg" as any]: bgColor,
        ["--color-bg-accent" as any]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "justify-items-center",
            "flex-shrink-0",
            "flex",
            "items-center",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)] sm:w-[calc(var(--size)*0.9)] md:w-[calc(var(--size)*0.8)]",
                "p-[calc(var(--size)/10)] sm:p-[calc(var(--size)/12)] md:p-[calc(var(--size)/14)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)] sm:w-[calc(var(--size)*0.9)] md:w-[calc(var(--size)*0.8)]",
                "p-[calc(var(--size)/10)] sm:p-[calc(var(--size)/12)] md:p-[calc(var(--size)/14)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default LogoWall;


// ALSO NEEDED:
//
// KEYFRAME ANIMATION:
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         scrollX: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" }
//         },
//         scrollY: {
//           "0%": { transform: "translateY(0)" },
//           "100%": { transform: "translateY(-100%)" }
//         }
//       },
//       animation: {
//         scrollX: "scrollX var(--duration) linear infinite",
//         scrollY: "scrollY var(--duration) linear infinite"
//       }
//     }
//   },
//   plugins: []
// };
//
// LAYER UTILITY SNIPPET:
//
// @layer utilities {
//   .mask-horizontal {
//     @apply [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .mask-vertical {
//     @apply [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .paused .animate-scrollX,
//   .paused .animate-scrollY {
//     animation-play-state: paused !important;
//   }

//   .reverse-x {
//     animation-direction: reverse;
//     animation-delay: -3s;
//   }
// }