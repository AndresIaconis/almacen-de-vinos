import React, {useState, useEffect} from 'react'
// import { CustomFetch } from './CustomFetch'
import ItemList from './ItemList'
import { ProductData } from './mock/Api'
import Productos from './Productos'


export default function ItemListContainer({saludo}) {

  const [listProducts, setListProducts] = useState([])
  useEffect(() => {
    ProductData
    .then(data=> setListProducts(data))
    .catch("error")
  },[])

  return (
    <>
    <ItemList listProducts={listProducts}  />
    <div>{saludo}</div>
    </>
  )
}
