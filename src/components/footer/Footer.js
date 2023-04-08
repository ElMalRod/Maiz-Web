import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <nav className="flex justify-between w-[100%] h-[50px] md:pr-14 bg-[#898121] z-1 mt-4">
      {/* Logo */}
      <div className="flex items-center text-[#F7F1E5]">
        <span className=" text-xl text-[#E7B10A] pr-2 pl-4">
          {' '}
          <FontAwesomeIcon icon={faSeedling} />{' '}
        </span>
        <span className="font-semibold text-xl tracking-tight "> Maíz Web</span>
      </div>
      <div className="flex items-center text-[#F7F1E5]">
        <p>Luis Emilio Maldonado Rodriguez @Copyright 2023</p>
      </div>
    </nav>
  )
}
export default Footer
