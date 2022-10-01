import './App.css';
import React, { useState, createContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';



export const contexto = createContext();

export default function App() {

  return (
  <CartProvider >
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>


  );
}













// import './App.css';
// import React, { useState, createContext } from 'react';
// import NavBar from './components/NavBar';
// import Productos from './components/Productos';
// import { ItemCount } from './components/ItemCount';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './components/Footer';
// import { CartProvider } from './context/CartContext';
// import Cart from './components/Cart';
// import ItemListContainer from './components/ItemListContainerNO';
// import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



// export const contexto = createContext();

// function App() {

//   return (
//     <CartProvider >
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path='/category/all' element={<ItemListContainer />} />
//           <Route path='/detail/:id' element={<ItemDetailContainer />} />
//           <Route path='/category/:category' element={<ItemListContainer />} />
//           <Route path='/cart' element={<Cart />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </CartProvider>
//   )
// }

// export default App;
