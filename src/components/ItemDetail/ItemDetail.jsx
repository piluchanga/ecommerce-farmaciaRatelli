import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='item'>
        <h4>{nombre} </h4>
        <p>${precio} </p>
        <p>Pañales Pampers Talle M.</p>
        <img src={img} alt={nombre} className="img-fluid"/>
    </div>
  )
}

export default ItemDetail