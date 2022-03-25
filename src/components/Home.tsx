import {HiArrowNarrowRight} from 'react-icons/hi'
import {Element} from 'react-scroll'
const Home = () => {
  return (
    <Element name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-5xl mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#523E27] font-bold text-xl'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Cerrinos</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy un FullStack developer</h2>
            <p className='text-[#8892b0] py-4 max-w-2xl'>Soy un desarrollador full-stack con experiencia en el desarrollo web</p>
            <div>
                <button className='hover:bg-[#523E27] duration-200 hover:border-[#523E27] text-white border-2 px-6 py-3 my-2 flex items-center'>Ver trabajos
                    <span className='group-hover:rotate-90 hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
            </div>
        </div>
    </Element>
  )
}

export default Home