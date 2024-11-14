import { useContext, useState } from "react"
import { StyledHeaderWrapper, StyledSearchWrapper, StyledSearchArea, StyledCartArea, StyledMobileMenuIcon } from "./styles"
import { ShoppingBag, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { CartContext } from "@/context/CartContext"
import MobileNav from "../MobileNav"
import { FilterContext } from "@/context/FilterContext"

const Header = () => {
  const { cartItems } = useContext(CartContext)
  const { setName, setCurrentPage } = useContext(FilterContext)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  function handleSearch(name: string) {
    setCurrentPage(0)
    setName(name)
    setSearch("")

    return
  }

  return (
    <StyledHeaderWrapper>
      <Link to="/">
        <h1>AL modas</h1>
      </Link>
      <StyledSearchWrapper>
        <StyledSearchArea>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={30} onClick={() => handleSearch(search)} />
        </StyledSearchArea>
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