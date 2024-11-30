"use client"

import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'


const QuestionAnswered = () => {

  const { questionsAnswered } = useGlobalContext()

  if (!questionsAnswered) {
    return (<Skeleton className='h-40 w-40 lg:mx-5  mx-auto col-span-2 md:col-span-full' />)
  }

  return (
    <div className='w-40 h-40 max-[700px]:mt-5 rounded-lg shadow-md bg-white'>
      <p className='text-sm p-4 text-gray-800 mb-4'>Question Answered</p>
      <h1 className='font-semibold text-2xl mx-4'>{questionsAnswered}</h1>
    </div>
  )
}

export default QuestionAnswered