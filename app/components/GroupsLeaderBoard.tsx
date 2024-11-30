"use client"

import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'



const GroupsLeaderBoard = () => {

    const { groupLeaderBoard } = useGlobalContext();

    if (groupLeaderBoard.length == 0) {
        return (<Skeleton className='h-80 sm:w-auto lg:w-[560px] ml-10 mt-10 col-span-2 md:col-span-full' />)
    }

    return (
        <div className=' w-[560px] max-[450px]:mx-1 max-[1440px]:mt-4 max-[450px]:w-[90%] max-[450px]:px-2 max-[450px]:pr-3 bg-white  p-5 shadow-md rounded-xl'>
            <h1 className='text-[14px] text-gray-500 font-[600]'>Groups Leaderboard</h1>
            {groupLeaderBoard.map((user: any, index: number) => (
                <div key={index} className='flex items-center justify-between my-6'>
                    <div className='flex items-center '>

                        <div className='px-4'>
                            <h1 className='font-semibold text-lg'>{user.group_name}</h1>
                            <p className='text-gray-500 font-[600] text-sm'>{user.points_per_user} Points / User - {user.accuracy_percentage}% Correct</p>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold'>
                        <h1>{index + 1}</h1>
                        {user.accuracy_percentage > user.previous_accuracy_percentage &&
                            <Image
                                className='pl-2'
                                src="/LeaderboardArrow.png"
                                alt="Next.js logo"
                                width={20}
                                height={20}
                            /> || <Image
                                className='pl-2'
                                src="/LeaderboardDownArrow.png"
                                alt="Next.js logo"
                                width={20}
                                height={20}
                            />}
                    </div>
                </div>))}
        </div>
    )
}

export default GroupsLeaderBoard