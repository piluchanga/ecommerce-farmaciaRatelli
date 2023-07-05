import React from 'react'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='item'>
        <img src={img} className="img-fluid" alt={nombre} />
        <h4>{nombre} </h4>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <button type='button' className='btn btn-secondary'>Ver Detalles</button>
    </div>
  )
}

export default Item