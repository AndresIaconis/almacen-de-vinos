import { createContext, useContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    const addItem = (item) => {
        const existInCart = cart.find((prod) => prod.id === item.id)
        if (existInCart) {
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }
            })
            setCart(updateCart)
        } else {
            setCart([...cart, item])
        }
    }

    const clear = () => {
        setCart([])

    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acum, prod) => acum += prod.price*prod.quantity, 0)

    }
    const sumItem = (item) => {
    const updateItem = cart.map((prod) => {
        if (prod.id === item.id && prod.quantity<item.stock) {
            return { ...prod, quantity: prod.quantity + 1 }
        } else {
            return prod
        }
    })
    setCart(updateItem)
    }  

    const reduceItem = (item) => {
        const updateItem = cart.map((prod) => {
            if (prod.id === item.id) {
                return { ...prod, quantity: prod.quantity - 1 }
            } else {
                return prod
            }
        })
        setCart(updateItem)
        }  

    return (
        <CartContext.Provider value={{ cart, clear, removeItem, isInCart, sumItem, reduceItem, addItem, cartTotal, cartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)