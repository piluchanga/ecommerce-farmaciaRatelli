import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria).then(result => setProductos(result) )
  }, [idCategoria])

  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer