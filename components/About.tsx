import React from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function About({ pageInfo }: Props) {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
    <motion.div
      initial='hidden'
      animate={controls}
      variants={containerVariants}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center'
    >
      <motion.h3 variants={childVariants} className='pageHeader'>
        About
      </motion.h3>
      <motion.img
        variants={childVariants}
        alt='About me Image'
        src={urlFor(pageInfo?.profilePic).url()}
        className='-mb-20 md:mb-0 mt-10 flex-shrink-0 w-54 h-48 object-cover rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
      />
      <motion.div
        variants={childVariants}
        className='space-y-5 px-0 md:px-8 w-5/6'
      >
        <h4 className='text-2xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-green-500'>background</span>
        </h4>
        <p className='text-sm md:text-md lg:text-lg'>
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
