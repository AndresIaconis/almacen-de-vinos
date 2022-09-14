import './App.css';
import * as React from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Productos';
import { ItemCount } from './components/ItemCount';

function App() {
  let producto1 = {id: 1, name: "Malbec", price: 3000};
  let producto2 = {id: 2, name: "Cabernet Sauvignon", price: 2500};
  let producto3 = {id: 3, name: "Pinot Noir", price: 2000}
  
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>



      <div>
        <ItemListContainer />
      </div>


{/* <ItemCount /> */}

      <div>
        {/* Footer */}
      </div>

      </div>

    );
}

export default App;
