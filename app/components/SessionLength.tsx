"use client"

import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton';


const SessionLength = () => {

  const { avgSessionLength } = useGlobalContext();

  const min = Math.floor(avgSessionLength / 60);
  const sec = avgSessionLength % 60;

  if (!avgSessionLength) {
    return (<Skeleton className='h-40 w-40 ml-10 col-span-2 md:col-span-full' />)
  }

  return (
    <div className='w-40 max-[700px]:mt-5 h-40 rounded-lg shadow-md bg-white'>
      <p className='text-sm p-4 text-gray-800 mb-4'>Av. Session Length</p>
      <h1 className='font-semibold text-2xl mx-4'> {min}m {sec}s</h1>
    </div>
  )
}

export default SessionLength