// Motion System - Cinematic Animation Tokens & Variants
import { Variants } from "framer-motion";

export const motionTokens = {
  duration: {
    instant: 0.1,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    cinematic: 1.2,
    epic: 2,
  },
  easing: {
    // Custom bezier curves for cinematic feel
    smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    snappy: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
    dramatic: [0.87, 0, 0.13, 1] as [number, number, number, number],
    elastic: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    gentle: [0.4, 0, 0.2, 1] as [number, number, number, number],
    bounce: [0.68, -0.6, 0.32, 1.6] as [number, number, number, number],
  },
  spring: {
    tight: { type: "spring" as const, stiffness: 400, damping: 30 },
    loose: { type: "spring" as const, stiffness: 100, damping: 20 },
    wobbly: { type: "spring" as const, stiffness: 200, damping: 15 },
    gentle: { type: "spring" as const, stiffness: 120, damping: 25 },
  },
};

// Reusable Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.elastic,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.dramatic,
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.dramatic,
    },
  },
};

export const magneticHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: motionTokens.spring.tight,
  },
};

export const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.dramatic,
    },
  },
};

export const heroTextStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: motionTokens.duration.cinematic,
      ease: motionTokens.easing.dramatic,
    },
  },
};

export const morphShape: Variants = {
  rest: { borderRadius: "20px" },
  hover: {
    borderRadius: "40px",
    transition: motionTokens.spring.gentle,
  },
};
