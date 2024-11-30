"use client"
import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'



const AllUsers = () => {

  const { activeUsers } = useGlobalContext();

  if (!activeUsers.current || !activeUsers.total) {
    return (<Skeleton className='h-40 w-40 col-span-2 md:col-span-full' />)
  }

  return (
    <div className='w-40 h-40 rounded-lg shadow-md bg-white'>
      <p className='text-sm p-4 text-gray-800 mb-4'>Active Users</p>
      <h1 className='font-semibold text-2xl mx-4'>{activeUsers.current}<span className='text-lg text-gray-700 font-semibold'>/{activeUsers.total}</span></h1>
    </div>
  )
}

export default AllUsers