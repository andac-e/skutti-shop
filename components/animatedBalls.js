import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";

const AnimatedBalls = () => {
  const TypingAnimation = React.memo(
    () => {
      return (
        <Typical
          loop={3}
          wrapper="p"
          steps={[
            "coming soon...",
            2000,
            "arrive bientôt...",
            2000,
            "demnächst...",
            2000,
            "prossimamente...",
            2000,
            "çok yakında...",
            2000,
          ]}
        />
      );
    },
    (props, prevProps) => true
  );
  return (
    <div className="w-72 md:w-1/2 lg:w-2/5 opacity-95 h-48 relative z-10 shadow-md antialiased overflow-hidden bg-cover bg-[url('/bg-1.jpg')] rounded-3xl m-auto animate-fade -top-24">
      <div className="top-1/3 font-bold text-2xl mt-4 text-center opacity-100 absolute inset-0 md:text-4xl text-transparent bg-gradient-to-r from-violet-400 via-sky-400 to-purple-400 bg-clip-text">
        <TypingAnimation />
      </div>
      <motion.img
        src="/images/blue_ball.png"
        alt="ball-1"
        className="block blur-[2px] overflow-hidden md:w-36 w-24 absolute -top-4 right-1 z-[1]"
        animate={{ x: 60, y: 10, rotate: 90 }}
        transition={{
          type: "spring",
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.7,
        }}
      />
      <motion.img
        src="/images/red_ball.png"
        alt="ball-1"
        className="block blur-[2px] overflow-hidden md:w-48 w-36 absolute -top-12 -left-12 z-[1]"
        animate={{ x: 30, y: -20, rotate: 120 }}
        transition={{
          type: "spring",
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.1,
        }}
      />
      <motion.img
        src="/images/purple_ball.png"
        alt="ball-1"
        className="block blur-[2px] overflow-hidden md:w-24 w-16 absolute top-32 left-12 z-[1]"
        animate={{ x: 30, y: 20, rotate: 45 }}
        transition={{
          type: "spring",
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.8,
        }}
      />
      <motion.img
        src="/images/yellow_ball.png"
        alt="ball-1"
        className="block blur-[2px] overflow-hidden md:w-32 w-24 absolute top-28 right-24 z-[1]"
        animate={{ x: 10, y: 40, rotate: -90, scale: 1.1 }}
        transition={{
          type: "spring",
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.2,
        }}
      />
    </div>
  );
};

export default AnimatedBalls;
