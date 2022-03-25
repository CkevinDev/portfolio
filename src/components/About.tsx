import {Element} from 'react-scroll'

const About = () => {
  return (
    <Element name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#523E27]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='items-center max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className="lg:text-justify">Hola soy kevin, un placer verte por aquí. Por favor da un vistazo por mi portfolio</p>
                    </div>
                    <div>
                        <p className="sm:text-2xl sm:font-bold lg:text-justify">
                            Soy un persona apasionada con la construcción  de software que me enfoco en la mejora de mis habilidades de desarrollo. Me especializo en la creación de software para la web tanto en la parte backend como frontend
                        </p>
                    </div>
                </div>
        </div>
    </Element>
  )
}

export default About