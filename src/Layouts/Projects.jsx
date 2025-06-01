import React, { useState } from 'react';
import Project from "../Components/Project";
import AllProject from "@/Components/AllProject";
import WebProjects from "@/Components/ui/WebProjects";
import MobileProject from "@/Components/ui/MobileProject";
import SmallProject from "@/Components/ui/SmallProject";

const Projects = () => {
    const [selected, setSelected] = useState("All");

    return (
        <section className="dark:text-white w-full pt-16 items-center text-black flex flex-col gap-10">
            <div className="flex justify-center lg:items-center border-4 dark:border-gray-200 border-black text-2xl py-4 w-[200px]">
                <h1>My Projects</h1>
            </div>
            <p className="paragraph text-center">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>

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
