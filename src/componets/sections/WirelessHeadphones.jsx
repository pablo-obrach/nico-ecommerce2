import { useEffect, useState } from 'react'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import Products from '../products/Products'
import Header from '../header/Header'
import Footer from '../footer/Footer'
//Styles
import styles from './WirelessHeadphones.module.css'

const WirelessHeadphones = () => {
  const [wirelessHeadphones, setWirelessHeadphones] = useState(null)

  useEffect(() => {
    const db = getFirestore()

    const q = query(collection(db, 'items'), where('label', '==', 'headset'))
    getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        setWirelessHeadphones(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          }),
        )
      }
    })
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          {wirelessHeadphones != null ? (
            wirelessHeadphones.map((product) => (
              <Products key={product.id} item={product} />
            ))
          ) : (
            <p> No hay Productos Disponibles</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WirelessHeadphones
