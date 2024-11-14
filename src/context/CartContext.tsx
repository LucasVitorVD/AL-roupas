import { createContext, useState, useEffect } from "react"
import ProductInterface from "@/shared/interfaces/product"

interface PropsCartContext {
  cartItems: ProductInterface[],
  setCartItems: React.Dispatch<React.SetStateAction<ProductInterface[]>>,
  shipping: number,
  setShipping: React.Dispatch<React.SetStateAction<number>>
}

const DEFAULT_VALUE = {
  cartItems: [],
  setCartItems: () => {},
  shipping: 0,
  setShipping: () => {}
}

export const CartContext = createContext<PropsCartContext>(DEFAULT_VALUE)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductInterface[]>(DEFAULT_VALUE.cartItems)
  const [shipping, setShipping] = useState(DEFAULT_VALUE.shipping)

  useEffect(() => {
    const localStorageItems = localStorage.getItem("items")
    
    if (localStorageItems) {
      setCartItems(JSON.parse(localStorageItems))
    }
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      setShipping(40)
    } else {
      setShipping(0)
    }
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, setShipping, shipping }}>
      {children}
    </CartContext.Provider>
  )
}