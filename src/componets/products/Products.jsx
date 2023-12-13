import styles from './Products.module.css'
const Products = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <button className={styles.btnComprar}>Comprar</button>
    </div>
  )
}

export default Products
