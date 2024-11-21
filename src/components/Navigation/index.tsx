import { StyledNavigationWrapper } from "./styles"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { mappedCategory } from "@/shared/utils/util";

interface Category {
  category: string,
  title: string
}

interface Props {
  isColumn: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({ isColumn, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([])

  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    async function fetchCategories() {
      if (localStorage.getItem("categories")) {
        setCategories(JSON.parse(localStorage.getItem("categories")!))

        return
      }

      const response = await fetch('https://fakestoreapi.com/products/categories')

      const result = await response.json()

      const filteredCategories = result
        .filter((c: string) => c !== "electronics")
        .map((c: string) => mappedCategory[c as keyof typeof mappedCategory]);

      setCategories(filteredCategories)
      localStorage.setItem("categories", JSON.stringify(filteredCategories))
    }

    fetchCategories()
  }, [])

  function handleSetCategory(category: string) {
    const params = new URLSearchParams();
    params.set("category", category);

    if (setIsOpen) {
      setIsOpen(false)
    }
    
    navigate(`?${params.toString()}`);
  }

  return (
    <StyledNavigationWrapper isColumn={isColumn}>
      {categories.map((category, i) => (
        <p
          key={i}
          onClick={() => handleSetCategory(category.category)}
          className={category.category === searchParams.get("category") ? "isActive" : ""}
        >
          {category.title}
        </p>
      ))}
    </StyledNavigationWrapper>
  )
}

export default Navigation