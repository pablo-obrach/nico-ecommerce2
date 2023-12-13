import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: 'nikosecommerce.firebaseapp.com',
  projectId: 'nikosecommerce',
  storageBucket: 'nikosecommerce.appspot.com',
  messagingSenderId: '424043347167',
  appId: '1:424043347167:web:66eec78aac3ab2e3f87d6a',
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
