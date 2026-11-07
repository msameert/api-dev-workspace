import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Base from './components/base'
import './index.css'
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

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(<App />);