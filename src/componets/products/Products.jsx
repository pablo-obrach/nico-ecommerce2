import styles from './Products.module.css'
import MiContexto from '../../context/MiContexto'
import { useContext } from 'react'
const Products = ({ item }) => {
  const { handleBuy } = useContext(MiContexto)
  console.log(item)
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <button onClick={() => handleBuy(item)} className={styles.btnComprar}>
        Comprar
      </button>
    </div>
  )
}

export default Products
