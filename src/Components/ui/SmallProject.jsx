import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";

const SmallProject = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Small Project" pText="Card Animation" url="/icons/Tailwind CSS.svg"/>
            <ProjectButton aosDelay={300} text="Small Project" pText="Small Project" url="/icons/WebStorm.svg"/>
            <ProjectButton aosDelay={500} text="Small Project" pText="Responsive Calculator" url="/icons/React.svg"/>
        </>
    )
}
export default SmallProject
