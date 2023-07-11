//Archivo para simular conexion a una bbdd

const productos = [
    {id:"1", nombre: "Shampoo", precio: 500, img:"../img/shampoo.jpg", idCategoria:"capilar", descripcion:"Shampoo Purificante"},
    {id:"2", nombre: "Acondicionador", precio: 600, img:"../img/acondicionador.jpg", idCategoria:"capilar", descripcion:"Aconcidiconador Hidra Rellenador"},
    {id:"3", nombre: "Pañales Pampers", precio: 1500, img:"../img/pañal.jpg", idCategoria:"bebe", descripcion:"Pañales Pampers Talle M"},
    {id:"4", nombre: "Oleo Estrella", precio: 1500, img:"../img/oleo.jpg", idCategoria:"bebe", descripcion:"Oleo Limpiador Estrella"},
    {id:"5", nombre: "Vichy", precio: 300, img:"../img/solarCuerpo.jpg", idCategoria:"solar", descripcion:"Protector solar Corporal FP50"},
    {id:"6", nombre: "La Roche-Posay", precio: 300, img:"../img/solarRostro.jpg", idCategoria:"solar", descripcion:"Protector solar Rostro FP50"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        } )
    }, 100)
}

export const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCategoria === idCategoria);
            resolve(productosCategoria)
        }, 100)
    } )
}