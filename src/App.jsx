import Main from './componets/main/main'
import Tienda from './componets/tienda/Tienda'
import Test from './componets/sections/Test'
import WirelessHeadphones from './componets/sections/WirelessHeadphones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
            <Route path='/test' element={<Test />} />
          </Routes>
        </CartData>
      </BrowserRouter>
    </>
  )
}

export default App
