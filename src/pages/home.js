import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
function Banner() {
  return (
    <div className="bg-[white] grid place-items-center rounded-t-[18px] sm:w-[85%] w-[100%]">
      <div className="w-[100%] h-[380px] rounded-lg">
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1634651423235-0117bc2b37c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)`,
          }}
          className="w-full h-[100%]  bg-center bg-cover rounded-t-[18px]"
        ></div>
      </div>
    </div>
  )
}

function Infos() {
  return (
    <div className="grid place-items-center  bg-[#F7F1E5] sm:w-[85%] w-[100%]">
      <p className="text-[#52525b] text-xl text-justify p-4">
        El maíz o zea mays es un cereal, una planta gramínea americana, que se
        caracteriza por tener tallos largos y macizos (y no huecos como sus
        parientes más cercanos) al final de los cuales se dan espigas o mazorcas
        (inflorescencias femeninas), con sus semillas o granos de maíz
        dispuestos a lo largo de su eje. También se llama maíz (o choclo) a
        dichas mazorcas e incluso a sus granos una vez extraídos. Se trata de
        una fuente alimenticia sumamente popular, sobre todo en el continente
        americano, que suele molerse para hacer harinas (y elaborar diversos
        platos con ellas, desde arepas hasta tortillas). Se emplea también como
        alimento para animales y como insumo para la obtención de
        biocombustibles. Su nombre proviene del vocablo taino mahís, que traduce
        literalmente “lo que sustenta la vida”.
      </p>
    </div>
  )
}

function Linksp() {
  return (
    <div className="flex justify-between bg-[white] sm:w-[85%] w-[100%]">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 bg-[#F7F1E5] hover:border-4 hover:border-[#E7B10A]">
        <div className="w-[100%] h-[350px] overflow-hidden">
          <img
            class="bg-center bg-cover"
            src="https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <a href="http://localhost:3000/publicaciones">
              Actualidad del cultivo de maíz
            </a>
          </div>
          <p class="text-gray-600 text-base">
            La producción de maíz en Guatemala no cubre la demanda nacional,
            viéndose en la necesidad de importar maíz para cubrir las demandas
            internas.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #Guatemala
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #cultivos
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            #maizLover
          </span>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 bg-[#F7F1E5] hover:border-4 hover:border-[#E7B10A]">
        <div className="w-[100%] h-[350px] overflow-hidden">
          <img
            class="bg-center bg-cover"
            src="https://images.unsplash.com/photo-1634651424460-e772b0263eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <a href="http://localhost:3000/galeria">Galeria</a>
          </div>
          <p class="text-gray-600 text-base">
            Ingresa tus propias fotos y disfruta de la galeria de nuestra
            página.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #Fotografía
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #maíz
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            #gallery
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            #art
          </span>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 bg-[#F7F1E5] hover:border-4 hover:border-[#E7B10A]">
        <div className="w-[100%] h-[350px] overflow-hidden">
          <img
            class="bg-center bg-cover"
            src="https://images.unsplash.com/photo-1596298796586-dab0c6a1e487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <a href="http://localhost:3000/recetas">Recetas y platillos</a>
          </div>
          <p class="text-gray-600 text-base">
            Conoce las recetas y platillos más populares de Guatemala y del
            mundo. También puedes aportar tus propias recetas con maíz.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #Comida
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
            #Recetas
          </span>
          <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            #Cocina
          </span>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-[white]">
      <NavBar />
      <div className="flex items-center justify-center h-[100%] mt-[100px] sm:mt-[10px]">
        <div className="grid grid-cols-1 place-items-center w-[100%]">
          <div className="sm:w-[85%] w-[100%] p-10">
            <p className="text-[#4C4B16] font-semibold text-left text-5xl pl-0">
              ¿Qué es el maíz?
            </p>
          </div>

          <Banner />
          <Infos />
          <Linksp />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Home
