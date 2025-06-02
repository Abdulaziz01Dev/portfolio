import React from 'react';

const ProjectButton = ({ text, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`p-4 px-5 lg:p-5 lg:px-10 border border-purple-800 rounded-md transition-colors hover:bg-purple-700 cursor-pointer hover:text-white duration-500 ${
                isSelected ? 'bg-purple-800 text-white' : 'bg-white text-purple-800'
            }`}
        >
            <h1>{text}</h1>
        </button>
    );
};

export default ProjectButton;
