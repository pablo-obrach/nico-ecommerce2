import MiContexto from './MiContexto'
import { useState } from 'react'

const CartData = ({ children }) => {
  const [cart, setCart] = useState('item')

  return (
    <MiContexto.Provider value={{ cart, setCart }}>
      {children}
    </MiContexto.Provider>
  )
}

export default CartData
