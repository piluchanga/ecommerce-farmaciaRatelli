import React, { useState } from 'react'

const ItemCount = ({stock, funcionAgregarAlCarrito}) => {
    const [contador, setContador] = useState(1);
    
    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button className="btn btn-secondary" onClick={decrementar}> - </button>
                <label> {contador} </label>
                <button className="btn btn-secondary" onClick={incrementar}> + </button>
            </div>
            <div>
                <button className="btn btn-secondary" disabled={stock<contador} onClick={() => funcionAgregarAlCarrito(contador)}>Agregar al Carrito</button>
            </div>

        </>
    )
}

export default ItemCount