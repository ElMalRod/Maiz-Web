import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav className="flex justify-between w-100% h-[77px] md:pr-14 bg-[#E7B10A] z-1 ">
      {/* Logo */}
      <div className="flex items-center text-[#4C4B16]">
        <span className="sm:text-3xl text-sm text-[#898121] pr-2 pl-4">
          {' '}
          <FontAwesomeIcon icon={faSeedling} />{' '}
        </span>
        <span className="font-semibold sm:text-3xl text-sm tracking-tight ">
          {' '}
          Maíz Web
        </span>
      </div>

      {/* Botones de información y contacto */}
      <div>
        <button className="text-[#F7F1E5] sm:text-xl text-sm h-full sm:px-6 px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <Link to="/publicaciones">Publicaciones</Link>
        </button>
        <button className="text-[#F7F1E5] sm:text-xl text-sm h-full sm:px-6 px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <Link to="/galeria">Galeria</Link>
        </button>
        <button className="text-[#F7F1E5] sm:text-xl text-sm h-full sm:px-6 px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <Link to="/info">Quienes somos</Link>
        </button>
      </div>
    </nav>
  )
}
export default NavBar
