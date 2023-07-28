import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext);

  return (
    <>
        <div className="d-flex">
            <Link className="link-secondary me-3" to="/carrito" data-toggle="tooltip" data-placement="bottom" title="Ver Carrito">   
                <i className="bi bi-cart4"></i>
                <span className="badge rounded-pill badge-notification bg-danger">{cantidadTotal}</span>
            </Link>
        </div>
    </>
  )
}

export default CartWidget