import React from 'react'
import {Element} from 'react-scroll'

const Contact = () => {
  return (
    <Element name='contact' className="w-full h-screen bg-[#0a192f] text-gray-700 flex justify-center items-center p-4">

        <form method="POST" action="https://getform.io/f/4afa6601-e742-4a6f-8d69-538a96d19a74" className='mt-[1000px] sm:mt-0 flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#523E27]'>Contacto</p>
                <p className='py-4 text-gray-300'>Contactame a travez del siguiente formulario</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name="name"  />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email"  />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder="mensaje"></textarea>
            <button className='text-white border-2 hover:bg-[#523E27] hover:border-[#523E27] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>

    </Element>
  )
}

export default Contact