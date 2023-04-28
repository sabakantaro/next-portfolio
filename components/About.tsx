import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt='About me Image'
        src='/my_image.jpeg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          I&rsquo;m a skilled Full Stack Developer with strong points for problem-solving and turning ideas into reality. 💪 With a solid background in system design and extensive experience in user-oriented development and code reviewing, I thrive in fast-paced environments and enjoy tackling complex challenges. I&rsquo;m excited to leverage my expertise to make a positive impact through technology. 💻
        </p>
      </div>
    </motion.div>
  )
}

export default About