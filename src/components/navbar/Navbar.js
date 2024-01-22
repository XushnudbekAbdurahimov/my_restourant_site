import React from 'react'
import './style.css'
import { GiCartwheel } from "react-icons/gi";
import { Link } from 'react-router-dom'
import logo from '../images/logotip.png'
import Menu from '../Menu/Menu';
import Dostavka from '../dostavka/Dostavka';
import Place from '../online_place/Place';
import Card from '../cart/card';



const Navbar = () => {
     return (
          <div className='Navbar'>
               <div className="first_nav">
                    <div className="space_bar">

                    </div>



                    <div className="">
                         <select name="" id="" >
                              <option value="option1">Русский</option>
                              <option value="option2">O'zbek</option>
                              <option value="option3">English</option>
                         </select>
                         <Link to="/login">
                              <button>Kirish</button>
                         </Link>

                    </div>
               </div>
               <hr className='.hr' />
               <div className="second_nav">
                    <div className="nav_logo">
                         <img src={logo} alt="" />
                    </div>
                    <ul>
                         <li>
                              <Link to="">
                                   <a href="#Menu" >Menu</a>
                              </Link>
                         </li>
                         <li>
                              {/* <Link to=""> */}
                              <a href="#Dostavka">Dostavka</a>
                              {/* </Link> */}
                         </li>

                         <li>
                              {/* <Link to=""> */}
                              <a href="#Place">Onlayn joy</a>
                              {/* </Link> */}
                         </li>

                         <li>
                              <Link to={'/card'}>
                                   <a href="#">Karzinka</a>
                              </Link>
                         </li>

                         <li>
                              <h3 className='h3_li'>94-507-40-82</h3>
                         </li>
                    </ul>

                    <button className='li_btn'><GiCartwheel width={50} /> </button>
               </div>
               <hr />


          </div>
     )
}

export default Navbar
