import { urlFor } from "@/sanity";
import React from "react";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <img
        src={urlFor(skill.image).url()}
        className='rounded-xl border border-gray-500 object-cover w-10 h-10 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out bg-white'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-300 w-10 h-10 md:w-16 md:h-16 rounded-xl z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm md:text-lg font-bold text-green-800 opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
