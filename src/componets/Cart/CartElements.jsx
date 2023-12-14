import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MiContexto from '../../context/MiContexto'
import styles from './CartElements.module.css'

const CartElements = () => {
  const {
    cart,
    setCart,
    handleBuy,
    total,
    orderId,
    sendOrder,
    decreaseProduct,
    removeProduct,
  } = useContext(MiContexto)

  //Input Handler

  const handleFormChange = (e) => {
    e.preventDefault()

    setCart({
      ...cart,
      buyer: {
        ...cart.buyer,
        nombre: e.target.nombre.value,
        apellido: e.target.apellido.value,
        telefono: e.target.telefono.value,
        email: e.target.email.value,
      },
    })
    sendOrder()
    // notify()
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartTitleContainer}>
        <h2>Mi Carrito:</h2>
      </div>
      {cart.items.length != 0 ? (
        cart.items.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3 className={styles.productTitle}>{product.name}</h3>
            <h3 className={styles.productPrice}>{product.price}</h3>

            <div className={styles.btnsContainer}>
              <button
                className={styles.decreaseProduct}
                onClick={() => decreaseProduct(product)}
              >
                -
              </button>
              <h3 className={styles.productQuantity}>{product.quantity}</h3>
              <button
                className={styles.addProduct}
                onClick={() => handleBuy(product)}
              >
                +
              </button>
            </div>

            <h4 className={styles.priceQuantityTxt}>
              {product.price * product.quantity}
            </h4>
            <button
              className={styles.remove}
              onClick={() => removeProduct(product)}
            >
              X
            </button>
          </div>
        ))
      ) : (
        <div>
          <h2>No hay productos en el carrito</h2>
        </div>
      )}

      {cart.items.length !== 0 && (
        <>
          <div className={styles.containerForm}>
            <form
              action='post'
              id='form'
              className={styles.formContainer}
              onSubmit={(e) => handleFormChange(e)}
            >
              <div>
                <label htmlFor='nombre'>NOMBRE</label>
                <input
                  className={styles.input}
                  type='text'
                  name='nombre'
                  placeholder='nombre'
                  required
                />
              </div>
              <div>
                <label htmlFor='apellido'>APELLIDO</label>
                <input
                  className={styles.input}
                  type='text'
                  name='apellido'
                  placeholder='apellido'
                  required
                />
              </div>
              <div>
                <label htmlFor='telefono'>TELEFONO</label>
                <input
                  className={styles.input}
                  type='tel'
                  name='telefono'
                  id='telefono'
                  placeholder='telefono'
                  required
                />
              </div>
              <div>
                <label htmlFor='email'>E-MAIL</label>
                <input
                  className={styles.input}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='e-mail'
                  required
                />
              </div>
              <div>
                <label htmlFor='email_repeat'>E-MAIL</label>
                <input
                  className={styles.input}
                  type='email'
                  name='email_repeat'
                  id='email_repeat'
                  placeholder='repetir e-mail'
                  required
                />
              </div>

              <button className={styles.btnSubmit} type='submit'>
                ENVIAR
              </button>
            </form>
            {orderId !== '' && (
              <Link className={styles.link} to={'/checkOut'}>
                Detalle de la orden
              </Link>
            )}
          </div>

          <div className={styles.totalContainer}>
            <p>TOTAL: ${total()}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CartElements
