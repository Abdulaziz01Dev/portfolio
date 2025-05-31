import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";

const WebProjects = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Web App" pText="Web Dashboard" url="/icons/Angular.svg"/>
            <ProjectButton aosDelay={300} text="Web App" pText="First Portfolio" url="/icons/Blender.svg"/>
            <ProjectButton aosDelay={500} text="Web App" pText="Responsive Portfolio" url="/icons/Express.svg"/>
        </>
    )
}
export default WebProjects
