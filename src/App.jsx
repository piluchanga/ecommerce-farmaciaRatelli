import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Checkout from './components/Checkout/Checkout'
import Carrito from './components/Carrito/Carrito'
import { CarritoProvider } from './context/CarritoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <CarritoProvider>
      <NavBar />
      <div className="contenedor container-fluid">
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Todas las categorías"}/>} />
        <Route exact path='categoria/:idCategoria' element={<ItemListContainer/>} />
        <Route exact path='item/:idItem' element={<ItemDetailContainer/>} />
        <Route exact path='/checkout' element={<Checkout/> } />
        <Route exact path='/carrito' element={<Carrito/> } />
        <Route exact path='*' element={<h1>404 NOT FOUND</h1> } />
      </Routes>
      </div>
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App
