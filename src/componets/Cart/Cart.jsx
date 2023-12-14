import Wrapper from '../Wrapper/Wrapper'
import CartElements from './CartElements'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.cartContainer}>
          <CartElements />
        </div>
      </Wrapper>
    </>
  )
}

export default Cart
