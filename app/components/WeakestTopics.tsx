"use client"

import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton';

export default function WeakestTopics() {

    const { weakestTopics } = useGlobalContext();

    if (weakestTopics.length == 0) {
        return (<Skeleton className='h-40 sm:w-auto lg:w-[560px] ml-10 mt-10 col-span-2 md:col-span-full' />)
    }

    return (
        <div className="w-[560px] max-[450px]:mx-1 max-[450px]:w-[90%] max-[450px]:px-2  bg-white my-10 p-5 shadow-md rounded-xl min-[1300px]:ml-10 ">
            <h2 className="text-[14px] font-semibold text-gray-500 mb-4">Weakest Topics</h2>
            <div className="space-y-4">
                {weakestTopics.map((topic: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img
                            src={topic.image}
                            alt={topic.name}
                            className="w-12 h-12 rounded object-cover"
                        />

                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-900">
                                    {topic.name}
                                </span>
                            </div>

                            <div className="flex  items-center justify-">
                                <div className="w-[80%] h-2 bg-gray-200 rounded-full mt-2">
                                    <div
                                        className="h-2 rounded-full"
                                        style={{
                                            width: `${topic.correct_percentage}%`,
                                            background: "linear-gradient(to right, #FFBF1A, #FF4080)",
                                        }}
                                    ></div>
                                </div>

                                <span className="text-sm font-semibold text-gray-900 ml-2">
                                    {topic.correct_percentage}% <span className="text-sm font-semibold text-gray-500">Correct</span>
                                </span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
