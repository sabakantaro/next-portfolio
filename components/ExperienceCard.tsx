/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt='Experience Image'
        src='/my_image.jpeg'
        className='h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl front-light'>CEO of </h4>
        <p className='font-bold text-2xl mt-1'>ijaiofj</p>
        <div className='flex space-x-2 my-2'>
          <img
            alt='Experience Image'
            src='/my_image.jpeg'
            className='h-10 w-10 rounded-full'
          />
          <img
            alt='Experience Image'
            src='/my_image.jpeg'
            className='h-10 w-10 rounded-full'
          />
          <img
            alt='Experience Image'
            src='/my_image.jpeg'
            className='h-10 w-10 rounded-full'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>oahjiofoihawiofhioawhfoihjo</li>
          <li>oahjiofoihawiofhioawhfoihjo</li>
          <li>oahjiofoihawiofhioawhfoihjo</li>
          <li>oahjiofoihawiofhioawhfoihjo</li>
          <li>oahjiofoihawiofhioawhfoihjo</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard