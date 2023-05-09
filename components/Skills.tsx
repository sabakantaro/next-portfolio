import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='pageHeader'>
        Skills
      </h3>
      <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill to see my proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
