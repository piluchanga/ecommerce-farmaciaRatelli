import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCategoria", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos).then(res => {
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos);
    }).catch(error => console.log(error))
  },[idCategoria])

  return (
    <>
      <h2 className='titulo'>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer