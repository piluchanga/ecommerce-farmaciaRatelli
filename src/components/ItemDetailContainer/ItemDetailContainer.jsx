import { useEffect, useState } from "react"
import { getProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProducto(3).then(prod => setProducto(prod));
    })
  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer