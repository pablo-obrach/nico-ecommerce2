import Wrapper from '../Wrapper/Wrapper'
import styles from './TrueWireless.module.css'
import Products from '../products/Products'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const TrueWireless = () => {
  const [trueWireless, setTrueWireless] = useState(null)

  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection(db, 'items'),
      where('label', '==', 'truewireless'),
    )
    getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        setTrueWireless(
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
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            {trueWireless != null ? (
              trueWireless.map((product) => (
                <Products key={product.id} item={product} />
              ))
            ) : (
              <p> No hay Productos Disponibles</p>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default TrueWireless
