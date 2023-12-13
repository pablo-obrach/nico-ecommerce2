import naikoslogo from '../../assets/imagenes/logo.png'
import { Link } from 'react-router-dom'
import styles from './HeaderLogo.module.css'
const HeaderLogo = () => {
  return (
    <div>
      <Link className={styles.link} to={'/'}>
        <img src={naikoslogo} alt='naikos logo' />
      </Link>
    </div>
  )
}

export default HeaderLogo
