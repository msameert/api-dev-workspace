import Base from './components/base'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Backend from './components/backend.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  < App />
  < Base />
  < Backend />
  </>
  
)
