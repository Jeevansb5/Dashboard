"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {!isOpen && <button
                className="p-4 text-gray-800 z-20 fixed top-7 "
                onClick={handleClick}
            >
                {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>}

            <div className={`w-64 flex-col  fixed top-0 max-[800px]:tr items-center justify-around z-10 rounded-3xl bg-white py-7 px-6 b h-[100%] transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button
                    className=" p-4 text-gray-800 z-20 "
                    onClick={handleClick}
                >
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
                <Image
                    className='my-3'
                    src="/logo.png"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <div className=' my-12'>
                    <a href="" className='bg-blue-100 rounded-xl flex justify-around my-6 p-3 px-4 w-44 text-blue-600'><h1 className='mx-7'>Reports</h1> </a>
                    <a href="" className='flex items-center my-10 mx-4'>
                        <Image
                            src="/path.png"
                            alt="logo"
                            width={20}
                            height={20}
                            priority
                        /> <h1 className='mx-6 text-[15px] font-medium text-gray-700'>Library</h1>

                    </a>
                    <a href="" className='flex items-center mx-2  my-10'>
                        <Image
                            src="/People.png"
                            alt="people"
                            width={34}
                            height={34}
                            priority
                        /> <h1 className='mx-4 text-[15px] font-medium text-gray-700'>People</h1>

                    </a>
                    <a href="" className='flex items-center mx-2 my-10'>
                        <Image
                            src="/Assignments.png"
                            alt="Activites"
                            width={34}
                            height={34}
                            priority
                        /> <h1 className='mx-4 text-[15px] font-medium text-gray-700'>Activites</h1>
                    </a>
                </div>
                <div className='py-5'>
                    <h1 className='font-semibold px-4 text-gray-500 text-lg'>Support</h1>
                    <div className='my-7 flex items-center'>
                        <Image
                            className='pl-2'
                            src="/Bulb.png"
                            alt="Next.js logo"
                            width={34}
                            height={34}
                            priority
                        /> <h1 className='pl-4 text-[15px] font-medium text-gray-700'>Get Started</h1>
                    </div>
                    <div className='my-7 flex items-center'>
                        <Image
                            className='pl-2'
                            src="/Settings.png"
                            alt="Next.js logo"
                            width={34}
                            height={34}
                            priority
                        /> <h1 className='pl-4 text-[15px] font-medium text-gray-700'>Settings</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar