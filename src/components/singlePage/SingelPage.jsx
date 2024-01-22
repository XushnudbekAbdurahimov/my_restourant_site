import React, { useState } from 'react'
import { useParams } from 'react-router'
import DataMenu from '../Data/DataMenu'
import mock_data from '../mock_data/mock_data'
import './page.css'
import { useCart } from "react-use-cart"
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const SingelPage = () => {
     const { id } = useParams();
     const result = mock_data.filter(item => item.id == id);

     const [closeForm, setCloseForm] = useState(false);
     const handleXClick = () => {
          // Handle X button click to delete the component
          const element = document.getElementById('single-page-root');
          ReactDOM.unmountComponentAtNode(element);
     };

     const { addItem } = useCart()

     return (
          <div className='cards_s'>
               {result.map((item, index) => (
                    <div key={index} className="Card">
                         <img src={item.img} className="card_image" />
                         <h1 className='title_cart'>{item.title}:</h1>
                         <h2 className='nom_cart'>{item.nom}</h2>
                         <div className="x_div">
                              <button>X</button>
                         </div>

                         <div className="btnn">
                              <button className='btn_cart' onClick={() => addItem({ id: item.id, title: item.title, img: item.img, price: item.price })}>Add to Cart</button>
                         </div>
                    </div>
               ))}
          </div>
     );
}

export default SingelPage
