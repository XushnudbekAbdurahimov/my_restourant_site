import React from 'react'
import './Place.css'
import DataMenu from '../Data/DataMenu'

const Place = () => {
  return (
    <div id='Place' className='Place'>
      <div className="circles">
        <div className="circle">

        </div>
        <div className="circle2">

        </div>
        <div className="circle3">

        </div>
      </div>
      <h1 className='place_h1'>MARHAMAT <br /> joyingizni tanlab qo'ying!</h1>

      <div className="full">
        <div className="left">
          <div className="joylar">

            <div className="bild">Joyni tanlang</div>
            <select name="" id="">
              <option value="">Joylar</option>
              <option value="">1-joy</option>
              <option value="">2-joy</option>
              <option value="">3-joy</option>
              <option value="">4-joy</option>
              <option value="">5-joy</option>
              <option value="">6-joy</option>
              <option value="">7-joy</option>



            </select>
            <select name="" id="nechta">
              <option value="">Nechta</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>


          </div>
          <div className="manzil">
            <input type="number" name="" id="manzil" placeholder='Telefon raqamingizni kiriting!' />
          </div>
          <div className="tolov">
            <div className="naqd">
              <input type="checkbox" name="" id="" />
              <h3>NAQD</h3>
            </div>
            <div className="card">
              <input type="checkbox" name="" id="" />
              <h3>CARD</h3>
            </div>

          </div>

          <div className="menu">

          </div>
        </div>
        <div className="right">

        </div>
      </div>
      <div className="bt_chiziq">

      </div>
      <form action="">
        <div className="submit">
          <button><i>/submit/</i></button>
        </div>
      </form>
      <div className="restoran_uz">
        restoran.uz
      </div>






















    </div>
  )
}

export default Place
