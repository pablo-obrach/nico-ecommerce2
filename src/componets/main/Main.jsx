//Components
import Header from '../header/Header'
import Footer from '../footer/Footer'
//files and styles
import headPhone from '../../assets/imagenes/main/banner1.jpg'
import headPhone2 from '../../assets/imagenes/main/banner2.jpg'
import headPhone3 from '../../assets/imagenes/main/banner3.jpg'
import card1 from '../../assets/imagenes/main/filtro1.jpg'
import card2 from '../../assets/imagenes/main/filtro2.jpg'
import card3 from '../../assets/imagenes/main/filtro3.jpg'
import styles from './Main.module.css'

const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <article className={styles.banner}>
          <div className={styles.bannerContainer}>
            <div className={styles.img1Container}>
              <h2 className={styles.mainText}>¡FESTEJA A TODO RITMO!</h2>
              <img className={styles.img1} src={headPhone} alt='headPhone' />
            </div>
            <div className={styles.img2Container}>
              <img className={styles.imgA} src={headPhone2} alt='headPhone2' />
              <img className={styles.imgB} src={headPhone3} alt='headPhone3' />
            </div>
          </div>
        </article>
        <article>
          <div className={styles.cardsContainer}>
            <img className={styles.card} src={card1} alt='headPhone' />
            <img className={styles.card} src={card2} alt='headPhone' />
            <img className={styles.card} src={card3} alt='headPhone' />
          </div>
        </article>

        <article>
          <div className={styles.newsLetter}>
            <h3>¡SUSCRÍBETE A NUESTRO BOLETÍN!</h3>
            <p>
              Se el primero en realizar un pedido anticipado de un nuevo
              producto, escuchar acerca de ofertas y captar nuestros próximos
              conciertos en vivo y episodios de podcasts.
            </p>

            <input type='email' placeholder='Correo electrónico' />
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default Main
