import React, {useState, useEffect} from 'react'

export const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const increase = () => {
        setContador (contador + 1)
    }

    const decrease = () => {
        setContador (contador - 1)
    }

    useEffect(() => {
        return () => {
    }
    }, [])
    




  return (
    <div>
        <h1>{contador}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}
