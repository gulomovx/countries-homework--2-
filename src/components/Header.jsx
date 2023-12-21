import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { UseFetch } from '../hooks/UseFetch'

const Header = ({ setSearch }) => {
    
    function handleInput(search) {
        let url = 'https://countries-api-v7sn.onrender.com/countries?'
        setSearch(url + search)
    }
    
  return (
      <div className='w-[90%] mx-auto flex justify-between items-center mt-8  sm:grid-cols-1'>
          <div className='bg-[#fff] dark:bg-[#2B3844] dark:text-white flex items-center gap-2 rounded py-2 px-4 w-[400px] shadow-md'>
              <AiOutlineSearch/>
              <input
                  onChange={(e)=> handleInput('search=' + e.target.value)}
                  className='outline-none capitalize p-2 dark:bg-[#2B3844] dark:text-white'
                  type="text"
                  placeholder='Search for a country…' />
          </div>
          <div className='bg-[#fff] p-4 rounded   shadow-md dropdown dark:bg-[#2B3844] dark:text-white '>
              <label className='mx-2' htmlFor="country">Filter by region </label>
              <ul className=' outline-none hidden  text-[18px] font-normal dark:bg-[#2B3844] dark:text-white text-[#111517] cursor-pointer dropdown-menu absolute bg-white  p-12 text-center' name="country" id="" onClick={(e)=> handleInput('region=' + e.target.textContent)}>
                  <li value="Africa">Africa</li>
                  <li value="America">Americas</li>
                  <li value="Asia">Asia</li>
                  <li value="Europe">Europe</li>
                  <li value="Oceania">Oceania</li>
              </ul>

              





          </div>
    </div>
  )
}

export default Header