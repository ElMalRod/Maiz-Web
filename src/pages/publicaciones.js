import NavBar from '../components/navbar/NavBar'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faCircle,
  faChevronLeft,
  faUserTie,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import imgG from '../images/Grafica.png'
import Footer from '../components/footer/Footer'
import axios from 'axios'

function Titulos() {
  return (
    <div className="flex justify-between h-[85px]  sm:w-[85%] w-[100%]">
      <div className="flex items-center ">
        <p className="text-[#4C4B16] text-4xl font-semibold">
          Situación actual del cultivo de maíz
        </p>
      </div>
      <div className="flex items-center">
        <button className="bg-[#4C4B16] hover:bg-[#E7B10A] text-white font-bold py-2 px-4 rounded h-[60%]">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

function Noticia() {
  const slides = [
    {
      url:
        'https://images.unsplash.com/photo-1567547921486-f280c2f53b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1634651423235-0117bc2b37c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    },

    {
      url:
        'https://images.unsplash.com/photo-1629808477627-3ba9b1359c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1567545819596-0d13019cae95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1550828484-45019f8bf11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="grid place-items-center rounded-t-[18px] bg-[#F7F1E5] sm:w-[85%] w-[100%]">
      <div className="bg-[#898121] rounded-t-[18px] w-[100%] ">
        <p className="text-zinc-50 pl-10 p-2">
          <FontAwesomeIcon icon={faCircle} />
        </p>
      </div>
      <div className="w-[100%] h-[400px] relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[100%]  bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className="text-3xl"
          />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextSlide}
            className="text-3xl"
          />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-xs p-2 text-[#52525b]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-[#4C4B16] font-semibold text-left text-xl pl-4">
          Programa de maíz
        </p>
        <p className="text-[#52525b] text-xl text-justify p-4">
          El maíz (Zea mays) es el grano básico de mayor consumo en Guatemala,
          la principal forma de consumo es “la tortilla” elaborada en los
          hogares a partir del grano entero, siendo la base de la comida de la
          mayoría de las familias guatemaltecas, consumiendo en promedio 114 kg
          por persona por año (2.5 quintales), sin embargo, este valor puede
          duplicarse y en algunos casos hasta triplicarse dependiendo del
          ingreso económico de las familias.
        </p>
        <p className="text-[#52525b] text-xl text-justify  p-4">
          El maíz ocupa la mayor superficie del área con potencial de uso
          agrícola a nivel nacional, durante el año 2017-2018, se sembraron en
          Guatemala 1,074,058 hectáreas con el cultivo de maíz, de las cuales se
          estimó una producción de 2,605,551 Toneladas Métricas; con un
          rendimiento promedio de 2,205.14 kg/ha (33.96 quintales/manzana) (ENA,
          2018).
        </p>
        <p className="text-[#52525b] text-xl text-justify  p-4">
          En Guatemala, el maíz es considerado un cultivo marginal, y su
          producción es concebida mayormente como de importancia “social” más
          que económica, la mayoría del grano es producido por los agricultores
          con limitado acceso a innovación tecnológica, se produce en áreas
          marginales y de baja productividad, situación que incide negativamente
          en el potencial de rendimiento del cultivo; aunado a esto, es un
          cultivo que se produce con pocos insumos comprados y que está sometido
          a una serie de problemas biológicos, climáticos y edáficos.
        </p>
      </div>
    </div>
  )
}

function Comentarios() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    axios.get('http://localhost/api-maiz/').then(function (response) {
      console.log(response.data)
      setUsers(response.data)
    })
  }
  return (
    <div className="grid place-items-center rounded-t-[18px] sm:w-[85%] w-[100%] m-4">
      <div className="bg-[#898121] rounded-t-[18px] w-[100%] ">
        <p className="text-zinc-50 pl-10 p-2 text-lg font-semibold">
          Comentarios
        </p>
      </div>
      <div className="grid grid-cols-1 w-[100%]">
        <>
          {users.map((user, key) => (
            <div
              className="font-semibold text-lg border border-[#898121]"
              key={key}
            >
              <div className="bg-[#F7F1E5] p-2 text-[#3f3f46]">
                <p>
                  <FontAwesomeIcon icon={faUserTie} className="pr-2 pl-6" />
                  {user.name}
                </p>
              </div>
              <div className="bg-white  p-2 text-[#27272a] text-justify">
                <p className="font-normal text-base">{user.coment}</p>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  )
}

const Publicaciones = () => {
  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost/api-maiz/', inputs).then(function (response) {
      console.log(response.data)
    })
  }
  return (
    <div>
      <NavBar />
      <div className="bg-[white] flex items-center justify-center h-screen mt-[100px] sm:mt-[10px] ">
        <div className="grid grid-cols-1 place-items-center gap-4  r w-screen mt-4 h-[100%]">
          <Titulos />
          <Noticia />
          <div className="bg-[#F7F1E5] sm:w-[85%] w-[100%] m-0">
            <p className="text-[#4C4B16] font-semibold text-2xl pt-4 ">
              Distribución de la producción a nivel nacional (%)
            </p>
            <img
              src={imgG}
              alt="Cinque Terre"
              width="1000"
              height="300"
              className="mx-auto"
            />
            <p className="text-[#4C4B16] text-sm pt-4 ">
              Fuente: DIPLAN-MAGA con datos INE (2018)
            </p>
          </div>
          <Comentarios />
          <div className="bg-[#E7B10A] w-[100%] sm:w-[85%] p-4 rounded-xl">
            <p className="text-[#4C4B16] text-2xl font-semibold text-left">
              <FontAwesomeIcon
                icon={faComment}
                className="pr-2 pl-6 text-[white]"
              />
              Ingresa tu comentario
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="bg-[white] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 mt-4"
                placeholder="Ingresa tu nombre"
                type="text"
                name="name"
                onChange={handleChange}
              ></input>
              <textarea
                id="message"
                rows="4"
                type="text"
                name="coment"
                className="block p-2.5 w-full text-sm text-gray-900 bg-[white] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Deja un comentario..."
                onChange={handleChange}
              ></textarea>
              <button className="text-center p-4 pl-8 pr-8 bg-[#4C4B16] rounded-lg mt-4 text-[white] font-semibold hover:bg-[#898121]">
                Enviar
              </button>
            </form>
          </div>
          <div className="text-[white]">..</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Publicaciones
