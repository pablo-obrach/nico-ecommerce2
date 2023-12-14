import carritoimg from '../../assets/imagenes/redes/carrito.svg'
import styles from './CartIcon.module.css'
import { useContext } from 'react'
import MiContexto from '../../context/MiContexto'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cart } = useContext(MiContexto)
  return (
    <div>
      <Link className={styles.link} to={'/carrito'}>
        <div className={styles.cartIcon}>
          <p>{cart.items.length}</p>
          <img src={carritoimg} alt='carrito' />
        </div>
      </Link>
    </div>
  )
}

export default CartIcon
