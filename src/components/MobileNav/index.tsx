import { CartContext } from "@/context/CartContext"
import { FilterContext } from "@/context/FilterContext"
import { useContext, useState } from "react"
import { StyledMobileMenu, StyledCartIcon } from "./styles"
import { Search, ShoppingBag, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navigation from "../Navigation"

interface MobileNavProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const MobileNav = ({ setIsOpen }: MobileNavProps) => {
  const { cartItems } = useContext(CartContext)
  const { setName, setCurrentPage } = useContext(FilterContext)
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  function handleNavigate(toPage: string) {
    setIsOpen(false)
    navigate(toPage)
    return
  }

  function handleSearchProduct(name: string) {
    setCurrentPage(0)
    setName(name)
    setIsOpen(false)

    return
  }

  return (
    <StyledMobileMenu>
      <div className="menuHeader">
        <div className="closeHeader">
          <X onClick={() => setIsOpen(false)} />
        </div>

        <div className="searchAreaMobile">
          <input 
              type="text" 
              placeholder="Procurando por algo específico?"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          <Search onClick={() => handleSearchProduct(searchTerm)} />
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

          <Navigation isColumn />
        </div>
      </div>
    </StyledMobileMenu>
  )
}

export default MobileNav