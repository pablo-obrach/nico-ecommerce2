import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
const Test = () => {
  const [productShow, setProductShow] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, 'items', 'IrBDGgMCvX76xxuvJ07S')
    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProductShow({ id: snapshot.id, ...snapshot.data() })
      }
    })
  }, [])

  return (
    <div>
      {productShow != null ? (
        <div>
          <h1>{productShow.name}</h1>
          <h3>{productShow.id}</h3>
          <img src={productShow.image} alt={productShow.name} />
          <p>{productShow.description}</p>
          <p>${productShow.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Test
