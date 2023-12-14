import Wrapper from '../Wrapper/Wrapper'
import { useParams } from 'react-router-dom'
import MiContexto from '../../context/MiContexto'
import { useContext, useState, useEffect } from 'react'
import { getDocs, getFirestore, query, collection } from 'firebase/firestore'
//Styles
import styles from './ItemDetail.module.css'

const ItemDetail = () => {
  const { productId } = useParams()
  const { handleBuy } = useContext(MiContexto)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'))
    getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        setProduct(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          }),
        )
      }
    })
  }, [])

  return (
    <>
      <Wrapper>
        {product &&
          product
            .filter((prod) => prod.id === productId)
            .map((product) => (
              <div className={styles.mainContainer} key={product.id}>
                <div className={styles.imgContainer}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.infoContainer}>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>Price: ${product.price}</p>
                  <button
                    className={styles.btnComprar}
                    onClick={() => handleBuy(product)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
      </Wrapper>
    </>
  )
}

export default ItemDetail
