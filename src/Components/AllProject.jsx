import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";
import "../app/globals.css";

const AllProject = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Mobile App" pText="Mobile Learning App" url="/icons/Git.svg"/>
            <ProjectButton aosDelay={300} text="Web Apps" pText="First Portfolio" url="/icons/Kotlin.svg"/>
            <ProjectButton aosDelay={500} text="Small Project" pText="Responsive Calculator" url="/icons/Express.svg"/>
        </>
    )
}
export default AllProject
