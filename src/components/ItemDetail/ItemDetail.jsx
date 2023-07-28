import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, nombre, precio, img, descripcion, stock, idCategoria}) => {

  const [cantidadElejida, setCantidadElejida] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const agregarAlCarrito = (cantidad) => {
    setCantidadElejida(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  function botonCondicional() {
    if(cantidadElejida > 0) {
      return (
        <>
        <Link className="btn btn-secondary" to={`/categoria/${idCategoria}`}> Seguir Comprando </Link>
        <Link className="btn btn-secondary" to={`/carrito`}> Terminar Compra </Link>
        </>
      )
    } else {
      return (
        <>
        <ItemCount stock={stock} funcionAgregarAlCarrito={agregarAlCarrito} />
        </>
      )
  
    }
  }

  return (

<div className="card item">
<img className="card-img-top img-fluid" src={img} alt={img} />
<div className="card-body">
  <h5 className="card-title">{nombre}</h5>
  <p className="card-text">${precio} </p>
  <p>Stock: {stock} </p>
  <p className="card-text">{descripcion}</p>
</div>
{botonCondicional()}
{/* {
  cantidadElejida > 0 ? (<Link className="btn btn-secondary" to={`/categoria/${idCategoria}`}> Seguir Comprando </Link>, <Link className="btn btn-secondary" to={`/carrito`}> Terminar Compra </Link>) : (<ItemCount stock={stock} funcionAgregarAlCarrito={agregarAlCarrito} />)
} */}
</div>
  )
  
}

export default ItemDetail