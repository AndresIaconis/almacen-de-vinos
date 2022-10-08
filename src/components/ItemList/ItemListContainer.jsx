import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import {collection, doc, getDocs, query, where } from 'firebase/firestore'
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const {category}= useParams()

    useEffect(() => {
        setLoading(true)
        const products = category ? query(collection(db, "vinos"), where("category", "==", category)):collection(db, "vinos")
        getDocs(products)
            .then((res) => {
                console.log(res)
                const list = res.docs.map((product)=>{
                    return {
                        id: product.id, ...product.data()
                    }
                })
                setItems(list)
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [category])

    return (
        <div style={{marginLeft:"5%"}}>
            <ItemList items={items} loading={loading} />
        </div>
    )
}


