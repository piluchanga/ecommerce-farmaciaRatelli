import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
 /*    <div className='item'>
        <img src={img} className="img-fluid" alt={img} />
        <h4>{nombre} </h4>
        <p>${precio} </p>
        <Link to={`/item/${id}`} className='btn btn-secondary'>Ver Detalles</Link>
    </div>  */

    <div className="card item">
  <img className="card-img-top img-fluid" src={img} alt={img} />
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">${precio} </p>
    
  </div>
  <div class="card-footer">
      <Link to={`/item/${id}`} className='btn btn-primary'>Ver Detalles</Link>
    </div>
</div>
    
    
  )
}

export default Item