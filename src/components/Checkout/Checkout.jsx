import { addDoc, collection, updateDoc, doc, getDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../services/config';
import { CarritoContext } from '../../context/CarritoContext';

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [idOrden, setIdOrden] = useState("");

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
    
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
        setError("Hay campos sin completar")
        return;
    }

    if(email !== emailConfirmacion) {
        setError("Los mails no coinciden");
        return;
    }

    const orden = {
        items: carrito.map(prod => ({
            id: prod.item.id,
            nombre: prod.item.nombre,
            cantidad:prod.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
    };

    Promise.all(
        orden.items.map(async(ordenProducto) => {
            const productoRef = doc(db, "productos", ordenProducto.id);
            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;

            await updateDoc(productoRef, {
                stock: stockActual - ordenProducto.cantidad,
            } )

        } )
    ).then(() => {
        addDoc(collection(db, "ordenes"), orden).then((docRef) => {
            setIdOrden(docRef.id);
            vaciarCarrito();
        })
        .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden. Por favor vuelva a intentarlo.")
        })
    } )
    .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se puede actualizar el stock. Por favor vuelva a intentarlo")
    })

}
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={manejadorFormulario} >
            {
                carrito.map(prod => (
                    <div key={prod.item.id}>
                        <p>{prod.item.nombre} x {prod.cantidad} </p>
                        <p>{prod.item.precio} </p>
                        <hr/>
                    </div>
                 ) )
            }
            <hr/>

            <div className='form-group'>
                <label htmlFor="">Nombre</label>
                <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className='form-group'>
                <label htmlFor=''>Apellido</label>
                <input type='text' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
            </div>

            <div className='form-group'>
                <label htmlFor=''>Telefono</label>
                <input type='text' value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
            </div>

            <div className='form-group'>
                <label htmlFor=''>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='form-group'>
                <label htmlFor=''>Email Confirmacion</label>
                <input type='email' value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}></input>
            </div>

            {
                error && <p>{error} </p>
            }

            <button type='submit'>Finalizar</button>

        </form>
        {
            idOrden && ("Gracias por su compra. Su numero de orden es" + idOrden)
        }

    </div>
  )
}

export default Checkout