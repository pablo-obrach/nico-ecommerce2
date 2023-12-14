import Wrapper from '../Wrapper/Wrapper'
import Products from '../products/Products'
import { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import styles from './WiredEarbuds.module.css'

const WiredEarbuds = () => {
  const [WiredEarbuds, setWiredEarbuds] = useState(null)

  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection(db, 'items'),
      where('label', '==', 'wiredearbuds'),
    )
    getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        setWiredEarbuds(
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
            {WiredEarbuds != null ? (
              WiredEarbuds.map((product) => (
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

export default WiredEarbuds
