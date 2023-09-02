import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const sortedSkills = skills.slice(0, 20).sort((a, b) => {
    return a.progress > b.progress ? -1 : a.progress < b.progress ? 1 : 0;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='pageHeader'>Skills</h3>
      <div className='grid grid-cols-4 gap-5'>
        {sortedSkills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
