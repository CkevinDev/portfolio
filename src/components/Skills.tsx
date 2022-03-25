import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import Github from '../assets/github.png'
import ReactLogo from '../assets/react.png'
import JavaScript from '../assets/js.png'
import Tailwind from '../assets/tailwind.svg'
import SpringBoot from '../assets/spring.png'
import Csharp from '../assets/csharp.png'
import {Element} from 'react-scroll'

const Skills = () => {
  return (
    <Element name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#523E27]'>Skills</p>
                <p className='py-4'>Estas son las tecnologias con las que trabajo</p>
            </div>
            <div className='w-full px-8 sm:px-0 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='rounded-lg shadow-md  shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={HTML} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='rounded-lg shadow-md  shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={CSS} alt="html" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='rounded-lg shadow-md  shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={JavaScript} alt="html" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='rounded-lg shadow-md  shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={ReactLogo} alt="html" />
                    <p className='my-4'>Reactjs</p>
                </div>
                <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={Github} alt="html" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='rounded-lg shadow-md  shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 my-7 mx-auto' src={Tailwind} alt="html" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={SpringBoot} alt="html" />
                    <p className='my-4'>SpringBoot</p>
                </div>
                <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mt-4 mx-auto' src={Csharp} alt="html" />
                    <p className='my-4'>C#</p>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills