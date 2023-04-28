import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='h-screen relative flex-col text-center md:text-left xl:px-10 min-h-screen'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
    </div>
  )
}

export default Skills