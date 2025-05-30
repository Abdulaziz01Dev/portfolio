import React from 'react'

const Button = ({text}) => {
    return (
        <button className="w-[125px] h-[35px] flex items-center justify-center rounded-sm bg-amber-700 text-white hover:bg-transparent border-2 border-transparent hover:text-amber-700 hover:border-amber-700 transition-colors duration-500 cursor-pointer">{text}</button>
    )
}
export default Button
