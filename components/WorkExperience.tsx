import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';
type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const sortedExperiences = experiences.sort((a: any, b: any) => {
    a = new Date(a.dateStarted);
    b = new Date(b.dateStarted);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  console.log(sortedExperiences);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='pageHeader'>Experience</h3>
      <div className='mt-32 flex space-x-5 overflow-x-scroll snap-x snap-mandatory'>
        {sortedExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
