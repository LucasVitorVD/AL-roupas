import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import ProductInterface from "@/shared/interfaces/product"
import { CartContext } from "@/context/CartContext"
import Button from "@/components/Button"
import GoBack from "@/components/GoBack"
import { StyledProductSection, StyledCardContainer } from "./styles"
import { TailSpin } from "react-loader-spinner"

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { cartItems, setCartItems } = useContext(CartContext)
  const [buttonText, setButtonText] = useState("ADICIONAR AO CARRINHO")
  
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<ProductInterface>({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: ""
  })

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const result = await response.json()

      console.log(result)

      setProduct(result)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  function updateButtonText(newText: string) {
    setButtonText(newText)
    setTimeout(() => {
      setButtonText("ADICIONAR AO CARRINHO")
    }, 3000)
  }

  function handleAddToCart(product: ProductInterface) {
    const productInCart = cartItems.find(item => item.id === product.id)
  
    if (!productInCart) {
      const newProduct: ProductInterface = { ...product, quantity: 1 }
      setCartItems(prevItems => [...prevItems, newProduct])
      updateButtonText("PRODUTO ADICIONADO AO CARRINHO!")
      localStorage.setItem('items', JSON.stringify([...cartItems, newProduct]))
      return
    } else {
      const { quantity } = productInCart
  
      const updatedQuantity = (quantity ?? 0) + 1
      const clampedQuantity = Math.min(updatedQuantity, 3)
  
      productInCart.quantity = clampedQuantity

      // atualizando o localStorage
      const updatedCartItems = cartItems.map(item =>
        item.id === productInCart.id ? productInCart : item
      )

      localStorage.setItem('items', JSON.stringify(updatedCartItems));
    }
  }

  return (
    <StyledProductSection>
      {loading && <TailSpin color="black" />}

      <GoBack />

      <StyledCardContainer>
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>

        <div className="productInfos">
          <span>Produto</span>
          <div className="infoText">
            <h2>{product.title}</h2>
            <p>R${product.price}</p>
            <p id="detailText">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <div className="description">
              <h4>DESCRIÇÃO</h4>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="cardFooter">
            <Button 
              text={buttonText}
              Icon={ShoppingBag}
              value={buttonText === "PRODUTO ADICIONADO AO CARRINHO!" ? "success" : "default"}
              handleOnClick={() => handleAddToCart(product)} 
            />
          </div>
        </div>
      </StyledCardContainer>
    </StyledProductSection>
  )
}

export default ProductPage