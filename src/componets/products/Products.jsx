import styles from './Products.module.css'
import { Link } from 'react-router-dom'
const Products = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <Link to={`/itemDetail/${item.id}`}>
        <button className={styles.btnComprar}>Ver Mas</button>
      </Link>
    </div>
  )
}

export default Products
