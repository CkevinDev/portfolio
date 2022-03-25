import GifApp from '../assets/gifapp.png'
import {Element} from 'react-scroll'

const Work = () => {
  return (
    <Element name='work' className=" w-full h-screen bg-[#0a192f] text-gray-300">
        <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="mt-[500px] sm:mt-0 pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#523E27]">Work</p>
                <p className="py-4">Dale un vistazo a mis proyectos recientes</p>
            </div>
            <div className="  grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${GifApp})`}} className="content-div shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto ">
                    {/* Hover effect */}
                    <div className=' text-center opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            GiphApp
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://kevettt.github.io/gifs-app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                            </a>

                            <a target="_blank" href="https://github.com/kevettt/gifs-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${GifApp})`}} className="content-div shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto ">
                    {/* Hover effect */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs App
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                            </a>

                            <a target="_blank" href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${GifApp})`}} className="content-div shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto ">
                    {/* Hover effect */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            GifApp
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                            </a>

                            <a target="_blank" href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Work