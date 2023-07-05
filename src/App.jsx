import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a la tienda de Farmacia Ratelli"} />
        <ItemDetailContainer/>
     </div>
    </>
  )
}

export default App
