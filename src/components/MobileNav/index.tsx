import { CartContext } from "@/context/CartContext"
import { useContext } from "react"
import { StyledMobileMenu, StyledCartIcon } from "./styles"
import { ShoppingBag, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navigation from "../Navigation"

interface MobileNavProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const MobileNav = ({ setIsOpen }: MobileNavProps) => {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  function handleNavigate(toPage: string) {
    setIsOpen(false)
    navigate(toPage)
    return
  }

  return (
    <StyledMobileMenu>
      <div className="menuHeader">
        <div className="closeHeader">
          <X onClick={() => setIsOpen(false)} />
        </div>
      </div>

      <div className="itemsArea">
        <div className="items" onClick={() => handleNavigate("/cart")}>
          <StyledCartIcon>
            <ShoppingBag />
            <span className="cartBadge">{cartItems.length}</span>
          </StyledCartIcon>
          <p>Carrinho</p>
        </div>

        <div className="navigation-categories">
          <p className="title">Categorias</p>

          <Navigation isColumn setIsOpen={setIsOpen} />
        </div>

        <div className="navigation-sections">
          <p className="title">Seções</p>

          <p onClick={() => handleNavigate("/")}>Início</p>
          <p onClick={() => handleNavigate("/about")}>Sobre nós</p>
          <p onClick={() => handleNavigate("/jobs")}>Vagas</p>
        </div>
      </div>
    </StyledMobileMenu>
  )
}

export default MobileNav