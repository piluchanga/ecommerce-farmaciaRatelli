import { createContext, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import "./Carrito.css"

const Carrito = () => {

    const {carrito, total, vaciarCarrito, cantidadTotal, eliminarProducto} = useContext(CarritoContext);

    if(carrito === null){
        return(
            <>
                <h3>No hay productos en el carrito</h3>
                <Link className="btn btn-secondary" to="/">Volver a la Tienda</Link>
            </>
        )
    }
  return (
    <div>
        {carrito.map(prod => <ItemCarrito key={prod.id} {...prod} />)}
        <h3>Total: $ {total} </h3>
        <button onClick={() => vaciarCarrito()} className="btn boton-vacio">Vaciar Carrito</button>
        <Link className="btn boton boton-finalizar" to="/checkout" >Finalizar Compra</Link>
        
    </div>
  )
}

export default Carrito