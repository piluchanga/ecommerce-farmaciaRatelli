//Archivo para simular conexion a una bbdd

const productos = [
    {id:1, nombre: "Shampoo", precio: 500, img:"./img/shampoo.jpg"},
    {id:2, nombre: "Acondicionador", precio: 600, img:"./img/acondicionador.jpg"},
    {id:3, nombre: "Pañales", precio: 1500, img:"./img/pañal.jpg"},
    {id:4, nombre: "Jabon", precio: 300, img:"./img/jabon.jpg"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        } )
    }, 2000)
}

export const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}