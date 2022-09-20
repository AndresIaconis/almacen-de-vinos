import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/Api';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);

  const {id} = useParams()

  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === id)))
      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [id])
  console.log(id);

  return (
    <>
      <div>
        <ItemDetail productDetail={productDetail} loading={loading} />

      </div>
    </>
  )
}
