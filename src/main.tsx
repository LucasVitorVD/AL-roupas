import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartContextProvider } from './context/CartContext.tsx'
import { FilterContextProvider } from './context/FilterContext.tsx'
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterContextProvider>
        <CartContextProvider>
          <App />
          <Toaster />
        </CartContextProvider>
      </FilterContextProvider>
  </React.StrictMode>,
)
