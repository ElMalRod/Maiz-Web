import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEye } from '@fortawesome/free-solid-svg-icons'
const Info = () => {
  return (
    <div className="bg-[white] h-screen">
      <NavBar />
      <div className="flex items-center justify-center h-[100%] mt-[100px] sm:mt-[10px]">
        <div className="grid grid-cols-1  place-items-center w-[100%] h-[100%]">
          <div className="grid grid-cols-1 sm:grid-cols-2  place-items-center gap-4 bg-[white] sm:w-[85%] w-[100%] h-[100%]">
            <div className="w-[100%] bg-[white] m-4 h-[50%] rounded-[18px] overflow-hidden shadow-lg">
              <div className="bg-[#4C4B16] rounded-t-[18px] w-[100%] ">
                <p className="text-zinc-50 pl-10 p-2 text-xl font-semibold">
                  <FontAwesomeIcon icon={faEarthAmericas} className="pr-2 " />
                  Misión
                </p>
              </div>
              <div className="h-[100%] text-xl text-justify p-10 ">
                <p>
                  Nuestra misión es proporcionar información actualizada y
                  confiable sobre el maíz a productores, consumidores,
                  investigadores y otros interesados. Nos esforzamos por ser una
                  fuente confiable de información que ayude a fomentar la
                  producción sostenible y el consumo consciente del maíz.
                </p>
                <div className="w-[100%] h-[55%] rounded-lg mt-4 overflow-hidden">
                  <div
                    style={{
                      backgroundImage: `url(https://media.istockphoto.com/id/1174976778/es/vector/vector-de-patr%C3%B3n-de-ma%C3%ADz-sin-costura.jpg?s=1024x1024&w=is&k=20&c=DrrM8jVx3cjda0e41hL8vF2U2Ug5iQ9gGk82nYnXhVg=`,
                    }}
                    className="w-full h-full bg-center bg-cover rounded-t-[18px] filter grayscale opacity-20"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-[white] m-4 h-[50%] rounded-[18px] overflow-hidden shadow-lg">
              <div className="bg-[#4C4B16] rounded-t-[18px] w-[100%] ">
                <p className="text-zinc-50 pl-10 p-2 text-xl font-semibold">
                  <FontAwesomeIcon icon={faEye} className="pr-2 " />
                  Visión
                </p>
              </div>
              <div className="h-[100%] text-xl text-justify p-10 ">
                <p>
                  Nuestra visión es ser la página web líder en información sobre
                  el maíz en el país, reconocida por nuestra precisión,
                  relevancia y accesibilidad. Esperamos que nuestra página web
                  sea un recurso valioso para aquellos que buscan información
                  sobre el maíz, y que ayude a promover el consumo consciente.
                </p>
                <div className="w-[100%] h-[55%] rounded-lg mt-4 overflow-hidden">
                  <div
                    style={{
                      backgroundImage: `url(https://media.istockphoto.com/id/1174976778/es/vector/vector-de-patr%C3%B3n-de-ma%C3%ADz-sin-costura.jpg?s=1024x1024&w=is&k=20&c=DrrM8jVx3cjda0e41hL8vF2U2Ug5iQ9gGk82nYnXhVg=`,
                    }}
                    className="w-full h-full bg-center bg-cover rounded-t-[18px] filter grayscale opacity-20"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Info
