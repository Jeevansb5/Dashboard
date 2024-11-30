"use client"

import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'


const KnowledgeGain = () => {

  const { startingKnowledge, currentKnowledge } = useGlobalContext()

  if (!currentKnowledge || !startingKnowledge) {
    return (<Skeleton className='h-40 w-40 ml-10 mt-10 col-span-2 md:col-span-full' />)
  }

  let knowledgeGain = ((currentKnowledge - startingKnowledge) / startingKnowledge) * 100
  knowledgeGain = Math.round(knowledgeGain);

  return (
    <div className='w-40 max-[700px]:mt-5 h-40 rounded-lg shadow-md bg-white mt-10'>
      <p className='text-sm p-4 text-gray-800 mb-3'>Knowledge Gain</p>
      <h1 className='font-semibold text-2xl mb-2 mx-4'>+{knowledgeGain}%</h1>
      <Image
        className='pl-2'
        src="/Graph1.png"
        alt="Next.js logo"
        width={150}
        height={30}
        priority
      />
    </div>
  )
}

export default KnowledgeGain