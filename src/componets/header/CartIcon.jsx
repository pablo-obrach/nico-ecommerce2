import carritoimg from '../../assets/imagenes/redes/carrito.svg'
import styles from './CartIcon.module.css'
import { useContext } from 'react'
import MiContexto from '../../context/MiContexto'

const CartIcon = () => {
  const { cart } = useContext(MiContexto)
  return (
    <>
      <div className={styles.cartIcon}>
        <img src={carritoimg} alt='carrito' />
      </div>

      <div>
        <p>{cart.items.length}</p>
      </div>
    </>
  )
}

export default CartIcon
