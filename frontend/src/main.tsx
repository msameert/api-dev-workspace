import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './components/base'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Backend from './components/backend.tsx'

function App () {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/"  element={<Base />}  />
        <Route path="/backend"  element={<Backend />}  />
       </Routes>
    </BrowserRouter>
  );
}

export default App;