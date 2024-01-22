// {/* <>
// // import React from 'react'
// // import {createSlice} from '@reduxjs/toolkit'

// // const initialState = {
// //      cartItems: [],
// //      cartTotalQuantity: 0,
// //      cartTotalAmount: 0,

// // }

// // const cartSlice = createSlice({
// //      name: "cart",
// //      initialState,
// //      reducers: {
// //           addToCart(state, action) {
// //                state.cartItems.push(action.payload);
// //           },
// //      },

// // })

// // export const {addToCart} = cartSlice.actions


// // export default cartSlice.reducer
// </> */}
// import React from 'react'
// import { useCart } from 'react-use-cart'

// const cartSlice = () => {

//      const {
//           isEmpty,
//           totalUniqueItems,
//           items,
//           totalItems,
//           cartTotal,
//           updateItemQuantity,
//           removeItem,
//           emptyCart
//      } = useCart()
//      if (isEmpty) return <h1 className='text-context '>Your CArt is empty</h1>
//      return (
//           <section className='py-4 container'>
//                <div className="row justify-content-center">
//                     <h1>Cart ({totalUniqueItems}) totalItems: ({totalItems})</h1>
//                     <table className='table table-light table-hover m-0'>
//                          <tbody>

//                               {
//                                    items.map((item, index) => {
//                                         <tr key={index}>
//                                              <td>
//                                                   <img src="" alt="" />
//                                              </td>
//                                              <td>
//                                                   {item.title}
//                                              </td>
//                                              <td>Quantity ({item.quantity})</td>

//                                         </tr>
//                                    })
//                               }
//                          </tbody>
//                     </table>
//                </div>
//           </section>
//      )

// }

// export default cartSlice



import React from 'react';
import { useCart } from 'react-use-cart';

const CartSlice = () => {
     const {
          isEmpty,
          totalUniqueItems,
          items,
          totalItems,
          cartTotal,
          updateItemQuantity,
          removeItem,
          emptyCart,
     } = useCart();

     if (isEmpty) return <h1 className='text-context'>Your Cart is empty</h1>;

     return (
          <section className='py-4 container'>
               <div className='row justify-content-center'>
                    <h1>Cart ({totalUniqueItems}) totalItems: ({totalItems})</h1>
                    <table className='table table-light table-hover m-0'>
                         <tbody>
                              {items.map((item, index) => (
                                   <tr key={index}>
                                        <td>
                                             <img src={item.image} alt={item.title} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>Quantity ({item.quantity})</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </section>
     );
};

export default CartSlice;
