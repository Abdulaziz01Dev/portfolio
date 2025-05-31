import React, { useState } from 'react';
import Project from "../Components/Project";
import AllProject from "@/Components/AllProject";
import WebProjects from "@/Components/ui/WebProjects";
import MobileProject from "@/Components/ui/MobileProject";
import SmallProject from "@/Components/ui/SmallProject";

const Projects = () => {
    const [selected, setSelected] = useState("All");

    return (
        <section className="dark:text-white w-full pt-16 text-black flex flex-col gap-4">
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-4xl lg:text-6xl">My Projects</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
            </div>

            {/* Navbar */}
            <Project selected={selected} setSelected={setSelected} />

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {selected === "All" && <AllProject />}
                {selected === "Web Sites" && <WebProjects />}
                {selected === "Mobile Apps" && <MobileProject />}
                {selected === "Small Projects" && <SmallProject />}
                {/* SmallProjects komponentini ham shu yerga qo‘shing */}
            </div>
        </section>
    );
};

export default Projects;
