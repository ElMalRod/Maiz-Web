import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/navbar/NavBar'

const Galeria = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-screen bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
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
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Galeria
