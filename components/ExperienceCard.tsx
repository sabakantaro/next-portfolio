/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const formattedDate = (date: string) => {
    // Adjust date to be one day ahead because of timezone
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    return adjustedDate.toDateString().slice(4);
  };
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-full snap-center bg-[#292929]/60 p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt='Experience Image'
        src={urlFor(experience?.companyImage).url()}
        className='h-24 w-24 md:h-32
        md:w-32 rounded-full object-fit object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-md md:text-2xl front-light text-green-400 animate-pulse'>
          {experience?.jobTitle}
        </h4>
        <p className='font-bold text-sm md:text-md mt-1'>
          {experience?.company}
        </p>
        <div className='flex space-x-2 my-2 mt-5 justify-center'>
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={`Tech Image${technology._id}`}
              className='h-4 w-4 md:h-10 md:w-10 rounded-full object-cover object-center'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300 text-xs md:text-md'>
          {formattedDate(experience.dateStarted)} -{' '}
          {experience.isCurrentWorkingHere
            ? 'Present'
            : formattedDate(experience.dateEnded)}
        </p>
        <ul className='list-disc text-xs md:text-md max-h-32 overflow-y-scroll'>
          {experience.points?.map((point, i) => (
            <li key={i} className='text-xs text-left font-medium'>
              - {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
