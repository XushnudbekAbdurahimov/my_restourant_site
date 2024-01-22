import React from 'react'
import './style.css'
// import Data from './components/Data/Data'
import DataMenu from '../Data/DataMenu'


const Joy = () => {
     return (
          <div className='Joy'>
               <div className="circles">
                    <div className="circle">

                    </div>
                    <div className="circle2">

                    </div>
                    <div className="circle3">

                    </div>
               </div>
               <div className="container_joy">
                    <div className="yozuv">
                         <h1 className='yozuv_h1'>WELCOME <span>to Our</span><br /><h3>Restoran</h3></h1>
                    </div>
                    <div className="joylar">
                         <div className="bild">Joyingizni tanlang</div>
                         <select name="" id="">
                              <option value="">Joylar</option>
                              <option value="">1-joy</option>
                              <option value="">2-joy</option>
                              <option value="">3-joy</option>
                              <option value="">4-joy</option>
                              <option value="">5-joy</option>
                              <option value="">6-joy</option>
                              <option value="">7-joy</option>

                              {/* {
                                   Data?.map((item) => {
                                        return (
                                             <option value="">
                                                  <p>{item.ovqat}</p>
                                             </option>
                                        )
                                   })
                              } */}

                         </select>
                    </div>
                    <div className="anorlar">
                         <div className="anor">Ovqatni tanlang</div>
                         <select name="" id="">
                              <option value="">Ovqatlar</option>
                              {DataMenu.ovqatlar.map((value, index) => (
                                   <option key={index} value={value.ovqat}>{value.ovqat}</option>
                              ))}


                         </select>
                    </div>
                    <div className="olmalar">
                         <div className="olma">Ichimlikni tanlang</div>
                         <select name="" id="">
                              <option value="">Ichimliklar</option>
                              {DataMenu.suvlar.gazlilar.map((value, index) => (
                                   <option key={index} value={value.suv}>{value.suv}</option>
                              ))}
                              {DataMenu.suvlar.gazsizlar.map((value, index) => (
                                   <option key={index} value={value.suv}>{value.suv}</option>
                              ))}

                         </select>
                    </div>
                    <div className="noklar">
                         <div className="nok">Shirinlikni tanlang</div>
                         <select name="" id="">
                              <option value="">Shirinliklar</option>
                              {DataMenu.shirinliklar.map((value, index) => (
                                   <option key={index} value={value.shirinlik}>{value.shirinlik}</option>
                              ))}

                         </select>
                    </div>
                    <div className="behilar">
                         <div className="behi">Saladni tanlang</div>
                         <select name="" id="">
                              <option value="">Saladlar</option>
                              {DataMenu.saladlar.map((value, index) => (
                                   <option key={index} value={value.salad}>{value.salad}</option>
                              ))}

                         </select>
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


          </div>
     )
}

export default Joy
