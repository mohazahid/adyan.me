import React, {useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'


export default function NavBar () {
    const [BurgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(false)
  }

  const handleScroll = (_id: any) => {
    const element = document.getElementById(_id)
    if(element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
    toggleBurger()
  }
    return (
        <nav className='relative h-16 px-4 py-4 flex justify-start items-center'>
             <section>
        <div className='lg:hidden md:hidden'  onClick={() => setBurgerOpen((prev) => !prev)}>
          <button className='navbar-burger flex items-center text-blue-600 absolute right-1 transform -translate-y-1/2 -translate-x-1/2'>
                <Bars3Icon className="h-8 w-8 text-white" />
            </button>
        </div>
        <div className={BurgerOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div className='absolute top-0 right-0 px-8 py-8 cursor-pointer transition ease-in-out delay-10 ' onClick={() => setBurgerOpen(false)} >
            <XMarkIcon className="h-8 w-8 text-black" />
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            <li className=' border-gray-400 mb-8 font-primary '>
              <button onClick={() => handleScroll('home')}>Home_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('about')}>About_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('faq')}>FAQ_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('register')}>Register_</button>
            </li>
          </ul>
        </div>
      </section>
            
      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 mx-auto lg:flex md:flex items-center w-auto space-x-6 max-w-screen-xl'>
        <li><button className='text-white font-primary text-base pr-6  hover:text-gray-500' onClick={() => handleScroll('home')}>Home_</button></li>
        <li><button onClick={() => handleScroll('about')}  className='text-white font-primary text-base pr-6   hover:text-gray-500'>About_</button></li>
        <li><button onClick={() => handleScroll('work')} className='text-white font-primary text-base pr-6   hover:text-gray-500'>FAQ_</button></li>
        <li><button onClick={() => handleScroll('contact')} className='text-white font-primary  text-base rounded-lg hover:text-white'>Register_</button></li>
        <li><button className="outline-white outline-1 outline p-2 outline-round rounded-md text-white hover:text-[#2f6b6b] hover:outline-[#2f6b6b] transition ease-in delay-10 "> Resume </button></li>
      </ul>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
    );
}