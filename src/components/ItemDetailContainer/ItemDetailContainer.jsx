import { useEffect, useState } from "react"
import { getProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
      const nuevoDoc = doc(db, "productos", idItem);

      getDoc(nuevoDoc).then(res => {
        const data = res.data();
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto)
      }).catch(error => console.log(error))
    },[idItem])



  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer