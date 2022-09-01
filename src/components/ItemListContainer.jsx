import React, {useState, useEffect} from 'react'
import { CustomFetch } from './CustomFetch'
import ItemList from './ItemList'
import Productos from './Productos'

export default function ItemListContainer({saludo}) {

  const [listProducts, setListProducts] = useState([])
  useEffect(() => {
    CustomFetch(Productos)
    .then(data=> setListProducts (data))
  },[])
  console.log(listProducts)

  return (
    <>
    <ItemList listProducts={listProducts}  />
    <div>{saludo}</div>
    </>
  )
}
