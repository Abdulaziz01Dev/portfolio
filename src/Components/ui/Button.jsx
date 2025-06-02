import React from 'react'

const Button = ({text, dateAos}) => {
    return (
        <button data-aos={dateAos} className="w-[125px] h-[35px] flex items-center justify-center rounded-sm bg-purple-700 text-white hover:bg-transparent border-2 border-transparent hover:text-purple-400 hover:border-purple-700 transition-colors duration-500 cursor-pointer">{text}</button>
    )
}
export default Button
