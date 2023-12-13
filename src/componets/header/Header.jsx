import HeaderLogo from './HeaderLogo'
import Navbar from './Navbar'
import CartIcon from './CartIcon'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <Navbar />
      <CartIcon />
    </div>
  )
}

export default Header
