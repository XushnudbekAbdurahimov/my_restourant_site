import React, { useState } from 'react'
import './dostavka.css'
import { MdOutlineMenuBook } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import DataMenu from '../Data/DataMenu'
import local from '../images/local.jpeg'


const Dostavka = (kun, setKun) => {


  const tun = () =>{
    setKun(kun)
  }

  return (
    <div id='Dostavka' className='Dostavka'>
      <div className="circles">
        <div className="circle10">

        </div>
        <div className="circle20">

        </div>
        <div className="circle30">

        </div>
      </div>
      <h1>Dostavka</h1>

      <div className="abs">

        <div className="saw">
          <h3>Maxsulotlarni ko'ring<MdOutlineMenuBook /></h3>
          {/* <div className="products">
            <ul>
              {DataMenu.ovqatlar.map((value, index) => (
                <li key={index}>
                  <input type='checkbox' name='' id='' />
                  <h3>{value.ovqat}</h3>
                </li>
              ))}
              {DataMenu.saladlar.map((value, index) => (
                <li key={index}>
                  <input type='checkbox' name='' id='' />
                  <h3>{value.salad}</h3>
                </li>
              ))}
             
              {DataMenu.suvlar.gazlilar.map((value, index) => (
                <li key={index}>
                  <input type='checkbox' name='' id='' />
                  <h3>{value.suv}</h3>
                </li>
              ))}
              {DataMenu.suvlar.gazsizlar.map((value, index) => (
                <li key={index}>
                  <input type='checkbox' name='' id='' />
                  <h3>{value.suv}</h3>
                </li>
              ))}
            </ul>
          </div> */}
        </div>



        <p>Manzilingizni aniqlang<FaSearchLocation /></p>


      </div>
      <div className="inputs">
                









      </div>







    </div>
  )
}

export default Dostavka
