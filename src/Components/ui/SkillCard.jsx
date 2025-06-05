import React, { useState } from 'react';
import "../../style/SkillCard.css";

const SkillCard = ({ image, title, description, dateAos, dateDelay }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        // Toggle only on touch devices
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            data-aos={dateAos}
            data-aos-delay={dateDelay}
            className={`card-container ${isFlipped ? "flipped" : ""}`}
            onClick={handleClick}
        >
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt="Skill icon" className="w-24 h-24 drop-shadow-sm drop-shadow-purple-950"/>
                </div>
                <div className="card-back">
                    <img src={image} alt="Skill icon" className="w-10 h-10 bg-white rounded-full p-2" />
                    <h2 className="xl:text-md text-sm xl:font-bold text-white my-1">{title}</h2>
                    <p className="xl:text-[12px] text-[10px] text-gray-200">{description}</p>
                </div>
            </div>
        </div>


    );
};

export default SkillCard;
