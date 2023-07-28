import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemCarrito = ({item, cantidad}) => {
  const {eliminarProducto} = useContext(CarritoContext);

  return (
    <>
        <h3>{item.nombre} x {cantidad} </h3>
        <p>$ {item.precio} </p>

        <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </>
  )
}

export default ItemCarrito