import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "@/typings";

type Props = { pageInfo: PageInfo };

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
      <h3 className='pageHeader'>Contact Me</h3>
      <div className='flex flex-col space-y-5 pt-20'>
        <div className='space-y-5'>
          <div className='flex space-x-3 items-center justify-center'>
            <PhoneIcon className='text-green-500 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-gray-400 text-base md:text-xl'>+{pageInfo?.phoneNumber}</p>
          </div>
          <div className='flex space-x-3 items-center justify-center'>
            <EnvelopeIcon className='text-green-500 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-gray-400 text-base md:text-xl'>{pageInfo?.email}</p>
          </div>
          <div className='flex space-x-3 items-center justify-center'>
            <MapPinIcon className='text-green-500 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-gray-400 text-base md:text-xl'>{pageInfo?.address}</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-full md:w-auto mx-auto'
          >
            <div className='flex flex-col space-y-2'>
              <input
                {...register("name")}
                placeholder='Name'
                className='contactInput flex-grow'
                type='text'
              />
              <input
                {...register("email")}
                placeholder='Email'
                className='contactInput flex-grow'
                type='email'
              />
            </div>
            <input
              {...register("subject")}
              placeholder='Subject'
              className='contactInput'
              type='text'
            />
            <textarea
              {...register("message")}
              placeholder='Message'
              className='contactInput'
            />
            <button
              type='submit'
              className='bg-green-500 animate-pulse hover:bg-green-700 active:bg-green-400 duration-300 py-2 px-4 rounded-md text-gray-800 font-bold text-sm md:text-base uppercase'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
