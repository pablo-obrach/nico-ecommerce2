import Main from './componets/main/main'
import Tienda from './componets/tienda/Tienda'
import WirelessHeadphones from './componets/sections/WirelessHeadphones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CartContext from './context/CartContext'
import CartData from './context/CartData'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartData>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/wirelessHeadphone' element={<WirelessHeadphones />} />
          </Routes>
        </CartData>
      </BrowserRouter>
    </>
  )
}

export default App
