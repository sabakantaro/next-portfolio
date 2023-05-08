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
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='pageHeader'>ContactMe</h3>
      <div className='flex flex-col space-y-5 md:space-y-10 pt-20'>
        <div className='space-y-5 md:space-y-10'>
          <div className='flex space-x-3 items-center justify-center'>
            <PhoneIcon className='text-[#6e469a] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-base md:text-2xl'>+{pageInfo?.phoneNumber}</p>
          </div>
          <div className='flex space-x-3 items-center justify-center'>
            <EnvelopeIcon className='text-[#6e469a] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-base md:text-2xl'>{pageInfo?.email}</p>
          </div>
          <div className='flex space-x-3 items-center justify-center'>
            <MapPinIcon className='text-[#6e469a] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-base md:text-2xl'>{pageInfo?.address}</p>
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
              className='bg-[#6e469a] py-5 px-10 rounded-md text-black font-bold text-lg '
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
