import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="col-lg-3 card-content">
      <div className="card item w-75">
        <img className="card-img-top img-fluid" src={img} alt={img} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">${precio} </p>
        </div>
        <div className="card-footer">
          <Link to={`/item/${id}`} className='btn btn-info btn-block' type='button' role='button'>Ver Detalles</Link>
        </div>
      </div>
    </div>
  )
}

export default Item