import Main from './componets/main/main'
import Tienda from './componets/tienda/Tienda'
import ItemDetail from './componets/products/ItemDetail'
import WirelessHeadphones from './componets/sections/WirelessHeadphones'
import WiredEarbuds from './componets/sections/WiredEarbuds'
import TrueWireless from './componets/sections/TrueWireless'
import Cart from './componets/Cart/Cart'
import CheckOut from './componets/CheckOut/CheckOut'
import CartData from './context/CartData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartData>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/wirelessHeadphone' element={<WirelessHeadphones />} />
            <Route path='/wiredEarbuds' element={<WiredEarbuds />} />
            <Route path='/trueWireless' element={<TrueWireless />} />
            <Route path='/itemDetail/:productId' element={<ItemDetail />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkOut' element={<CheckOut />} />
          </Routes>
        </CartData>
      </BrowserRouter>
    </>
  )
}

export default App
