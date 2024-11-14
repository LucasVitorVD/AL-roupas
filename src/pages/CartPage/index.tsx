import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { StyledCartSection, StyledCartProductsWrapper, StyledProductsWrapper, StyledOrderSummaryWrapper, StyledFooter } from "./styles"
import ProductCard from "@/components/Product"
import GoBack from "@/components/GoBack"
import Button from "@/components/Button"

const CartPage = () => {
  const { cartItems, shipping } = useContext(CartContext)

  const totalInCents = cartItems.reduce((acc, item) => {
    if (!item.quantity) item.quantity = 1

    return acc + (item.price * item.quantity) / 100
  }, shipping)

  const formattedTotal = totalInCents.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <StyledCartSection>
      <StyledCartProductsWrapper>
        <div className="header">
          <GoBack />
          <h1>SEU CARRINHO</h1>
          <p>Total ({cartItems.length} produtos) <strong>{formattedTotal}</strong></p>
        </div>

        <StyledProductsWrapper>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <ProductCard 
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
                page="cart"
              />
            ))
          ) : (
            <p>Não há produtos</p>
          )}
        </StyledProductsWrapper>
      </StyledCartProductsWrapper>

      <StyledOrderSummaryWrapper>
        <div className="summary">
          <h2>RESUMO DO PEDIDO</h2>
          <div>
            <p>Subtotal de produtos</p>
            <span>{formattedTotal}</span>
          </div>

          {shipping !== 0 && (
            <div>
              <p>Entrega</p>
              <span>R$ {shipping},00</span>
            </div>
          )}

          <div className="total">
              <p>Total</p>
              <span>{formattedTotal}</span>
          </div>

          <Button 
            text="FINALIZAR A COMPRA"
            value="success"
          />
        </div>

        <StyledFooter>
          <a href="#">AJUDA</a>
          <a href="#">REEMBOLSOS</a>
          <a href="#">ENTREGAS E FRETE</a>
          <a href="#">TROCAS E DEVOLUÇÕES</a>
        </StyledFooter>
      </StyledOrderSummaryWrapper>
    </StyledCartSection>
  )
}

export default CartPage