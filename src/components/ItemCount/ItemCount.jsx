import React, { useState } from 'react'
import "./ItemCount.css"

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
            <div className="botones-contador btn-group btn-group-toggle" data-toggle="buttons">
                <button className="btn boton" onClick={decrementar}> - </button>
                <label className='cantidad'> {contador} </label>
                <button className="btn boton" onClick={incrementar}> + </button>
            </div>
            <div>
                <button className="btn boton boton-agregar" disabled={stock<contador} onClick={() => funcionAgregarAlCarrito(contador)}>Agregar al Carrito</button>
            </div>

        </>
    )
}

export default ItemCount