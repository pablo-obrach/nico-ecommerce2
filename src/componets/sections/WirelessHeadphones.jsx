import { useEffect, useState } from 'react'
import Products from '../products/Products'
import Header from '../header/Header'
import Footer from '../footer/Footer'
//Styles
import styles from './WirelessHeadphones.module.css'

const WirelessHeadphones = () => {
  const [wirelessHeadphones, setWirelessHeadphones] = useState(null)

  useEffect(() => {
    fetch('src/Mock/products.json')
      .then((res) => res.json())
      .then((data) => setWirelessHeadphones(data))
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
