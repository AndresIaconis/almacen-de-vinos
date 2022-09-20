import React, { useState, useEffect } from 'react'
import { data } from '../mock/Api';
import ItemDetail from './ItemDetail'
import ItemDetailContainer from './ItemDetailContainer';
import './PopupDetail.css'

export default function prueba(props) {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === 4)))
      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [])

  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
        <button className="close-btn">X</button>
        <div>
          {loading ?
            <p>Cargando...</p>
            :
            <ItemDetail productDetail={productDetail} />}
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
}
