import { StyledSectionWrapper, StyledNavWrapper, StyledProductsWrapper } from "./styles"
import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import { Link } from "react-router-dom"
import ProductInterface from "@/shared/interfaces/product"
import ProductCard from "@/components/Product"
import { TailSpin } from "react-loader-spinner"
import { useLocation } from "react-router-dom";
import { mappedCategory } from "@/shared/utils/util"

const Home = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category")

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/category/${category ?? "jewelery"}`)
      const result = await response.json()

      setProducts(result)
      setLoading(false)
    }

    fetchProducts()
  }, [category])

  return (
    <StyledSectionWrapper>
      <StyledNavWrapper>
        <Navigation isColumn={false} />
      </StyledNavWrapper>
      
      <h1 className="categoryTitle">{ mappedCategory[category as keyof typeof mappedCategory]?.title ?? "Joalheria" }</h1>

      <StyledProductsWrapper>
        {loading && <TailSpin color="black" />}

        {!loading && products?.length > 0 ? (
          products?.map((product) => (
            <Link key={product.id} to={`product/${product.id}`}>
              <ProductCard 
                image={product.image}
                title={product.title} 
                price={product.price}
                page="home"
              />
            </Link>
          ))
        ) : (
          <p>Não há produtos</p>
        )}
      </StyledProductsWrapper>
    </StyledSectionWrapper>
  )
}

export default Home