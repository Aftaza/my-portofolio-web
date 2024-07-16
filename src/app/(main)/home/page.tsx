"use client"
import Image from 'next/image'
import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { TypeAnimation } from 'react-type-animation'

const Page = () => {
  return (
    <div className="flex justify-center w-full items-center mb-4 gap-0">
        <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold'>M ALFIAN TAFTAZANI</h1>
            <TypeAnimation 
                sequence={[
                    'Fullstack web developer',
                    1000,
                    'Red Team Cybersecurity',
                    1000,
                    'Robotics Engineering',
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='text-xl italic'
            />
        </div>
        <div className='flex items-center justify-center'>
            <Image src="/BgRectangle.svg" alt='Bg Hero' width={250} height={250} className='absolute pointer-events-none' />
            <Image src="/Hero.svg" alt='hero image' width={300} height={300} className='relative -bottom-3 pointer-events-none' />
        </div>
        <div className='flex flex-col items-end w-1/3 gap-3 '>
            <p className='text-md text-right'>
                I am a person who likes to learn new things and is easy to adapt. For me, a website and tech is a place to express ideas that have function and meaning.
            </p>
            <button className='flex py-1 px-5 bg-indigo-700 rounded-lg gap-3 bg-gradient-to-r from-indigo-700 from-0% via-purple-600 via-50% to-red-800 to-100% hover:animate-wiggle'>
                <ArrowDownTrayIcon className='w-5' />
                My Cv
            </button>
        </div>
    </div>
  )
}

export default Page