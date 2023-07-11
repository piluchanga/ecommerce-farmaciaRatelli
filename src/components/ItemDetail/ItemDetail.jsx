import React from 'react'

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    /* <div className='item'>
        <img src={img} alt={nombre} className="img-fluid"/>
        <h4>{nombre} </h4>
        <p>${precio} </p>
        <p>{descripcion}</p>
    </div> */

<div className="card item">
<img className="card-img-top img-fluid" src={img} alt={img} />
<div className="card-body">
  <h5 className="card-title">{nombre}</h5>
  <p className="card-text">${precio} </p>
  <p className="card-text">{descripcion}</p>
</div>
</div>
  )
}

export default ItemDetail