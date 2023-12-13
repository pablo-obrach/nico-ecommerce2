//files and styles
import youtubeIcon from '../../assets/imagenes/redes/youtube_white.svg'
import instagramIcon from '../../assets/imagenes/redes/instagram_white.svg'
import meracadoPagoIcon from '../../assets/imagenes/redes/mercadopago.png'
import dataFiscalIcon from '../../assets/imagenes/redes/datafiscal.jpg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.socialsContainer}>
        <div className={styles.socialsImg}>
          <img src={instagramIcon} alt='instagram' />
          <img src={youtubeIcon} alt='youtube' />
        </div>

        <div className={styles.listContainer}>
          <ul>
            <li>Tienda</li>
            <li>Nuestra Historia</li>
            <li>Contactanos</li>
          </ul>

          <ul>
            <li>Preguntas Frecuentes</li>
            <li>Garantia</li>
            <li>Terminos y Condiciones</li>
          </ul>

          <ul>
            <li>Wireless Headphones</li>
            <li>True Wireless</li>
            <li>Wireless Earbuds</li>
          </ul>
        </div>

        <div className={styles.socialsImg}>
          <img src={meracadoPagoIcon} alt='mercado pago' />
          <img src={dataFiscalIcon} alt='data fiscal' />
        </div>
      </div>
      <div className={styles.footerEnd}>
        <p>© 2022 Naikos. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
