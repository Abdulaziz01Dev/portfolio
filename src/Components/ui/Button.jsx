import React from 'react';

const Button = ({ text, dateAos }) => {
    return (
        <a
            href="/turkey.png"
            download="CV-dzero"
            data-aos={dateAos}
            className="w-[200px] h-[45px] flex items-center justify-center rounded-sm bg-purple-700 text-white hover:bg-transparent border-2 border-transparent hover:text-purple-400 hover:border-purple-700 transition-colors duration-500 cursor-pointer"
        >
            {text}
        </a>
    );
};

export default Button;
