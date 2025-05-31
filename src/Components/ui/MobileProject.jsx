import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";

const MobileProject = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Mobile App" pText="Mobile Learning App" url="/icons/HTML5.svg"/>
            <ProjectButton aosDelay={300} text="Mobile App" pText="Mobile Portfolio" url="/icons/CSS3.svg"/>
            <ProjectButton aosDelay={500} text="Mobile App" pText="Mobile Editor" url="/icons/Electron.svg"/>
        </>
    )
}
export default MobileProject
