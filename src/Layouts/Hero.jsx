import React from 'react'
import Button from "@/Components/ui/Button";
import "../app/globals.css";
const Hero = () => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row px-10 lg:px-80 lg:items-center justify-center w-full h-screen">
            {/*Faqatgina Desktopda ko'rinadi*/}

            <div className="flex-col gap-2 dark:text-white text-black w-full lg:w-[50vw] hidden lg:flex">
                <h6 className="text-2xl lg:text-3xl">Hi I am</h6>
                <h5 className="text-3xl  text-amber-600 uppercase font-mono">Abdulaziz Vohobjonov</h5>
                <div className="flex flex-col gap-0 text-3xl xl:text-7xl">
                    <h1>Full Stack</h1>
                    <h1>Developer</h1>
                </div>
                <div className="flex flex-col gap-2 lg:mt-26">
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <Button text="Hire me"/>
                </div>
            </div>
            <div className="flex-col gap-2 w-full lg:w-[50vw] justify-center items-center hidden lg:flex">
                <img src="/HeroImage.png" alt="Shunchaki asosiy rasm" className="w-[70%] h-auto"/>
                <div className="flex gap-3 text-2xl dark:text-white text-black">
                    <a href="#"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-youtube"></i></a>
                    <a href="#"><i className="bx bxl-telegram"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>

        {/*    Bu esa mobileda ko'rinadi*/}

            <div className="flex flex-col gap-2 w-full lg:w-[50vw] justify-center items-center mt-10 lg:hidden">
                <img src="/HeroImage.png" alt="Shunchaki asosiy rasm" className="w-80 h-auto"/>
                <div className="flex gap-3 text-2xl dark:text-white text-black">
                    <a href="#"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-youtube"></i></a>
                    <a href="#"><i className="bx bxl-telegram"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>
            <div className="flex flex-col gap-2 dark:text-white text-black w-full lg:w-[50vw] lg:hidden">
                <h6 className="text-2xl lg:text-3xl">Hi I am</h6>
                <h5 className="text-3xl lg:text-4xl text-amber-600 uppercase">Abdulaziz Vohobjonov</h5>
                {/*For desktop*/}
                <div className="relative lg:flex hidden xl:text-8xl lg:flex-col lg:text-5xl">
                    <h1>Full Stack</h1>
                    <h1 className="absolute left-80 top-28 lg:left-20 lg:top-10 xl:top-24">Developer</h1>
                </div>
                {/*For mobile*/}
                <div className="flex flex-col text-3xl lg:hidden gap-4">
                    <h1 className="text-5xl">Full Stack</h1>
                    <h1 className="text-5xl">Developer</h1>
                </div>
                <div className="flex flex-col gap-2 lg:mt-26">
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <Button text="Hire me"/>
                </div>
            </div>
        </div>
    )
}
export default Hero
