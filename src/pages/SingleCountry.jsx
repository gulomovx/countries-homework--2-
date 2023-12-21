import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const SingleCountry = () => {
  const { slug } = useParams();
  const url = "https://countries-api-v7sn.onrender.com/countries/slug/" + slug;
  const { data, pending } = UseFetch(url);
  console.log(data);
  return (
    <div className="mt-24     w-[90%] mx-auto">
      <NavLink className='bg-white p-4 rounded-md shadow-xl  ' to={"/"}>
        

          Back  Home
        
          
      </NavLink>


      {data && (
        <div className="flex my-24 justify-between"> 
          <div>
          <img  className="rounded-lg w-[400px] h-[283px] object-cover shadow-lg" src={data.flags.png} alt="" />
          </div>

            
          <div className="flex justify-between  items-center gap-8">
            <div>

          <h1 className="block text-[32px] font-[600] ">{data.name.common}</h1>

            </div>
            <br />
            <br />

            <div className="text-[16px] border p-4 rounded shadow-lg">
              <p>{ `Native name: ${data.name.nativeName}`}</p>
              <p>{ `Population: ${data.population}`}</p>
              <p>{ `Region: ${data.region}`}</p>
              <p>{ `Sub Region: ${data.subregion}`}</p>
              <p>{ `Capital: ${data.capital}`}</p>
            </div>
            <div>
              <div className="shadow-lg border p-4"> 

            <p>{ `Currencies: ${data.currencies}`}</p>
            <p>{ `Languages: ${data.languages}`}</p>
            </div>
              
            </div>
            <br />
            <div className="border p-4 shadow-lg">
            
            {/* borders  */}
            <p className="text-[20px]">Border countries:</p>
            {data.borders.map((item) => {
              return (
                <div className="flex">
                  <NavLink to={`/country/${item.slug}`}>
                    <p className="border p-[2px] rounded my-[2px]">{item.slug}</p>
                    
                  </NavLink>
                      
                </div>
              )
            })}
           </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
