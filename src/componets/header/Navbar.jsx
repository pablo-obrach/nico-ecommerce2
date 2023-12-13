import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarLista}>
        <Link className={styles.link} to={'/tienda'}>
          <li className={styles.navbarItem}>Tienda</li>
        </Link>
        <li className={styles.navbarItem}>Contacto</li>
      </ul>
    </div>
  )
}

export default Navbar
