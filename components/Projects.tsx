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
      <div
        className={`relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ${
          projects.length > 1 &&
          "scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80"
        }`}
      >
        {projects.map((project: any, i) => (
          <div
            key={i}
            className='flex-shrink-0 snap-center flex flex-col items-center justify-center h-screen w-full'
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={`Project${i} Image`}
              className='w-72 h-72 object-cover rounded-full mt-15'
            />
            <div className='space-y-6 -mt-8 container px-10 md:px-40'>
              <h4 className='text-xl md:text-3xl font-semibold text-center text-white'>
                {"<"}
                {project?.title}
                {"/>"}
              </h4>
              <div className='flex space-x-2 justify-center'>
                <a className='projectButton' href={project?.linkToBuild}>
                  Website
                </a>
                <a className='projectButton' href={project?.linkToGithub}>
                  Github
                </a>
              </div>
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
              <p className='text-xs line-clamp-5'>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
