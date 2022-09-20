import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mock/Api';
import ItemListGrid from './ItemList';

export default function ItemListContainerGrid() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const {category}= useParams()

    useEffect(() => {
        data
            .then((res) => {
            if (category){
                setItems(res.filter(item => item.category === category))
            } else {
                setItems(res)
            }
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [category])

    return (
        <div style={{marginLeft:"5%"}}>
            <ItemListGrid items={items} loading={loading} />
        </div>
    )
}


