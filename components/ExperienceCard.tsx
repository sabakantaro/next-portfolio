/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt='Experience Image'
        src={urlFor(experience?.companyImage).url()}
        className='h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-md md:text-3xl front-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-sm md:text-xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={`Tech Image${technology._id}`}
              className='h-5 w-5 md:h-10 md:w-10 rounded-full'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300 text-xs md:text-md'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc text-xs md:text-lg max-h-32 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#6e469a]/80'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
