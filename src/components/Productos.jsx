import React from 'react';

export default function Productos ({item}) {
    console.log(item)
    return (
        <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        </div>
    )
}
