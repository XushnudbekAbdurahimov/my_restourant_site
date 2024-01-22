import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import './cart.css'

const Card = () => {

  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()


  if (isEmpty) {
    return (
      <div className="Menu">
        <div className="card">
          <div className="card-header">
            Ошибка !
          </div>

        </div>
      </div>

    );
  }
  return (
    <section className='cart_container'>
      <div className='table_row'>
        <div className="table_table">
          <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
          <div className='cart_table'>
            <div>
              {items.map((value, index) => {
                return (
                  <div className='table_tr' key={index}>
                    <div className="top_nav">
                      <ul>
                        <li>
                          <h1>

                            Turi:
                          </h1>
                        </li>
                        <li>
                          <h1>

                            Narxi:
                          </h1>
                        </li>
                        <li>
                          <h1>

                            Nechta:
                          </h1>
                        </li>
                        <li>
                          <h1>


                          </h1>
                        </li>

                      </ul>
                    </div>
                    <div className='cart_img'>
                      {/* <h1>Turi:</h1> */}
                      <h1>{value.title}</h1>
                      <img src={value.img} style={{ height: '6rem' }} alt="" />
                    </div>
                    {/* <td>{value.name}</td>*/}
                    <div className="price_table">
                      {/* <h1>Narxi:</h1> */}
                      <h3>${value.price}</h3>
                    </div>
                    <div className="nechta">
                      {/* <h1>Nechta:</h1> */}
                      <h4>Количество: ({value.quantity})</h4>
                    </div>
                    <td>
                      <button className='minus'  onClick={() => updateItemQuantity(value.id, value.quantity - 1)}>-</button>
                      <button className='plus' onClick={() => updateItemQuantity(value.id, value.quantity + 1)}>+</button>
                      <button className='remove' onClick={() => removeItem(value.id)}>Remove item</button>
                    </td>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Общая цена: {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className='btn btn-danger'
            onClick={() => emptyCart()}>
            Hammasini o'chirish
          </button>
          {/* <button className='btn btn-primary m-2'>
            Купить сейчас же
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default Card
