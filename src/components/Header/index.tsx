import { useContext, useState } from "react"
import { StyledHeaderWrapper, StyledSearchWrapper, StyledNavigationWrapper, StyledCartArea, StyledMobileMenuIcon } from "./styles"
import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { CartContext } from "@/context/CartContext"
import MobileNav from "../MobileNav"

const Header = () => {
  const { cartItems } = useContext(CartContext)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledHeaderWrapper>
      <Link to="/">
        <h1>AL modas</h1>
      </Link>
      <StyledSearchWrapper>
      <StyledNavigationWrapper>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre nós</Link>
        <Link to="/jobs">Vagas</Link>
      </StyledNavigationWrapper>
        <Link to="/cart">
          <StyledCartArea>
            <ShoppingBag />
            <div className="cartBadge">{cartItems.length}</div>
          </StyledCartArea>
        </Link>
      </StyledSearchWrapper>

      <StyledMobileMenuIcon 
        size={30}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />

      {isOpen && (
        <MobileNav setIsOpen={setIsOpen} />
      )}
    </StyledHeaderWrapper>
  )
}

export default Header