import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { db } from '../firebase/firebase';
import { useParams } from 'react-router-dom';
import {collection, doc, getDoc } from 'firebase/firestore'

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);
  console.log(db)


  const {id} = useParams()

  useEffect(() => {
    const productCollection = collection(db, "vinos");
    const referenceDoc = doc(productCollection, id)

    getDoc(referenceDoc)
      .then((res) => setProductDetail({id:res.id, ...res.data()}))
      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      <div >
        <ItemDetail productDetail={productDetail} loading={loading} />
      </div>
    </>
  )
}
