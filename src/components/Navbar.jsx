// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import logo from '../assets/nembo.png'
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
    <div className='flex justify-between items-center p-4 bg-[#0c4972] px-[6em]'>
        <div>
            <img src={logo} className='w-24 h-24'/>
        </div>

          {/* Mobile hamburger Menu section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl ml-20 text-white" />
        </div>

      {/*Menu-section*/}
        <div className=" sm:block">
          <div className={`md:flex items-center bg-[#0c4972] absolute md:static left-0 w-full md:h-[0] sm:h-[80vh] z-50 transition-all duration-500 ease-in  ${open ? 'top-[130px]': 'top-[-756px]'}`}>
              <ul className="navList md:flex items-center space-y-10 md:space-y-0 sm:block sm:px-36 text-center md:px-0  w-full space-x-6 text-white text-xl  py-10 md:py-0 h-[80vh] md:h-[0]">
                <li className=''>Home</li>
                <li>Accomodation</li>
                <li>Language Fracaise</li>
              </ul>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar