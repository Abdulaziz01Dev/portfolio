import React from 'react';
import ProjectButton from "@/Components/ui/ProjectButton";

const Project = ({ selected, setSelected }) => {
    const categories = ["Hammasi", "Web Sahifalar", "Mobil Dasturlar", "Kichik Proyektlar"];

    return (
        <div className="flex items-center flex-wrap gap-4 justify-center">
            {categories.map((category) => (
                <ProjectButton
                    key={category}
                    text={category}
                    isSelected={selected === category}
                    onClick={() => setSelected(category)}
                />
            ))}
        </div>
    );
};

export default Project;
