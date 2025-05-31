import React from 'react'
import Skills from "@/Components/ui/Skills";

const AboutMe = () => {
    return (
        <div className="w-full flex gap-5 flex-col xl:flex-row px-5 lg:px-80 dark:text-white text-black">
            <div className="w-full lg:w-[50%]">
                <img src="/AboutMe.png" alt="This is the best image"/>
            </div>
            <div className="flex flex-col gap-5 lg:w-[50%]">
                <h1 className="text-5xl">About Me</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Skills />
            </div>
        </div>
    )
}
export default AboutMe
