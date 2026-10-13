import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import BoasVindas from './components/BoasVindas.jsx'
import Grade from './components/Grade.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoasVindas nome="Bruna" />
    <BoasVindas nome="LOpes" />
    <BoasVindas nome="Kercia" />
    <br />
    <Grade coluna={3}>
      <BoasVindas nome="Bruna" />
      <BoasVindas nome="LOpes" />
      <BoasVindas nome="Kercia" />
    </Grade>
  </StrictMode>,
)
