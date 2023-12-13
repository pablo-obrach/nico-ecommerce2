import Header from '../header/Header'
import Footer from '../footer/Footer'
//Images
import wirless1 from '../../assets/imagenes/productos/tienda/1.jpg'
import wirless2 from '../../assets/imagenes/productos/tienda/2.jpg'
import wirless3 from '../../assets/imagenes/productos/tienda/3.jpg'
import wirless4 from '../../assets/imagenes/productos/tienda/4.jpg'
//Styles
import styles from './Tienda.module.css'
//Links
import { Link } from 'react-router-dom'

const Tienda = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h2>Nuestros Productos</h2>
        </div>

        <div className={styles.cardSectionsContainer}>
          <Link className={styles.link} to={'/wirelessHeadphone'}>
            <div className={styles.card}>
              <img src={wirless1} alt='Wireless-Headphones' />
              <h3>Wireless-Headphones</h3>
            </div>
          </Link>

          <div className={styles.card}>
            <img src={wirless2} alt='Wireless-Earbuds' />
            <h3>Wireless-Earbuds</h3>
          </div>

          <div className={styles.card}>
            <img src={wirless3} alt='Wired-Earbuds' />
            <h3>Wired-Earbuds</h3>
          </div>

          <div className={styles.card}>
            <img src={wirless4} alt='True-Wireless' />
            <h3>True-Wireless</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Tienda
