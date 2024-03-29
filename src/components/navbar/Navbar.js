'use client'
import React, { useState } from 'react';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-[#2b2a4c] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="imgs/image.png" alt="Logo" className=" rounded-xl h-20 ml-2" />
        </a>
        <ul className="flex space-x-4">
          <li className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-300 transition-colors duration-200">
              Inicio
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 inline-block ml-1">
                {dropdownVisible ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                )}
              </svg>
            </button>
            {dropdownVisible && (
              <ul className="absolute left-0 mt-2 w-32 bg-red-700 border rounded-lg shadow-lg">
                <li className="py-1"><a href="#" className="block px-4 py-2 hover:bg-blue-900">Opción 1</a></li>
                <li className="py-1"><a href="#" className="block px-4 py-2 hover:bg-blue-900">Opción 2</a></li>
                <li className="py-1"><a href="#" className="block px-4 py-2 hover:bg-blue-900">Opción 3</a></li>
                <li className="py-1"><a href="#" className="block px-4 py-2 hover:bg-blue-900">Opción 4</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="/" className="hover:text-gray-500 transition-colors duration-200">Acerca de</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-500 transition-colors duration-200">Servicios</a>
          </li>
          <li>
            <a href="/  " className="hover:text-gray-500 transition-colors duration-200">Contacto</a>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="hover:text-gray-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>
          </button>
          <button className="hover:text-gray-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button className="hover:text-gray-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;


