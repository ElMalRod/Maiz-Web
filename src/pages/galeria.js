import React, { useState, useEffect } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUpload } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/navbar/NavBar'
import axios from 'axios'

const Galeria = () => {
  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost/api-maiz/galleryController.php', inputs)
      .then(function (response) {
        console.log(response.data)
      })
  }
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    axios
      .get('http://localhost/api-maiz/galleryController.php')
      .then(function (response) {
        console.log(response.data)
        setUsers(response.data)
      })
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="h-[100%] bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
        <section className="overflow-hidden text-neutral-700 ">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">
            <div className="bg-[#898121] mb-4 rounded-lg">
              <h1 className="font-extrabold text-6xl bg-clip-text text-[white] p-4">
                <FontAwesomeIcon icon={faImages} className="pr-2" />
                Galeria
              </h1>
            </div>
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/3 flex-wrap ">
                <div className="w-full p-1 md:p-2 ">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img1}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img2}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img3}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img4}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img5}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                    src={img6}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                {users.map((user, key) => (
                  <div className="w-full p-1 md:p-2" key={key}>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center hover:opacity-80"
                      src={user.linkImg}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#898121] w-[100%]  p-4 rounded-xl mt-6">
              <p className="text-[#4C4B16] text-2xl font-semibold text-left">
                <FontAwesomeIcon
                  icon={faUpload}
                  className="pr-2 pl-6 text-[white]"
                />
                Ingresa tu imagen
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  className="bg-[white] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 mt-4"
                  placeholder="Ingresa el LINK de tu imagen"
                  type="text"
                  name="linkImg"
                  onChange={handleChange}
                ></input>

                <button className="text-center p-4 pl-8 pr-8 bg-[#E7B10A] rounded-lg mt-4 text-[white] font-semibold hover:bg-[#898121]">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Galeria
