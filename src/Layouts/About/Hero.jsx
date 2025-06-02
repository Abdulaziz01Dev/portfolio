import React from 'react'
import "../../app/globals.css"

const Hero = () => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row w-full h-screen">
            <div
                className="w-full flex-col justify-center items-center flex h-[40vh] bg-[url('/flat-lay-workstation-with-copy-space-laptop.jpg')] bg-cover bg-center bg-fixed">
                <h1 className="text-3xl xl:text-5xl hover:text-gray-300 text-gray-500 transition-colors duration-300 cursor-pointer">
                    <a href="/About">About Me ›</a>
                </h1>
            </div>
        </div>
    )
}
export default Hero
