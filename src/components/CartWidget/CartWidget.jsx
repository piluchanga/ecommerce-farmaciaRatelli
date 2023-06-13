import React from 'react'

const CartWidget = () => {
  return (
    <>
        <div className="d-flex align-items-center">
            <a className="link-secondary me-3" href="#">   
                <i className="bi bi-cart4"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
        </div>
    </>
  )
}

export default CartWidget