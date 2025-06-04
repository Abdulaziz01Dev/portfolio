import React from 'react'
import ProjectButton from "@/Components/ui/ProjectsCard";
import "../app/globals.css";

const AllProject = () => {
    return (
        <>
            <ProjectButton aosDelay={100} text="Mobil Dastur" pText="Mobil Ta'lim Dasturi" url="/Project/Web Designs.png"/>
            <ProjectButton aosDelay={300} text="Web Sahifa" pText="Birinchi Portfolio" url="/Project/Web Designs-1.png"/>
            <ProjectButton aosDelay={500} text="Kichik Proyekt" pText="Calculator" url="/Project/Web Designs.png"/>
        </>
    )
}
export default AllProject
