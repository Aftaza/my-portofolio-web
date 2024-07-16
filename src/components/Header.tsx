"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()

    return (
        <header className='container mx-auto p-4 pt-6 md:p-6 lg:p-8 flex w-full justify-between items-center'>
            <Link href="/" className="flex items-center justify-center">
                <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
                    Aftaza
                </span>
                <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-purple-500 to-red-500 bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto">
                    Aftaza
                </h1>
            </Link>
            <nav className='flex items-center justify-between'>
                <Link href="/home" className={`group text-xl font-bold px-3 ${pathname == '/home' ? "text-white" : "text-zinc-500"} transition-all ease-in-out duration-500`}>
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
                <Link href="/about" className={`group text-xl font-bold px-3 ${pathname == '/about' ? "text-white" : "text-zinc-500"} transition-all ease-in-out duration-500`}>
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
                <Link href="/project" className={`group text-xl font-bold px-3 ${pathname == '/project' ? "text-white" : "text-zinc-500"} transition-all ease-in-out duration-500`}>
                    Project
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
                <Link href="/contact" className={`group text-xl font-bold px-3 ${pathname == '/contact' ? "text-white" : "text-zinc-500"} transition-all ease-in-out duration-500`}>
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
                
            </nav>
        </header>
    )
}

export default Header