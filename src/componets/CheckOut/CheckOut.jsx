import { useContext, useEffect, useState } from 'react'
import MiContexto from '../../context/MiContexto'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Wrapper from '../Wrapper/Wrapper'
import style from './CheckOut.module.css'

const CheckOut = () => {
  const { orderId } = useContext(MiContexto)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, 'orders', orderId)
    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setOrder({ id: snapshot.id, ...snapshot.data() })
      }
    })
  }, [orderId])

  return (
    <>
      <Wrapper>
        <div className={style.mainContainer}>
          {order != null ? (
            <div className={style.checkOutContainer}>
              <div className={style.checkOutInfo}>
                <h2>Detalle de la orden</h2>
                <h3>Id: {order.id}</h3>
                <h3>Nombre: {order.buyer.nombre}</h3>
                <h3>Apellido: {order.buyer.apellido}</h3>
                <h3>Email: {order.buyer.email}</h3>
                <h3>Telefono: {order.buyer.telefono}</h3>
              </div>

              <div className={style.checkOutItems}>
                <h2>Productos:</h2>
                {order.items.map((item, index) => (
                  <div className={style.itemsContainer} key={index}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h3>{item.name}</h3>
                      <h3>Precio: {item.price}</h3>
                      <h3>Cantidad: {item.quantity}</h3>
                    </div>
                  </div>
                ))}
                <h2>Total: {order.total}</h2>
              </div>
            </div>
          ) : (
            <h2>no hay ordenes</h2>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default CheckOut
