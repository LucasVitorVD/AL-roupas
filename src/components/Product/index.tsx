import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { Trash2 } from "lucide-react"
import { StyledProductCard } from "./styles"
import ProductInterface from "@/shared/interfaces/product"

interface ProductCardProps extends Partial<ProductInterface> { 
  page: "home" | "cart"
}

const ProductCard = ({ 
  id,
  image, 
  title, 
  description, 
  price, 
  quantity, 
  page
}: ProductCardProps) => {
  const { cartItems, setCartItems } = useContext(CartContext)

  function handleDeleteItem(id: number) {
    if (!id) {
      throw new Error('Produto não encontrado!')  
    }

    const updatedCartItems = cartItems.filter(item => item.id !== id)

    setCartItems(updatedCartItems)
    localStorage.setItem("items", JSON.stringify(updatedCartItems))
  }

  function handleOnChangeProductQuantity(id: number, newQuantity: number) {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }

      return item
    })

    setCartItems(updatedItems)
    localStorage.setItem("items", JSON.stringify(updatedItems))
  }

  return (
    <StyledProductCard page={page}>
      <figure>
        <img src={image} alt={title} />
      </figure>
      
      {page === 'home' && (
        <div className="infos">
          <p>{title}</p>
          <p>R${price}</p>
        </div>
      )}

      {page === 'cart' && (
        <div className="infosContainer">
        <div className="infos">
            <div>
              <p>{title}</p>
              <button onClick={() => handleDeleteItem(id ?? 0)}>
                <Trash2 color="#DE3838" />
              </button>
            </div>
            <p className="productDesc">
              {description}
            </p>
          </div>
          <div className="cardSummary">
          <select 
            name="productQuantity" 
            id="productQuantity"
            value={quantity} 
            onChange={(e) => handleOnChangeProductQuantity(id ?? 0, Number(e.target.value))}
            >
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <span><strong>{price}</strong></span>
          </div>
        </div>
      )}
    </StyledProductCard>
  )
}

export default ProductCard