import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute -top-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 z-[-1]'></div>
      <div className='absolute -top-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000 z-[-1]'></div>
      <div className='absolute -top-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-6000 z-[-1]'></div>
      <div className='absolute -top-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-8000 z-[-1]'></div>
      <div className='absolute -top-10 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-10000 z-[-1]'></div>
    </motion.div>
  );
}
