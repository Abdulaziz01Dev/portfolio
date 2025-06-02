import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";
import "../app/globals.css";

const AllProject = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Mobile App" pText="Mobile Learning App" url="/Project/Web Designs.png"/>
            <ProjectButton aosDelay={300} text="Web Apps" pText="First Portfolio" url="/Project/Web Designs-1.png"/>
            <ProjectButton aosDelay={500} text="Small Project" pText="Responsive Calculator" url="/Project/Web Designs.png"/>
        </>
    )
}
export default AllProject
