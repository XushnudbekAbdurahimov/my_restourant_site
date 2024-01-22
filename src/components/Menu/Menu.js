import React from 'react'
import './style.css'
import palov from "../images/palov.jpeg";
import shirin from "../images/shirin.jpeg";
import DataMenu from '../Data/DataMenu';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div id='Menu' className="menu_container">
      <div className="circle3">
        <img src={shirin} alt="" />

      </div>
      <div className="circle4">
        <img src={palov} alt="" />
      </div>
      <div className="Menu">
        <h1 className='menu_h1'>Fresh & Delicious <mark>Gourmet Sandwiches, Salads and Sweets</mark></h1>

        <div className="menu_table">
          <div className="taomlar">
            <h3>Taomlar</h3>
            <ul>

              {DataMenu.ovqatlar.map((value) => (
                <li key={value.id}>
                  <Link to={`/SingelPage/${value.id}`}>
                    {value.ovqat}
                  </Link>
                </li>
              ))}


            </ul>
          </div>
          <div className="">
            <div className="saladlar">
              <h3>Saladlar</h3>
              <ul>
                {/* <li>
                  <Link>
                    {DataMenu.saladlar.map((value, index) => (
                      <li key={index}>{value.salad}</li>
                    ))}
                  </Link>
                </li> */}
                {DataMenu.saladlar.map((value) => (
                  <li key={value.id}>
                    <Link to={`/SingelPage/${value.id}`}>
                      {value.salad}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
            <div className="shirinliklar">
              <h3>Shirinliklar</h3>
              <ul>
                {/* <li>
                  {DataMenu.shirinliklar.map((value, index) => (
                    <li key={index}>{value.shirinlik}</li>
                  ))}
                </li> */}
                {DataMenu.shirinliklar.map((value) => (
                  <li key={value.id}>
                    <Link to={`/SingelPage/${value.id}`}>
                    {value.shirinlik}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className="suv">
            <div className="coffee">
              <h3>Gazsiz Ichimliklar</h3>
              <ul>
                {/* <li>
                  {DataMenu.suvlar.gazsizlar.map((value, index) => (
                    <li key={index}>{value.suv}</li>
                  ))}
                </li> */}
                {DataMenu.suvlar.gazsizlar.map((value) => (
                  <li key={value.id}>
                    <Link to={`/SingelPage/${value.id}`}>
                      {value.suv}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            <div className="coffee">
              <h3>Gazli Ichimliklar</h3>
              <ul>
                {/* <li>
                  {DataMenu.suvlar.gazlilar.map((value, index) => (
                    <li key={index}>{value.suv}</li>
                  ))}
                </li> */}
                {DataMenu.suvlar.gazlilar.map((value) => (
                  <li key={value.id}>
                    <Link to={`/SingelPage/${value.id}`}>
                      {value.suv}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu