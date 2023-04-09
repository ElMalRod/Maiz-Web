import React from 'react'
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
          <a href="http://localhost:3000/">Maíz Web</a>
        </span>
      </div>

      {/* Botones de información y contacto */}
      <div className="h-[100%] ">
        <button className=" h-[100%] text-[#F7F1E5] sm:text-xl text-sm px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <a
            href="http://localhost:3000/publicaciones"
            className=" w-[100%] text-center inline-block"
          >
            Publicaciones
          </a>
        </button>

        <button className="text-[#F7F1E5] sm:text-xl text-sm h-full sm:px-6 px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <a
            href="http://localhost:3000/galeria"
            className=" w-[100%] text-center inline-block"
          >
            Galeria
          </a>
        </button>
        <button className=" h-[100%] text-[#F7F1E5] sm:text-xl text-sm px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <a
            href="http://localhost:3000/recetas"
            className=" w-[100%] text-center inline-block"
          >
            Recetas
          </a>
        </button>
        <button className="text-[#F7F1E5] sm:text-xl text-sm h-full sm:px-6 px-2 font-semibold hover:bg-[#898121] hover:drop-shadow-sm">
          <a
            href="http://localhost:3000/info"
            className=" w-[100%] text-center inline-block"
          >
            Quienes somos
          </a>
        </button>
      </div>
    </nav>
  )
}
export default NavBar
