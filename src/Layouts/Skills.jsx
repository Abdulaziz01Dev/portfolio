import React from 'react'
import "../app/globals.css"
import UsingNow from "../Components/ui/UsingNow"
import Learned from "@/Components/ui/Learned";
import OtherSkills from "@/Components/ui/OtherSkills";

const Skills = () => {
    return (
        <div className="flex flex-col gap-6 w-full h-[60vh] mt-16 px-16 lg:px-80">
            <div className="flex justify-center border-4 dark:border-gray-200 border-black text-2xl py-4 w-[200px]">
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
        </div>
    )
}
export default Skills
