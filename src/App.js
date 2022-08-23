import './App.css';
import * as React from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const saludo = "Hola mundo"

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>



      <div>
        <ItemListContainer saludo={saludo}/>
      </div>




      <div>
        {/* Footer */}
      </div>

      </div>

    );
}

export default App;
