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
                    <img src={image} alt="Skill icon" className="w-24 h-24" />
                </div>
                <div className="card-back">
                    <img src={image} alt="Skill icon" className="w-10 h-10" />
                    <h2 className="text-lg font-bold text-white mb-2 mt-2">{title}</h2>
                    <p className="text-sm text-gray-200">{description}</p>
                </div>
            </div>
        </div>


    );
};

export default SkillCard;
