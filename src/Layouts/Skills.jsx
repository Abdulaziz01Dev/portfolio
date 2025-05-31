import React from 'react'
import "../app/globals.css"
import UsingNow from "../Components/ui/UsingNow"
import Learned from "@/Components/ui/Learned";
import OtherSkills from "@/Components/ui/OtherSkills";

const Skills = () => {
    return (
        <section className="flex flex-col items-center pb-16 lg:items-left gap-6 w-full pt-44 px-16 lg:px-80">
            <div className="flex justify-center lg:items-left border-4 dark:border-gray-200 border-black text-2xl py-4 w-[200px]">
                <h1 className="dark:text-white text-black">Skills</h1>
            </div>
            <div className="skills-tabs">
                <h1 className="skills-title">Using now:</h1>
                <div>
                    <UsingNow />
                </div>
            </div>
            <div className="skills-tabs">
                <h1 className="skills-title">Learning:</h1>
                <div>
                    <Learned />
                </div>
            </div>
            <div className="skills-tabs">
                <h1 className="skills-title">Other skills:</h1>
                <div>
                    <OtherSkills />
                </div>
            </div>
        </section>
    )
}
export default Skills
