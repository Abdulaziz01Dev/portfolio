import React from 'react'
import Slidebar from "@/Components/ui/Slidebar";

const Skills = () => {
    return (
        <div className="flex flex-col gap-6">
            <Slidebar text="Cyber Securty" percentage={90} />
            <Slidebar text="Website Design" percentage={86} />
            <Slidebar text="App Design" percentage={96} />
            <Slidebar text="Mobile Developer" percentage={90} />
        </div>
    )
}
export default Skills