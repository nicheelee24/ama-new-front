import React from 'react'
import { useTranslation } from 'react-i18next'
import ModelLogo from '../assets/Modal-Logo.gif'

export default function LoadingModal ({ message }) {
  const { t } = useTranslation()

  return (
    <div className='z-[100] w-screen md:w-full flex h-full min-h-screen top-0 left-0 backdrop-blur-sm fixed'>
      <div className='w-full h-screen bg-cover flex px-8 py-20 justify-center items-center '>
        <div className='relative top-0 left-0 rotate-45 mx-auto backdrop-blur-md  w-32 h-32  rounded-2xl'>
          <img
            src={ModelLogo}
            alt='ModelLogo'
            className='mx-auto w-50 z-10 relative -rotate-45 top-6 -left-3'
          />
         
           
          
        </div>
      </div>
    </div>
  )
}
