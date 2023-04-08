import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
const Recetas = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    axios
      .get('http://localhost/api-maiz/recetasController.php')
      .then(function (response) {
        console.log(response.data)
        setUsers(response.data)
      })
  }
  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost/api-maiz/recetasController.php', inputs)
      .then(function (response) {
        console.log(response.data)
      })
  }
  return (
    <>
      <NavBar />
      <div className="w-[100%] p-6 text-center">
        <p className="text-[#4C4B16] text-4xl font-semibold ">
          Recetas y platillos con maíz
        </p>
      </div>
      <div className="h-[100%] w-screen flex items-center justify-center mt-[100px] sm:mt-[10px] ">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 gap-4 place-items-center">
          {/*card start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 */}
          {users.map((user, key) => (
            <div key={key}>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:border-4 hover:border-[#E7B10A]">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={user.imagen}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {user.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {user.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/*card end */}
        </div>
      </div>
      <div className="w-[100%]  grid grid-cols-1 gap-4 place-items-center pt-6">
        <div className="bg-[#F7F1E5] border w-[100%] sm:w-[60%] p-4 rounded-xl">
          <p className="text-[#4C4B16] text-2xl font-semibold text-left">
            <FontAwesomeIcon icon={faComment} className="pr-2 pl-6 " />
            Ingresa tu receta
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[white] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 mt-4"
              placeholder="Ingresa nombre del platillo"
              type="text"
              name="name"
              onChange={handleChange}
            ></input>
            <textarea
              id="message"
              rows="4"
              type="text"
              name="descripcion"
              className="block p-2.5 w-full text-sm text-gray-900 bg-[white] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Ingresa descripción del platillo"
              onChange={handleChange}
            ></textarea>
            <input
              className="bg-[white] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 mt-4"
              placeholder="Ingresa LINK de imagen del platillo"
              type="text"
              name="imagen"
              onChange={handleChange}
            ></input>
            <button className="text-center p-2 pl-8 pr-8 bg-[#4C4B16] rounded-lg mt-2 text-[white] font-semibold hover:bg-[#898121]">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Recetas
