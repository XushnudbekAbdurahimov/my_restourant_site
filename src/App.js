import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dostavka from './components/dostavka/Dostavka';
import Joy from './components/joy/Joy';
import Menu from './components/Menu/Menu';
import Place from './components/online_place/Place';
import Login from './components/login/Login'
import Xodim from './components/xodim/Xodim';
import Owner from './components/owner/Owner';
import SingelPage from './components/singlePage/SingelPage';
import { CartProvider } from 'react-use-cart';
import cartSlice from './components/cartSlice/cartSlice';
import Card from './components/cart/card';

function App() {

  const [kun, setKun] = useState(null)


  return (
    <div className="App">
      <>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='login' element={<Login />} />
            {/* <Route path='' element={<Menu />}/> */}

            <Route path='/xodim' element={<Xodim />} />
            <Route path='/owner' element={<Owner />} />
            {/* <Route path='/menu/:id' element={<SingelPage />} /> */}
            <Route path='/SingelPage/:id' element={<SingelPage />} />
            <Route path='/owner' element={<Owner />} />
            <Route path='/card' element={<Card />} />

          </Routes>
          <cartSlice />
          <Menu />
          <Joy />
          <Place />
          <Dostavka kun={kun} setKun={setKun} />
        </CartProvider>
      </>

    </div>
  );
}

export default App;
