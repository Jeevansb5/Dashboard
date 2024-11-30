"use client"

import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'


const StartingKnowledge = () => {

    const { startingKnowledge } = useGlobalContext();

    if (!startingKnowledge) {
        return (<Skeleton className='h-40 w-40 mt-10 col-span-2 md:col-span-full' />)
    }

    return (
        <div className='w-40 h-40 max-[700px]:mt-5 rounded-lg shadow-md bg-white mt-10'>
            <p className='text-sm relative p-4 text-gray-800 mb-3'>Starting Knowledge
                <Image
                    className='absolute top-5 right-2'
                    src="/circle.png"
                    alt="Next.js logo"
                    width={10}
                    height={10}
                    priority
                />
            </p>
            <h1 className='font-semibold text-2xl mb-2 mx-4'>{startingKnowledge}%</h1>
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

export default StartingKnowledge