import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenido a la tienda de Farmacia Ratelli"}/>} />
        <Route exact path='categoria/:idCategoria' element={<ItemListContainer/>} />
        <Route exact path='item/:idItem' element={<ItemDetailContainer/>} />
        <Route exact path='*' element={<h1>404 NOT FOUND</h1> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
