import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ( {productos} ) => {
  return (
    <div className="row row-cols-auto justify-content-md-center">
      {productos.map(prod => <Item key={prod.id}{...prod} />)}
    </div>
  )
}

export default ItemList