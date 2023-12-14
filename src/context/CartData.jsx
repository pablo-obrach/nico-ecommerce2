import MiContexto from './MiContexto'
import { useState, useEffect } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const CartData = ({ children }) => {
  const [cart, setCart] = useState({
    buyer: {
      nombre: 'Jhon',
      apellido: 'Doe',
      email: 'jhon@doe.com',
      telefono: '123534563',
    },
    items: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
    total: 0,
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart.items))
  }, [cart])

  const [orderId, setOrderId] = useState('')

  const handleBuy = (product) => {
    const { items } = cart
    const index = items.findIndex((i) => i.id === product.id)

    if (index > -1) {
      items[index].cantidad += 1
    } else {
      items.push({
        ...product,
      })
    }

    setCart({
      ...cart,
      items,
      total: total(),
    })
  }

  const total = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0,
    )
  }

  const decreaseProduct = (product) => {
    const { items } = cart
    const index = items.findIndex((i) => i.id === product.id)

    if (index > -1) {
      items[index].cantidad -= 1
    }

    setCart({
      ...cart,
      items,
    })
  }

  const sendOrder = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, { ...cart, date: new Date() }).then(({ id }) => {
      setOrderId(id)
    })
  }

  return (
    <MiContexto.Provider
      value={{
        cart,
        setCart,
        orderId,
        handleBuy,
        total,
        decreaseProduct,
        sendOrder,
      }}
    >
      {children}
    </MiContexto.Provider>
  )
}

export default CartData
