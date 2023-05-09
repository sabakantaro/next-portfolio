/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { Project } from "../typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-aut0 items-center z-0'>
      <h3 className='pageHeader'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#6e469a]/80'>
        {projects.map((project: any, i) => (
          <div
            key={i}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen p-20 md:p-44'
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={`Project${i} Image`}
              className='w-96 h-96 object-cover rounded-full mt-20'
            />
            <div className='space-y-7 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl md:text-4xl font-semibold text-center'>
                <a
                  href={project?.linkToBuild}
                  className='underline decoration-[#6e469a]/50 '
                >
                  {project?.title}
                </a>{" "}
              </h4>
              <div className='flex items-center space-x-1 justify-center'>
                {project?.technologies?.map((technology: any) => (
                  <img
                    key={technology._id}
                    className='h-6 w-6 rounded-full'
                    src={urlFor(technology.image).url()}
                    alt={`${technology} Image`}
                  />
                ))}
              </div>
              <p className='text-xs'>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#6e469a]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
}

export default Projects;
