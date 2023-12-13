import carritoimg from '../../assets/imagenes/redes/carrito.svg'
import styles from './CartIcon.module.css'

const CartIcon = () => {
  return (
    <div className={styles.cartIcon}>
      <img src={carritoimg} alt='carrito' />
    </div>
  )
}

export default CartIcon
