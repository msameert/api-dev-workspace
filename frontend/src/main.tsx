import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css'
import Home from './components/home.tsx'

function App () {
  return (
    <BrowserRouter>
       <Routes>
        
        <Route path="/"  element={<Home />}  />
       </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(<App />);